class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      t.timestamps null: false
    end

    add_index :categories, :user_id
  end
end
