class Workout < ApplicationRecord
    validates :title, :workout_type, :duration, :athlete_id, presence: true

    belongs_to :athlete

end
