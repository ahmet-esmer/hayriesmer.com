class Exhibition < ActiveRecord::Base



  has_many :exhibition_works, dependent: :destroy

  validates :title_tr, presence: true
  validates :text_tr, presence: true
  validates :start_at, presence:true


end
