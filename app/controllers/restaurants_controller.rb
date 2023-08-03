class RestaurantsController < ApplicationController

    def index
        render json: Restaurant.all 
    end

    def show
        restaurant = Restaurant.find_by(id: params[:id])
        render json: restaurant
    end

    def create
        restaurant = Restaurant.create(restaurant_params)
        if restaurant.valid?
            render json: restaurant, status: :created
        else
            render json: { errors: restaurant.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def restaurant_params
        params.permit(:name, :cuisine, :price, :location)
    end
    
end
