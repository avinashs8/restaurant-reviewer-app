class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :price, :location
end
