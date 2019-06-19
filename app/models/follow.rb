class Follow < ApplicationRecord

belongs_to :follower,
foreign_key: :follower_id,
class_name: "Athlete"

belongs_to :followee,
foreign_key: :followee_id,
class_name: "Athlete"

end
