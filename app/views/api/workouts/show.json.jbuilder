json.workout do  
  json.set! @workout.id do   
    json.partial! "workout", workout: @workout
  end   
end  

json.athlete do
  json.set! @workout.athlete.id do
    json.partial! 'api/athletes/athlete', athlete: @athlete
  end   
end