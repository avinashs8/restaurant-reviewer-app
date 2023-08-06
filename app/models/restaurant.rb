class Restaurant < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    validates :name, :cuisine, :price, :location, presence: true
end
