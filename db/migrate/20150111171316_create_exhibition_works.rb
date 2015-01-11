class CreateExhibitionWorks < ActiveRecord::Migration
  def change
    create_table :exhibition_works do |t|

      t.attachment :photo
      t.string :title, limit: 100
      t.boolean :is_active
      t.references :exhibition, index: true

    end
  end
end
