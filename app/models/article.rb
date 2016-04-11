require 'open-uri'

class Article < ActiveRecord::Base
  validates :title, :url, :body, :pub_date, :feed_id, presence: true
  after_create :sanitize
  paginates_per 8

  belongs_to :feed
  has_many :reads

  include PgSearch
  multisearchable against: [:title, :body]

  has_attached_file :image, styles: {original: "206x111"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def show_image_url
    if self.image.url == "/images/original/missing.png"
      return nil
    else
      return self.image.url
    end
  end

  def sanitize
    sanatizer = Rails::Html::WhiteListSanitizer.new

    content = sanatizer.sanitize(self.body,
      tags: %w(p a img em strong ul ol li h1 h2 h3 h4 blockquote code))

    self.body = content
    extract_and_cache_image(content)

    self.save!
  end

  def extract_and_cache_image(content)
    parsed = Nokogiri::HTML(content)
    if parsed.css('img').first
      begin
        image_url = parsed
          .css('img')
          .first
          .attributes['src']
          .value

        self.image_from_url(image_url)
      rescue
        return nil
      end
    end
  end

  def image_from_url(url)
    begin
      self.image = open(url)
    rescue
      return nil
    end
  end
end
