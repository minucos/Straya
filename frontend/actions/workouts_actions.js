import * as workoutsAPIUtil from "../utils/workouts_api_util";

export const RECEIVE_ALL_WORKOUTS = "RECEIVE_ALL_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";

const receiveAllWorkouts = ({workouts, athletes}) => {
    return ({
        type: RECEIVE_ALL_WORKOUTS,
        workouts: workouts,
        athletes: athletes,
    })
}

const receiveWorkout = ({workout, athlete}) => {
    return ({
        type: RECEIVE_WORKOUT,
        workout: workout,
        athlete: athlete
    })
}

const removeWorkout = (workoutId) => {
    return ({
        type: REMOVE_WORKOUT,
        workoutId: workoutId,
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_WORKOUT_ERRORS,
        errors: errors,
    })
}

export const fetchWorkouts = () => dispatch => (
    workoutsAPIUtil.fetchWorkouts()
        .then(workouts => dispatch(receiveAllWorkouts(workouts)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const fetchWorkout = (id) => dispatch => (
    workoutsAPIUtil.fetchWorkout(id)
        .then(payload => dispatch(receiveWorkout(payload)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const createWorkout = (workout, locations) => dispatch => (
    workoutsAPIUtil.createWorkout(workout, locations)
        .then(payload => dispatch(receiveWorkout(payload)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const updateWorkout = (workout) => dispatch => (
    workoutsAPIUtil.updateWorkout(workout)
        .then(payload => dispatch(receiveWorkout(payload)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const deleteWorkout = (id) => dispatch => (
    workoutsAPIUtil.deleteWorkout(id)
        .then(({ workout }) => dispatch(removeWorkout(workout.id)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)
