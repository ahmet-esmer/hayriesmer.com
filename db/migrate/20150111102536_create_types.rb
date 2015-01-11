class CreateTypes < ActiveRecord::Migration
  def change
    create_table :types do |t|
      t.string :code, limit: 100
      t.text :text
      t.boolean :is_active
      t.references :language, index: true
    end
  end
end
