class AddOederToWorkDetails < ActiveRecord::Migration
  def change
    add_column :work_details, :order, :integer
  end
end
