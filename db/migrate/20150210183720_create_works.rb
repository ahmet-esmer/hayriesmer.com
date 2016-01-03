class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.string :title_tr, limit: 60
      t.string :title_en, limit: 60
      t.integer :order
      t.boolean :is_active
    end
  end
end
