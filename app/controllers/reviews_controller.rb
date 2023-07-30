class ReviewsController < ApplicationController

    def index
        restaurant = Restaurant.find_by(id: params[:id])
        
    end

    def create
        restaurant = Restaurant.find_by(id: params[:id])
        review = restaurant.reviews.create(reviews_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def reviews_params
        params.permit(:user_id, :restaurant_id, :stars, :content)
    end
end
