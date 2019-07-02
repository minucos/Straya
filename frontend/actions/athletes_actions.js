import * as athletesAPIUtil from '../utils/athletes_api_util' ;

export const RECEIVE_ALL_ATHLETES = "RECEIVE_ALL_ATHLETES";
export const RECEIVE_ATHLETE = "RECEIVE_ATHLETE";
export const RECEIVE_ATHLETE_ERRORS = "RECEIVE_ATHLETE_ERRORS";

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

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ATHLETE_ERRORS,
        errors: errors
    })
}

export const fetchAthletes = () => dispatch => (
    athletesAPIUtil.fetchAthletes()
        .then( athletes => dispatch(receiveAllAthletes(athletes)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )

)

export const fetchAthlete = (id) => dispatch => (
    athletesAPIUtil.fetchAthlete(id)
        .then( athlete => dispatch(receiveAthlete(athlete)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)