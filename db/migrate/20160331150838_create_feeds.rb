class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :url, null: false
      t.string :name, null: false
      t.date :updated_at, null: false

      t.timestamps null: false
    end
  end
end
