import * as locationsAPIUtil from "../utils/locations_api_util";

export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const RECEIVE_LOCATION_ERRORS = "RECEIVE_LOCATION_ERRORS";


const receiveLocation = (location) => {
    return ({
        type: RECEIVE_ROUTE,
        routeId: routeId,
        locations: locations,
    })
}

const removeLocation = (locationId) => {
    return ({
        type: REMOVE_ROUTE,
        locationId: locationId,
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_LOCATION_ERRORS,
        errors: errors,
    })
}

export const createLocation = (location) => dispatch => (
    locationsAPIUtil.createLocation(location)
        .then(location => dispatch(receiveLocation(location)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)

export const deleteLocation = (id) => dispatch => (
    locationsAPIUtil.deleteLocation(id)
        .then(location => dispatch(removeLocation(location.id)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
)
