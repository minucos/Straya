import * as sessionAPIUtils from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        athlete: currentUser,
    })
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    })
};

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors,
    })
};

export const signup = (athlete) => dispatch => {
    return sessionAPIUtils.signup(athlete)
    .then( athlete => dispatch(receiveCurrentUser(athlete)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
};

export const login = (athlete) => dispatch => {
    return sessionAPIUtils.login(athlete)
    .then( athlete => dispatch(receiveCurrentUser(athlete)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
};

export const logout = () => dispatch => {
    return sessionAPIUtils.logout()
    .then( () => dispatch(logoutCurrentUser()))
};