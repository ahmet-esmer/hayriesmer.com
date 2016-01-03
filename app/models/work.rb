class Work < ActiveRecord::Base



  has_many :work_details, dependent: :destroy

  validates :title_tr, presence: true
  validates :title_en, presence: true


  extend FriendlyId
  friendly_id :title_tr, use: :slugged

end
