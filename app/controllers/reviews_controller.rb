class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def create
        restaurant = Restaurant.find_by(id: params[:id])
        review = restaurant.reviews.create(reviews_params)
        review.user = current_user
        render json: reviewp
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def reviews_params
        params.permit(:stars, :content)
    end
end
