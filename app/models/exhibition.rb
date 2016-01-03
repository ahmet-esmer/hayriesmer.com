class Exhibition < ActiveRecord::Base



  has_many :exhibition_works, dependent: :destroy

  validates :title_tr, presence: true
  validates :text_tr, presence: true
  validates :start_at, presence:true


  scope :start_between, lambda {|start_date, end_date| where("extract(year from start_at) >= ? AND extract(year from start_at) <= ?", start_date, end_date )}

end
