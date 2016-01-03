class AddTypeToArticles < ActiveRecord::Migration
  def change

    add_column("articles", "type", :string, :limit => 40)
    add_index :articles, :type
  end
end
