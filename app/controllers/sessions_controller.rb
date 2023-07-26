class SessionsController < ApplicationController

    #signin
    def create

    end

    #signout
    def destroy
        session.clear
    end
end
