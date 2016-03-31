class CreateCategorizedFeeds < ActiveRecord::Migration
  def change
    create_table :categorized_feeds do |t|
      t.integer :category_id, null: false
      t.integer :feed_id, null: false
    end

    add_index :categorized_feeds, :category_id
    add_index :categorized_feeds, :feed_id
    add_index :categorized_feeds, [:category_id, :feed_id], unique: true
  end
end
