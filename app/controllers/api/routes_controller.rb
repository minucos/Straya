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
        @route = Route.find_by(id: params[:id])
    end 

    def index
        @routes = Route.all
    end 

    def update
        @route - Route.find_by(id: params[:id])

        @route.update_attributes(route_params)

        if @route.save 
            render :show
        else
            render json: @route.errors.full_messages, status: 422 
        end 
    end 

    def delete
        @route = Route.find_by(id: params[:id])

        @route.destroy

        @route
    end

    private

    def route_params
        params.require(:route).permit(:title, :description, :location, :creator_id)
    end

end
