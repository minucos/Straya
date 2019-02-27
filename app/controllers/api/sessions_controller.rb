class Api::SessionsController < ApplicationController

    def new
        @athlete = Athlete.new
    end 

    def create
        @athlete = Athlete.find_by_credentials(params[:athlete][:email], params[:athlete][:password])

        if @athlete
            login!(@athlete)

            render 'api/athletes/show'
        else 
            render json: ["Invalid Credentials"], status: 422
        end 
    end 

    def destroy
        if current_user
            logout!
            render json: {}
        else 
            render json: ["No user logged in"], status: 404
        end 
    end 


end
