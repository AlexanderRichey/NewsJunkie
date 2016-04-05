class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.text :body, null: false
      t.string :image_url

      t.date :pub_date, null: false
      t.integer :feed_id, null: false

      t.timestamps null: false
    end

    add_index :articles, :feed_id
  end
end
