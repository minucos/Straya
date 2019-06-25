import { connect } from 'react-redux';
import Routes from "./routes_index";
import { fetchRoutes, deleteRoute } from "../../actions/routes_actions";

const mapStateToProps = (state) => {
    let routes = Object.values(state.entities.routes).filter( route => route.creator_id === state.session.id);
    let locations = Object.values(state.entities.locations);
    let athlete = state.entities.athletes[state.session.id];

    return ({
        routes: routes,
        locations: locations,
        athlete: athlete,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchRoutes: () => dispatch(fetchRoutes()),
        deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);