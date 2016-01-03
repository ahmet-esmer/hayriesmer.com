class AddExhibitionWorksCounttoExhibition < ActiveRecord::Migration
  def change

    add_column :exhibitions, :exhibition_works_count, :integer, default: 0
  end
end
