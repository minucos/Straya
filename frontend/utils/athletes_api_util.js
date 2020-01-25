export const fetchAthletes = () => {
    return $.ajax({
        method: "GET",
        url: "api/athletes"
    })
}

export const fetchAthlete = (athleteId) => {
    return $.ajax({
        method: "GET",
        url: `api/athletes/${athleteId}`,
        data: athleteId
    })
}

export const fetchNewsfeed = (page) => {
    return $.ajax({
        method: 'GET',
        url: `api/athletes/newsfeed?page=${page}`
    })
}
