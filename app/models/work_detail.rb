class WorkDetail < ActiveRecord::Base

  belongs_to :work

  has_attached_file :photo, :styles => { :thumb => "300x" },
                    :default_url => ActionController::Base.helpers.asset_path("/assets/images/placeholder-small.jpg", :digest => false)

  validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

end
