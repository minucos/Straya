import { connect } from 'react-redux';
import RouteShow from "./route_show";
import { fetchRoute, deleteRoute } from "../../actions/routes_actions";

const mapStateToProps = (state, ownProps) => {
    let routeId = ownProps.match.params.id;
    let route = state.entities.routes[routeId];
    let locations = Object.values(state.entities.locations);
    let athlete = state.entities.athletes[state.session.id];

    return ({
        routeId: routeId,
        route: route,
        locations: locations.filter(location => location.route_id == routeId),
        athlete: athlete,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
        deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);