class Api::RoutesController < ApplicationController

    def new
        @route = Route.new
    end 

    def create
        @route = Route.new(route_params)

        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 422 
        end 
    end 

    def show
        @route = Route.find(id)
    end 

    def index

    end 

    def edit

    end 

    def update

    end 

    def destroy

    end

    private

    def route_params
        params.require(:route).permit(:title, :description, :location, :creator_id)
    end

end
