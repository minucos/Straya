import { RECEIVE_ALL_WORKOUTS,
         RECEIVE_WORKOUT,
         REMOVE_WORKOUT
} from "../actions/workouts_actions";

const WorkoutsReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);

    let newState;

    switch (action.type) {
        case RECEIVE_ALL_WORKOUTS:
            return action.workouts;

        case RECEIVE_WORKOUT:
            newState = Object.assign({}, oldstate, {[action.workout.id]: action.workout});
            
            return newState;

        case REMOVE_WORKOUT:
            newstate = Object.assign({}, oldstate);

            delete newstate[action.workoutId];

            return newState;
            
        default:
            return oldstate;
    }
};

export default WorkoutsReducer;