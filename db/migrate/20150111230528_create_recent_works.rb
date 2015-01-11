class CreateRecentWorks < ActiveRecord::Migration
  def change
    create_table :recent_works do |t|
      t.string :title, limit: 60
      t.string :text, limit: 500
      t.string :href, limit: 500
      t.integer :order
      t.boolean :is_active
      t.references :language, index: true
      t.attachment :photo
    end
  end
end
