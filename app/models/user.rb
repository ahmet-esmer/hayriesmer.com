class User < ActiveRecord::Base
  has_secure_password

  #validates :email,
  #          presence: true,
  #          uniqueness: true,
   #         format: { :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i }
end