require 'open-uri'
require 'rss'

class Feed < ActiveRecord::Base
  validates :url, :name, presence: true
  validates :url, uniqueness: true
  validates_associated :subscriptions

  before_validation :fetch_and_set_name, on: :create

  has_many(
    :subscriptions,
    class_name: "Subscription",
    foreign_key: :feed_id,
    primary_key: :id
  )

  has_many :categories, through: :subscriptions, source: :category
  has_many :articles

  def fetch_and_set_name
    feed = Feedjira::Feed.fetch_and_parse self.url

    if feed
      self.name = feed.title
    else
      return
    end
  end

  def fetch_articles
    return if self.updated_at < 15.minutes.ago &&
      !(self.created_at < 15.minutes.ago)

    feed = Feedjira::Feed.fetch_and_parse self.url

    feed.entries.each do |article|
      content = article.content || article.summary
      Article.find_or_create_by(
        title: article.title,
        url: article.url,
        body: content,
        pub_date: article.published,
        feed_id: self.id
      )
    end

    self.updated_at = Time.now
  end
end
