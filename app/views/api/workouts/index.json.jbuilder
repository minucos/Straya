if @workouts.length > 0
  json.workouts do
    @workouts.each do |workout|
        json.set! workout.id do
          json.partial! "workout", workout: workout
        end
    end
  end   

  json.athletes do
    @workouts.each do |workout|
      json.set! workout.athlete.id do
        json.partial! 'api/athletes/athlete', athlete: workout.athlete
      end
    end
  end
else
  json.workouts {}
  json.athletes {}
end