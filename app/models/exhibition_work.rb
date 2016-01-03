class ExhibitionWork < ActiveRecord::Base

  belongs_to :exhibition, counter_cache: true


  has_attached_file :photo, :styles => { :larger => "940x400>", :thumb => "460x" },
                    :default_url => ActionController::Base.helpers.asset_path("/assets/images/images/placeholder-small.jpg", :digest => false)

  validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

end
