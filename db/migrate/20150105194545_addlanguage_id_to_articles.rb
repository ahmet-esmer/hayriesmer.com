class AddlanguageIdToArticles < ActiveRecord::Migration
  def change

    add_column :articles, :language_id, :integer, references: :languages

  end
end
