import * as routesAPIUtil from "../utils/routes_api_util";

export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

const receiveAllRoutes = ({routes, locations, athletes, count}) => {
    return ({
        type: RECEIVE_ALL_ROUTES,
        routes: routes,
        locations: locations,
        athletes: athletes,
        count
    })
}

const receiveRoute = ({route, locations, athlete}) => {
    return ({
        type: RECEIVE_ROUTE,
        route: route,
        locations: locations,
        athlete: athlete
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

export const fetchRoutes = (page) => dispatch => (
    routesAPIUtil.fetchRoutes(page)
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
        .then(
            payload => {
            dispatch(receiveRoute(payload));
            return payload.route.id
            },
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


