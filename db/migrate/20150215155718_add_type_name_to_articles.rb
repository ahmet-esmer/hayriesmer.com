class AddTypeNameToArticles < ActiveRecord::Migration
  def change



    add_column("articles", "type_name", :string, :limit => 40)
    add_index :articles, :type_name

  end
end
