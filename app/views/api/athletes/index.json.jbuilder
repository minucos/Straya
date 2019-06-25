@athletes.each do |athlete|
    json.set! athlete.id do
      json.partial! "athlete", athlete: athlete
    end
end