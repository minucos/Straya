import { RECEIVE_ALL_WORKOUTS,
         RECEIVE_WORKOUT,
         REMOVE_WORKOUT
} from "../actions/workouts_actions";
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session_actions";
import { RECEIVE_NEWSFEED } from "../actions/athletes_actions";

const WorkoutsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);

    let newState;

    switch (action.type) {
        case RECEIVE_ALL_WORKOUTS:
            return action.workouts;

        case RECEIVE_WORKOUT:
            newState = Object.assign({}, oldstate, action.workout);
            
            return newState;

        case REMOVE_WORKOUT:
            newState = Object.assign({}, oldstate);

            delete newState[action.workoutId];

            return newState;

        case LOGOUT_CURRENT_USER:
            return {}
            
        case RECEIVE_NEWSFEED:
            newState = Object.assign({}, oldstate, action.workouts);

            return newState;

        default:
            return oldstate;
    }
};

export default WorkoutsReducer;