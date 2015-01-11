class CreateExhibitions < ActiveRecord::Migration
  def change
    create_table :exhibitions do |t|
      t.string :title_tr, limit: 60
      t.string :title_en, limit: 60
      t.string :text_tr, limit: 500
      t.string :text_en, limit: 500
      t.date   :start_at
      t.date   :end_at
      t.boolean :is_individual
      t.boolean :is_active
      t.timestamps
    end
  end
end
