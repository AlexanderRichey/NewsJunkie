class Article < ActiveRecord::Base
  validates :title, :url, :body, :pub_date, :feed_id, presence: true
  belongs_to :feed
  after_create :sanitize
  paginates_per 8

  def sanitize
    sanatizer = Rails::Html::WhiteListSanitizer.new

    content = sanatizer.sanitize(self.body,
      tags: %w(p a img em strong ul ol li h1 h2 h3 h4))

    self.body = content
    extract_and_cache_image(content)

    self.save
  end

  def extract_and_cache_image(content)
    parsed = Nokogiri::HTML(content)
    if parsed.css('img').first
      self.image_url = parsed
        .css('img')
        .first
        .attributes['src']
        .value
    end
  end
end
