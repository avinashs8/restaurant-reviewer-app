class Review < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant 

    validates :stars, :content, presence: true
end
