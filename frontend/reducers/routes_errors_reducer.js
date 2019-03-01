import { RECEIVE_ROUTE_ERRORS } from "../actions/routes_actions";

const RoutesErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ROUTE_ERRORS:
            return action.errors;

        default:
            return oldState;
    }
};

export default RoutesErrorsReducer;

