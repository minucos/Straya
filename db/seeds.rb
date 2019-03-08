# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

Location.destroy_all
Workout.destroy_all
Route.destroy_all
Athlete.destroy_all

# Athletes
demouser = Athlete.create(email: "test", fname: "Tobias", lname: "Dundridge", password: "password")

#Workouts
workout1 = Workout.create(title: "My first workout", body: "gotta work on that summer bod", workout_type: "run", duration: 1800, distance: 5, athlete_id: demouser.id)
workout2 = Workout.create(title: "My second workout", body: "morning walk before work", workout_type: "run", duration: 300, distance: 0.5, athlete_id: demouser.id)
workout3 = Workout.create(title: "My third workout", body: "summer bod isn't coming so easy", workout_type: "run", duration: 1734, distance: 5, athlete_id: demouser.id)
workout4 = Workout.create(title: "My fourth workout", body: "quick trip to the park to see my mates", workout_type: "run", duration: 400, distance: 0.7, athlete_id: demouser.id)

#Route
route1 = Route.create(title: "My first route", description: "home to astro's", creator_id: demouser.id)

#Workout
workout5 = Workout.create(title: "My fifth workout", body: "nice night for it", workout_type: "run", duration: 1800, distance: 5, athlete_id: demouser.id)

#Route
route2 = Route.create(title: "My second route", description: "walk to silver towers", creator_id: demouser.id)

#Workout
workout6 = Workout.create(title: "My sixth workout", body: "winter bods aren't THAT bad, you know", workout_type: "run", duration: 2003, distance: 5, athlete_id: demouser.id)

#Workout
route3 = Route.create(title: "My third route", description: "up to central park", creator_id: demouser.id)

# Locations
#route 1
r1loc1 = Location.create(lat: 40.759129, lng: -73.995859, route_id: route1.id, ord: 1 )
r1loc2 = Location.create(lat: 40.757917, lng: -73.996762, route_id: route1.id, ord: 2 )
#route 2
r2loc1 = Location.create(lat: 40.759129, lng: -73.995859, route_id: route2.id, ord: 1 )
r2loc2 = Location.create(lat: 40.760688, lng: -74.000101, route_id: route2.id, ord: 2 )
#route 3
r3loc1 = Location.create(lat: 40.759129, lng: -73.995859, route_id: route3.id, ord: 1 )
r3loc2 = Location.create(lat: 40.769781, lng: -73.988073, route_id: route3.id, ord: 2 )
r3loc3 = Location.create(lat: 40.767408, lng: -73.982420, route_id: route3.id, ord: 3 )
r3loc4 = Location.create(lat: 40.768187, lng: -73.981368, route_id: route3.id, ord: 4 )

end