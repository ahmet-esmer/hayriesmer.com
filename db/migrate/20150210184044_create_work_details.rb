class CreateWorkDetails < ActiveRecord::Migration
  def change
    create_table :work_details do |t|
      t.string :title, limit: 200
      t.boolean :is_active
      t.attachment :photo
      t.references :work, index: true
    end
  end
end
