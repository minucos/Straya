class Api::AthletesController < ApplicationController

    def new
        @athlete = Athlete.new
    end 

    def create
        @athlete = Athlete.new(athlete_params)

        if @athlete.save
            login!(@athlete)
            render :show
        else
            render json: @athlete.errors.full_messages, status: 422 
        end 
    end 

    def show
        @athlete = Athlete.find(params[:id])
    end

    def index
        followees = current_user.followees.pluck('id')

        @athletes = Athlete.where('id = ? OR id IN (?)', current_user.id, followees)
    end

    def newsfeed
        feed_items = current_user.news_feed(params[:page])

        @workouts = feed_items.select{ |item| item.is_a?(Workout) }
        @routes = feed_items.select{ |item| item.is_a?(Route) }
        @athletes = []
        feed_items.each do |item|
            if item.is_a?(Workout)
                @athletes << item.athlete
            else
                @athletes << item.creator
            end
        end

        render :news_feed
    end

    private

    def athlete_params
        params.require(:athlete).permit(:email, :fname, :lname, :password)
    end 

end
