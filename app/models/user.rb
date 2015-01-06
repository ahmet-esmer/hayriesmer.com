class User < ActiveRecord::Base
  has_secure_password

  validates :email, presence: true,
                    uniqueness:{case_sensitive: false},
                    email:true

  validates :password, presence: true,
                       length: { minimum: 4}

  validates :user_name, presence: true


end