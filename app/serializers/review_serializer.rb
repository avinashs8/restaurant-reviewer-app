class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :stars, :content
  belongs_to :restaurant 
end
