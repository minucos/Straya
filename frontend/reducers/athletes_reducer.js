import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER,
} from "../actions/session_actions";
import { RECEIVE_ALL_ATHLETES } from "../actions/athletes_actions";
import { RECEIVE_ALL_ROUTES, RECEIVE_ROUTE } from "../actions/routes_actions";
import { RECEIVE_ALL_WORKOUTS, RECEIVE_WORKOUT } from "../actions/workouts_actions";

const AthletesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, action.athlete);

            return newState;
        
        case LOGOUT_CURRENT_USER:
            return {}
        
        case RECEIVE_ALL_ATHLETES:
            newState = Object.assign({}, oldState, action.athletes);

            return newState;

        case RECEIVE_ALL_ROUTES:
            newState = Object.assign({}, oldState, action.athletes);

            return newState;
        
        case RECEIVE_ROUTE:
            newState = Object.assign({}, oldState, action.athlete);

            return newState;

        case RECEIVE_ALL_WORKOUTS:
            newState = Object.assign({}, oldState, action.athletes);

            return newState;

        case RECEIVE_WORKOUT:
            newState = Object.assign({}, oldState, action.athlete)

            return newState;

        default:
            return oldState;
    }
};

export default AthletesReducer;