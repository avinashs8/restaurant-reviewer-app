class UsersController < ApplicationController

    #signup
    def create 

    end

    def show
        user = User.find_by(id: session[:id])
        render json: user
    end
end
