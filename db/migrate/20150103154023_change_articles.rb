class ChangeArticles < ActiveRecord::Migration
  def change

    add_column("articles", "title", :string, :limit => 200)
    add_column("articles", "description", :string, :limit => 300)
    add_column("articles", "keywords", :string, :limit => 300)
    add_column("articles", "view_count", :integer)
    add_column("articles", "order", :integer)
  end
end
