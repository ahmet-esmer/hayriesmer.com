class AddOrderToExhibitionWorks < ActiveRecord::Migration
  def change

    add_column("exhibition_works", "order", :integer)
  end
end
