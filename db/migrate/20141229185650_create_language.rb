class CreateLanguage < ActiveRecord::Migration
  def change
    create_table :languages do |t|
      t.string :name, limit: 25
      t.string :code, limit: 5
      t.string :icon, limit: 25
      t.boolean :is_active
    end
  end
end
