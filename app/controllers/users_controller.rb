class UsersController < ApplicationController

    #signup
    def create 
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
        else

        end
        render json: user
    end

    def show
        user = User.find(session[:id])
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
