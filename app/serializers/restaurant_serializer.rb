class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :price, :location
  has_many :reviews
end
