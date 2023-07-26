class UsersController < ApplicationController

    #signup
    def create 

    end

    def show
        user = User.find(session[:id])
        render json: user
    end
end
