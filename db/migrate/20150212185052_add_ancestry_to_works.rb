class AddAncestryToWorks < ActiveRecord::Migration
  def change

    add_column("works", "parent_id", :integer)
    add_column("works", "title", :string, :limit => 200)
    add_column("works", "description", :string, :limit => 300)
    add_column("works", "keywords", :string, :limit => 300)

  end
end
