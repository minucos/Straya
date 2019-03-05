import * as routesAPIUtil from "../utils/routes_api_util";

export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

const receiveAllRoutes = ({routes, locations}) => {
    return ({
        type: RECEIVE_ALL_ROUTES,
        routes: routes,
        locations: locations
    })
}

const receiveRoute = ({route, locations}) => {
    return ({
        type: RECEIVE_ROUTE,
        route: route,
        locations: locations,
    })
}

const removeRoute = (routeId) => {
    return ({
        type: REMOVE_ROUTE,
        routeId: routeId,
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ROUTE_ERRORS,
        errors: errors,
    })
}

export const fetchRoutes = () => dispatch => (
    routesAPIUtil.fetchRoutes()
    .then( payload => dispatch(receiveAllRoutes(payload)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const fetchRoute = (id) => dispatch => (
    routesAPIUtil.fetchRoute(id)
        .then( route => dispatch(receiveRoute(route)),
            errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const createRoute = (route, locations) => dispatch => (
    routesAPIUtil.createRoute(route, locations)
        .then(payload => dispatch(receiveRoute(payload)),
            errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const updateRoute = (route) => dispatch => (
    routesAPIUtil.updateRoute(route)
        .then(route => dispatch(receiveRoute(route)),
            errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const deleteRoute = (id) => dispatch => (
    routesAPIUtil.deleteRoute(id)
        .then(route => dispatch(removeRoute(route.id)),
            errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

