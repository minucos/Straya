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

json.athletes do
  @routes.each do |route|
    json.set! route.creator.id do
      json.partial! 'api/athletes/athlete', athlete: route.creator
    end
  end
end

json.count current_user.routes.length