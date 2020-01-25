import * as athletesAPIUtil from '../utils/athletes_api_util' ;

export const RECEIVE_ALL_ATHLETES = "RECEIVE_ALL_ATHLETES";
export const RECEIVE_ATHLETE = "RECEIVE_ATHLETE";
export const RECEIVE_ATHLETE_ERRORS = "RECEIVE_ATHLETE_ERRORS";
export const RECEIVE_NEWSFEED = "RECEIVE_NEWSFEED";

const receiveAllAthletes = (athletes) => {
    return ({
        type: RECEIVE_ALL_ATHLETES,
        athletes: athletes
    })
}

const receiveAthlete = (athlete) => {
    return ({
        type: RECEIVE_ATHLETE,
        athlete: athlete
    })
}

const receiveNewsFeed = ({athletes,workouts,routes,locations}) => {
    return({
        type: RECEIVE_NEWSFEED,
        athletes,
        workouts,
        routes,
        locations
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ATHLETE_ERRORS,
        errors: errors
    })
}

export const fetchAthletes = () => dispatch => (
    athletesAPIUtil.fetchAthletes()
        .then( 
            athletes => dispatch(receiveAllAthletes(athletes)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )

)

export const fetchAthlete = (id) => dispatch => (
    athletesAPIUtil.fetchAthlete(id)
        .then( 
            athlete => dispatch(receiveAthlete(athlete)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const fetchNewsfeed = page => dispatch => (
    athletesAPIUtil.fetchNewsfeed(page)
        .then(
            payload => dispatch(receiveNewsFeed(payload)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)