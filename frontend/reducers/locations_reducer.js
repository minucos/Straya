import {
    RECEIVE_ALL_ROUTES,
    RECEIVE_ROUTE,
    REMOVE_ROUTE
} from "../actions/routes_actions";

const LocationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState;

    switch (action.type) {
        case RECEIVE_ALL_ROUTES:
            return action.locations;

        case RECEIVE_ROUTE:
            newState = Object.assign({}, oldState, action.locations );

            return newState;

        default:
            return oldState;
    }
};

export default LocationsReducer;