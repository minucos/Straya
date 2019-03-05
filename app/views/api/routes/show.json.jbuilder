json.route do
    json.partial! 'route', route: @route
end 

json.locations do
    @route.locations.each do |location|
      json.set! location.id do 
        json.partial! "api/locations/location", location: location
      end 
    end 
end 