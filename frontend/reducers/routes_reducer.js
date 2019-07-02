import { RECEIVE_ALL_ROUTES, 
         RECEIVE_ROUTE,
         REMOVE_ROUTE
} from "../actions/routes_actions";
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const RoutesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState;

    switch (action.type) {
        case RECEIVE_ALL_ROUTES:
            return action.routes;
            
        case RECEIVE_ROUTE:
            newState = Object.assign({}, oldState, action.route );

            return newState;
            
        case REMOVE_ROUTE:
            newState = Object.assign({},oldState);

            delete newState[action.routeId];

            return newState;

        case LOGOUT_CURRENT_USER:
            return {}
            
        default:
            return oldState;
    }
};

export default RoutesReducer;