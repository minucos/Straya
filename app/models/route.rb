class Route < ApplicationRecord
    validates :title, :description, :location, :creator_id, presence: true

    belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name:  "Athlete"

    has_many :locations
    
end
