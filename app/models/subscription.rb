class Subscription < ActiveRecord::Base
  belongs_to :category
  belongs_to :feed
  has_one :user, through: :category

  after_create :fetch_articles

  def fetch_articles
    self.feed.fetch_articles
  end
end
