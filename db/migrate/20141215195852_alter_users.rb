class AlterUsers < ActiveRecord::Migration
  def change
    add_column("users", "user_name", :string, :limit => 25, :after => "id")
  end
end
