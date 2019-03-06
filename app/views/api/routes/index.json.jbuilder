json.routes do
  @routes.each do |route|
    json.set! route.id do
      json.partial! "route", route: route

    end
  end
end

json.locations do
  @routes.each do |route|
    route.locations.each do |location|
      json.set! location.id do 
        json.partial! "api/locations/location", location: location
      end 
    end 
  end 
end 