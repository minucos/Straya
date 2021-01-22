# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'
require 'date'

ActiveRecord::Base.transaction do

Location.destroy_all
Workout.destroy_all
Route.destroy_all
Athlete.destroy_all

# Athletes
p 'creating athletes...'
toby = Athlete.create!(email: "test", fname: "Tobias", lname: "Dundridge", password: "password")

tobyPic = open("https://straya-dev.s3-us-west-1.amazonaws.com/GgVp3SrNp8tzPHg86FGWwbZS")
p 'uploading tobyPic...'
toby.profile_photo.attach(io: tobyPic, filename: 'demouser-profile-photo.jpg')

andy = Athlete.create!(email: "andy@aa.io", fname: "Andy", lname: "Minucos", password: "password")
p 'uploading andyPic...'
andyPic = open("https://straya-dev.s3-us-west-1.amazonaws.com/andy_profile_pic.jpg")

andy.profile_photo.attach(io: andyPic, filename: 'andy_profile_pic.jpg')

holly = Athlete.create!(email: "holly@aa.io", fname: "Holly", lname: "Minucos", password: "password")

hollyPic = open("https://straya-dev.s3-us-west-1.amazonaws.com/holly_profile_pic.jpg")
p 'uploading hollyPic...'
holly.profile_photo.attach(io: hollyPic, filename: 'holly_profile_pic.jpg')

leo = Athlete.create!(email: 'leo@aa.io', fname: 'Leonardo', lname: 'Minucos', password: 'password')

p 'creating more athletes...'
bart = Athlete.create!(email: "bart@aa.io", fname: "Bart", lname: "Simpson", password: "password")
homer = Athlete.create!(email: "Homer@aa.io", fname: "Homer", lname: "Simpson", password: "password")
marge = Athlete.create!(email: "marge@aa.io", fname: "Marge", lname: "Simpson", password: "password")
lisa = Athlete.create!(email: "lisa@aa.io", fname: "Lisa", lname: "Simpson", password: "password")

users = []

1000.times do |n|
    fname = Faker::Name.first_name
    lname = Faker::Name.last_name
    email = fname + lname + n.to_s + '@email.com'
    user = Athlete.create!(fname: fname, lname: lname, email: email, password: 'password')
    users << user
end

#Follows
p 'creating follows...'
follow1 = Follow.create!(follower_id: andy.id, followee_id: toby.id)
follow2 = Follow.create!(follower_id: bart.id, followee_id: toby.id)
follow3 = Follow.create!(follower_id: holly.id, followee_id: toby.id)
follow4 = Follow.create!(follower_id: homer.id, followee_id: toby.id)
follow5 = Follow.create!(follower_id: marge.id, followee_id: toby.id)
follow6 = Follow.create!(follower_id: lisa.id, followee_id: toby.id)
follow7 = Follow.create!(follower_id: toby.id, followee_id: andy.id)
follow8 = Follow.create!(follower_id: holly.id, followee_id: andy.id)
follow9 = Follow.create!(follower_id: homer.id, followee_id: andy.id)
follow10 = Follow.create!(follower_id: marge.id, followee_id: andy.id)
follow11 = Follow.create!(follower_id: andy.id, followee_id: holly.id)
follow12 = Follow.create!(follower_id: toby.id, followee_id: holly.id)
follow13 = Follow.create!(follower_id: leo.id, followee_id: andy.id)
follow14 = Follow.create!(follower_id: leo.id, followee_id: holly.id)
follow15 = Follow.create!(follower_id: leo.id, followee_id: toby.id)
follow16 = Follow.create!(follower_id: andy.id, followee_id: leo.id)
follow17 = Follow.create!(follower_id: holly.id, followee_id: leo.id)
follow18 = Follow.create!(follower_id: toby.id, followee_id: leo.id)

users.each do |user|
    Follow.create!(follower_id: user.id, followee_id: andy.id)
    Follow.create!(follower_id: user.id, followee_id: holly.id)
    Follow.create!(follower_id: user.id, followee_id: toby.id)
    Follow.create!(follower_id: [andy.id, holly.id, toby.id, leo.id].sample, followee_id: user.id)
end

#Workouts
p 'creating workouts...'
workout_types = ['run', 'ride']
athlete_ids = [andy.id, holly.id, toby.id, leo.id]
dates = (0..180).to_a

1000.times do |n|
    workout_type = workout_types.sample
    distance = workout_type == 'run' ? rand(5.0..15.0).round(1) : rand(20.0..45.0).round(1)
    duration = workout_type == 'run' ? (distance * 300) + rand(-100..100) : (distance * 120) + rand(-20..20)
    Workout.create!({
        title: Faker::TvShows::Simpsons.location, 
        body: Faker::TvShows::Simpsons.quote, 
        workout_type: workout_type, 
        duration: duration, 
        distance: distance, 
        athlete_id: athlete_ids.sample, 
        created_at: (DateTime.now - dates.sample).to_s
    })
end

#Routes
p 'creating routes...'
route1 = Route.create!(title: "My favourite route", description: "home to astro's", creator_id: toby.id)
route2 = Route.create!(title: "Morning dog run", description: "walk to silver towers", creator_id: toby.id)
route3 = Route.create!(title: "Run to Central Park", description: "up to central park", creator_id: toby.id)

# Locations
p 'creating locations...'
#route 1
r1loc1 = Location.create!(lat: 40.759129, lng: -73.995859, route_id: route1.id, ord: 1 )
r1loc2 = Location.create!(lat: 40.757917, lng: -73.996762, route_id: route1.id, ord: 2 )
#route 2
r2loc1 = Location.create!(lat: 40.759129, lng: -73.995859, route_id: route2.id, ord: 1 )
r2loc2 = Location.create!(lat: 40.760688, lng: -74.000101, route_id: route2.id, ord: 2 )
#route 3
r3loc1 = Location.create!(lat: 40.759129, lng: -73.995859, route_id: route3.id, ord: 1 )
r3loc2 = Location.create!(lat: 40.769781, lng: -73.988073, route_id: route3.id, ord: 2 )
r3loc3 = Location.create!(lat: 40.767408, lng: -73.982420, route_id: route3.id, ord: 3 )
r3loc4 = Location.create!(lat: 40.768187, lng: -73.981368, route_id: route3.id, ord: 4 )

end