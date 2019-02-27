class Api::AthletesController < ApplicationController

    def new
        @athlete = Athlete.new
    end 

    def create
        @athlete = Athlete.new(athlete_params)

        if @athlete.save
            login(@athlete)
            render :show
        else
            render json: @athlete.errors.full_messages, status: 422 
        end 
    end 

    def show

    end 

    private

    def athlete_params
        params.require(:athlete).permit(:email, :fname, :lname, :password)
    end 

end
