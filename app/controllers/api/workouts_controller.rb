class Api::WorkoutsController < ApplicationController
    
    def new 
        @workout = Workout.new
    end 

    def create
        @workout = Workout.new(workout_params)

        if @workout.save
            render json: @workout
        else
            render json: @workout.errors.full_messages, status: 422
        end
    end 

    def show
        @workout = Workout.find_by(id: params[:id])
        @athlete = Athlete.find(@workout.athlete_id)
    end 

    def index
        @workouts = Workout.all
    end

    def update
        @workout = current_user.workouts.find_by(id: params[:id])

        @workout.update_attributes(workout_params)

        if @workout.save
            render json: @workout
        else
            render json: @workout.errors.full_messages, status: 422
        end
    end 

    def destroy
        @workout = current_user.workouts.find_by(id: params[:id])

        @workout.destroy!

        render json: @workout
    end 

    private

    def workout_params
        params.require(:workout).permit(:title, :body, :workout_type, :distance, :duration, :athlete_id, :route_id, :photo)
    end

end
