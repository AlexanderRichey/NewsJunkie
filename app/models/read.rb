class Read < ActiveRecord::Base
  validates :article_id, :user_id, presence: true

  belongs_to :user
  belongs_to :article
end
