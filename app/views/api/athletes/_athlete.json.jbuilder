json.extract! athlete, :id, :email, :fname, :lname, :followers, :followees
if athlete.profile_photo.attached?
    json.photoUrl url_for(athlete.profile_photo)
else
    json.photoUrl ""
end