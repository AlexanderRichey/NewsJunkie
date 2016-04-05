class Category < ActiveRecord::Base
  validates :name, :user_id, presence: true
  belongs_to :user

  has_many(
    :subscriptions,
    class_name: "Subscription",
    foreign_key: :category_id,
    primary_key: :id
  )

  has_many(
    :feeds,
    through: :subscriptions,
    source: :feed,
    dependent: :destroy
  )

  has_many :articles, through: :feeds, source: :articles
end
