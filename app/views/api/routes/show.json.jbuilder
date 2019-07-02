json.route do
    json.set! @route.id do
      json.partial! 'route', route: @route
    end   
end 

json.locations do
    @route.locations.each do |location|
      json.set! location.id do 
        json.partial! "api/locations/location", location: location
      end 
    end 
end 

json.athlete do
  json.set! @route.creator.id do
    json.partial! 'api/athletes/athlete', athlete: @route.creator
  end
end