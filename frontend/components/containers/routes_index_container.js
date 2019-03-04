import { connect } from 'react-redux';
import Routes from "./routes_index";
import { fetchRoutes, deleteRoute } from "../../actions/routes_actions";

const mapStateToProps = (state) => {
    let routes = Object.values(state.entities.routes);

    let locations = Object.values(state.entities.locations);

    return ({
        routes: routes,
        locations: locations,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchRoutes: () => dispatch(fetchRoutes()),
        deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);