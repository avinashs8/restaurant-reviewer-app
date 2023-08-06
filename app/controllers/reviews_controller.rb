class ReviewsController < ApplicationController
    before_action :authorize

    def index
        reviews = Review.all 
        render json: reviews, status: :ok
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
        if review.user.id == session[:user_id]
            if review.update(reviews_params)
              render json: review, status: :ok
            else
              render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
            end
          else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def destroy
        restaurant = Restaurant.find_by(id: params[:restaurant_id])
        review = restaurant.reviews.find_by(id: params[:id])
        if review.user.id == session[:user_id] 
            if review.destroy
                head :no_content
            else
                render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: review.errors.full_messages }, status: :unauthorized
        end
    end



    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def reviews_params
        params.permit(:user_id, :restaurant_id, :stars, :content)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
