class Restaurant < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, :cuisine, :price, :location, presence: true
end
