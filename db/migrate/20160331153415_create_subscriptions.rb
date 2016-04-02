class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer :category_id, null: false
      t.integer :feed_id, null: false
    end

    add_index :subscriptions, :category_id
    add_index :subscriptions, :feed_id
    add_index :subscriptions, [:category_id, :feed_id], unique: true
  end
end
