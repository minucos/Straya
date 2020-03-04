json.extract! athlete, :id, :email, :fname, :lname, :followers, :followees
json.total_workouts athlete.workouts.count
if athlete.profile_photo.attached?
    json.photoUrl url_for(athlete.profile_photo)
else
    json.photoUrl ""
end