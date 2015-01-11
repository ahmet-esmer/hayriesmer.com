class AddPhotoToCarousels < ActiveRecord::Migration
  def change

    add_attachment :carousels,  :photo

  end
end
