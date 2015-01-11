class Type < ActiveRecord::Base



  belongs_to :language

  validates :text, presence: true
  validates :code, presence: true, :uniqueness => {:scope => :code}
  #validates :code, :uniqueness => {:scope => :code}
  validates :language_id, presence: true

end