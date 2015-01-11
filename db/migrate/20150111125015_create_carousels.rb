class CreateCarousels < ActiveRecord::Migration
  def change
    create_table :carousels do |t|
      t.string :title, limit: 60
      t.string :text, limit: 500
      t.string :href, limit: 500
      t.integer :order
      t.boolean :is_active
      t.references :language, index: true
    end
  end
end
