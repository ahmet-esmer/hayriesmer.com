class Link < ActiveRecord::Base

  belongs_to :language

  validates :text, presence: true
  validates :order, presence: true
  validates :href, presence: true
  validates :language_id, presence: true


end