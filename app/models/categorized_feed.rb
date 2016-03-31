class CategorizedFeed < ActiveRecord::Base
  belongs_to :category
  belongs_to :feed
end
