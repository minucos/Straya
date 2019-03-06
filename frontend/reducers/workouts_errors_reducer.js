import { RECEIVE_WORKOUT_ERRORS } from "../actions/workouts_actions";

const WorkoutsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_WORKOUT_ERRORS:
            return action.errors;

        default:
            return oldState;
    }
};

export default WorkoutsErrorsReducer;