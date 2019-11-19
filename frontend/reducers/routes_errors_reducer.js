import { RECEIVE_ROUTE_ERRORS } from "../actions/routes_actions";

const errors = {
    "Title can't be blank": 'titleError',
    "Description can't be blank": 'descError'
};

const defaultState = {
    titleError: null,
    descError: null
}

const RoutesErrorsReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);

    const nextState = Object.assign({},oldState);
    switch (action.type) {
        case RECEIVE_ROUTE_ERRORS:
            debugger
            action.errors.forEach( err => {
                nextState[errors[err]] = err
            });

            return nextState;
        default:
            return oldState;
    }
};

export default RoutesErrorsReducer;

