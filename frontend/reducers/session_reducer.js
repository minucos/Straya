import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER,        
} from "../actions/session_actions";

const SessionReducer = (oldState = {id: null}, action) => {
    Object.freeze(oldState);

    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { id: action.athlete.id } );

            return newState;
        case LOGOUT_CURRENT_USER:
            newState = Object.assign({}, oldState, { id: null });
            
            return newState;
        default:
            return oldState;
    }
};

export default SessionReducer;