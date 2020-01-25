class Api::RoutesController < ApplicationController

    def new
        @route = Route.new
    end 

    def create
        @route = Route.new(route_params)

        if @route.save  
            location_params.each do |ord, location|
            
                newLocation = {
                    lat: location["lat"],
                    lng: location["lng"],
                    route_id: @route.id,
                    ord: ord,
                }

                @location = Location.new(newLocation)

                if @location.save
                    nil
                else
                    render json: @location.errors.full_messages, status: 422 
                end 
            end 
                
            render :show
        else
            render json: @route.errors.full_messages, status: 422 
        end 
    end 

    def show
        @route = Route.find_by(id: params[:id])
    end 

    def index
        if params[:page]
            @routes = Route.all
                .includes(:locations, :creator)
                .order(created_at: :desc)
                .page(params[:page]).per(8)
        else
            @routes = Route.all
                .includes(:locations, :creator)
        end
    end 

    def update
        @route = current_user.routes.find_by(id: params[:id])

        @route.update_attributes(route_params)

        if @route.save 
            render :show
        else
            render json: @route.errors.full_messages, status: 422 
        end 
    end 

    def delete
        @route = current_user.routes.find_by(id: params[:id])

        @route.destroy

        @route
    end

    private

    def route_params
        params.require(:route).permit(:title, :description, :creator_id)
    end

    def location_params
        params.require(:locations)
    end

end
