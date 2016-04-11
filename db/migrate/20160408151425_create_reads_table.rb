class CreateReadsTable < ActiveRecord::Migration
  def change
    create_table :reads do |t|
      t.integer :user_id
      t.integer :article_id

      t.timestamps
    end

    add_index :reads, :user_id
    add_index :reads, :article_id
  end
end
