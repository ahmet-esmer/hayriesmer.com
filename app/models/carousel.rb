class Carousel < ActiveRecord::Base


  belongs_to :language

  validates :order, presence: true, :uniqueness => {:scope => :order}

  has_attached_file :photo, :styles => { :larger => "940x400>", :thumb => "220x100>" }

  validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]


end
