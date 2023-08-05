class ReviewsController < ApplicationController

    def index
        reviews = Review.all 
        render json: reviews
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

    def update 
        restaurant = Restaurant.find_by(id: params[:restaurant_id])
        review = restaurant.reviews.find_by(id: params[:id])
        review.update(reviews_params)
        if review.valid?
            render json: review, status: 200
        else
            render json: { errors: review.errors.full_messages }
        end
    end

    def destroy
        restaurant = Restaurant.find_by(id: params[:restaurant_id])
        review = restaurant.reviews.find_by(id: params[:id])
        if review.valid?
            review.destroy
            head :no_content
        else
            render json: { errors: review.errors.full_messages }, status: :not_found
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
