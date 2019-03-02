class Api::LocationsController < ApplicationController

    def new
        @location = Location.new
    end 

    def create
        @location = Location.new(location_params)

        if @location.save
            render :show
        else
            render json: @location.errors.full_messages, status: 422 
        end 
    end 

    def show
        @location = Location.find_by(id: params[:id])
    end 

    private

    def location_params
        params.require(:location).permit(:lat, :lng, :route_id, :ord)
    end 

end
