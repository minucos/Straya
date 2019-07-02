json.set! @athlete.id do   
    json.partial! 'api/athletes/athlete', athlete: @athlete
end