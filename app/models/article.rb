class Article < ActiveRecord::Base

  belongs_to :language

  validates :name, presence: true
  validates :view_count, presence: true
  validates :order, presence: true
  #validates :body, presence: true
  validates :title, presence: true
  validates :language_id, presence: true


end