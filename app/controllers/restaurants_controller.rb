class RestaurantsController < ApplicationController
    before_action :authorize

    def index
        render json: Restaurant.all, status: :ok
    end

    def show
        restaurant = Restaurant.find_by(id: params[:id])
    
        if restaurant
          render json: restaurant, status: :ok
        else
          render json: { error: "Restaurant not found" }, status: :not_found
        end
    end

    def create
        restaurant = Restaurant.create(restaurant_params)
        if restaurant.valid?
            render json: restaurant, status: :created
        else
            render json: { errors: restaurant.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant.valid?
            restaurant.destroy
            head :no_content
        else
            render json: { errors: restaurant.errors.full_messages }, status: :not_found
        end
    end

    

    private

    def restaurant_params
        params.permit(:name, :cuisine, :price, :location)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
end
