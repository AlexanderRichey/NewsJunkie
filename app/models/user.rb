class User < ActiveRecord::Base
  validates :email, :session_token, presence: true
  validates :password_digest, presence: true, unless: :facebook?
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  after_create :setup_categories

  has_many :categories
  has_many :feeds, through: :categories, source: :feeds
  has_many :articles, through: :feeds, source: :articles
  has_many :reads

  attr_reader :password

  def facebook?
    self.provider == "facebook"
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    provider = auth_hash[:provider]
    uid = auth_hash[:uid]

    user = User.find_by(provider: provider, uid: uid)
    return user if user

    email = auth_hash[:info][:email]
    user = User.create!(
      provider: provider,
      uid: uid,
      email: email,
      )

    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def fetch_articles
    self.feeds.each do |feed|
      feed.fetch_articles
    end
  end

  def mark_all_as_read
    self.articles.each do |article|
      self.reads.find_or_create_by(article_id: article.id)
    end
  end

  def mark_category_as_read(category_id)
    Category.find(category_id).articles.each do |article|
      self.reads.find_or_create_by(article_id: article.id)
    end
  end

  def mark_feed_as_read(feed_id)
    Feed.find(feed_id).articles.each do |article|
      self.reads.find_or_create_by(article_id: article.id)
    end
  end

  private
  def setup_categories
    starter_categories =
      ["News & Politics", "Tech", "Sports", "Entertainment"]

    starter_categories.each do |name|
      Category.create(name: name, user_id: self.id)
    end
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
