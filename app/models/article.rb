class Article < ActiveRecord::Base
  validates :title, :url, :body, :pub_date, :feed_id, presence: true
  belongs_to :feed
  paginates_per 8
end
