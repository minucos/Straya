import * as workoutsAPIUtil from "../utils/workouts_api_util";

export const RECEIVE_ALL_WORKOUTS = "RECEIVE_ALL_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";

const receiveAllWorkouts = (workouts) => {
    return ({
        type: RECEIVE_ALL_WORKOUTS,
        workouts: workouts,
    })
}

const receiveWorkout = (workout) => {
    return ({
        type: RECEIVE_WORKOUT,
        workout: workout,
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
        .then(workout => dispatch(receiveWorkout(workout)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const createWorkout = (workout, locations) => dispatch => (
    workoutsAPIUtil.createWorkout(workout, locations)
        .then(workout => dispatch(receiveWorkout(workout)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const updateWorkout = (workout) => dispatch => (
    workoutsAPIUtil.updateWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const deleteWorkout = (id) => dispatch => (
    workoutsAPIUtil.deleteWorkout(id)
        .then(workout => dispatch(removeWorkout(workout.id)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)
