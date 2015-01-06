class Language < ActiveRecord::Base


  #validates_presence_of :name, :message => "Lütfen doldurun"

  validates :name, presence: true
  validates :code, presence: true


end
