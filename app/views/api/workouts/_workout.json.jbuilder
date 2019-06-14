json.extract! workout, :id, :title, :body, :workout_type, :duration, :distance, :athlete_id, :route_id, :created_at
if workout.photo.attached?
    json.photoUrl url_for(workout.photo)
else
    json.photoUrl ""
end