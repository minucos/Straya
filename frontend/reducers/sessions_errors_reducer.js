import { RECEIVE_SESSION_ERRORS,
         RECEIVE_CURRENT_USER 
} from "../actions/session_actions";

const sessionErrorsReducer = (oldState = { session: [] }, action) => {
    Object.freeze(oldState);

    let newState;

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState = Object.assign({}, oldState, { session: action.errors });

            return newState;

        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { session: [] })

            return newState;

        default:
            return oldState;
    }
}

export default sessionErrorsReducer;