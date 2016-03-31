class Category < ActiveRecord::Base
  validates :name, :user_id, presence: true
  belongs_to :user

  has_many(
    :categorized_feeds,
    class_name: "CategorizedFeed",
    foreign_key: :category_id,
    primary_key: :id
  )

  has_many :feeds, through: :categorized_feeds, source: :feed
end
