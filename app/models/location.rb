class Location < ApplicationRecord
    validates :lat, :lng, :route_id, :ord, presence: true

    belongs_to :route 
    
end
