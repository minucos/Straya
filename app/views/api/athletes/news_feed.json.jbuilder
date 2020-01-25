json.athletes do
  @athletes.each do |athlete|
    json.set! athlete.id do
      json.partial! "api/athletes/athlete", athlete: athlete
    end
  end
end
json.workouts do
  @workouts.each do |workout|
    json.set! workout.id do
      json.partial! "api/workouts/workout", workout: workout
    end
  end
end
json.routes do
  @routes.each do |route|
    json.set! route.id do
      json.partial! "api/routes/route", route: route
    end
  end
end
json.locations do
  @routes.each do |route|
    route.locations.each do |location|
      json.set! location.id do 
        json.partial! "api/locations/location", location: location
      end 
    end 
  end 
end