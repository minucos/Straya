export const fetchAthletes = () => {
    return $.ajax({
        method: "GET",
        url: "api/athletes"
    })
}

export const fetchAthlete = (athleteId) => {
    return $.ajax({
        method: "GET",
        url: `api/athletes/${id}`,
        data: athleteId
    })
}