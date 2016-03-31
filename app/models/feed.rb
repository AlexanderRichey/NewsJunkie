require 'open-uri'

class Feed < ActiveRecord::Base
  validates :url, :name, presence: true
  validates :url, uniqueness: true
  validates_associated :categorized_feeds

  before_validation :fetch_and_set_name, on: :create

  has_many(
    :categorized_feeds,
    class_name: "CategorizedFeed",
    foreign_key: :feed_id,
    primary_key: :id
  )

  has_many :categories, through: :categorized_feeds, source: :category

  def fetch_and_set_name
    feed = Nokogiri::HTML(open(self.url))
    if feed
      self.name = feed.css("title")[0].text
    else
      return
    end
  end
end
