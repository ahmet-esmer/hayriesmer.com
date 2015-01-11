class RecentWork < ActiveRecord::Base

  belongs_to :language

  validates :order, presence: true, :uniqueness => {:scope => :order}
  validates :language_id, presence: true
  validates :photo, presence: true


  has_attached_file :photo, :styles => { :larger => "940x400>", :thumb => "220x100>" },
                    :default_url => ActionController::Base.helpers.asset_path("/assets/images/placeholder-small.jpg", :digest => false)

  validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

end
