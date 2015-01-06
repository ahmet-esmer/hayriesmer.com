class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :text, limit: 100
      t.string :href, limit: 500
      t.integer :order
      t.boolean :is_active
      t.references :language, index: true
    end
  end
end
