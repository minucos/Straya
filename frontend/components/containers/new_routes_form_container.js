import { connect } from "react-redux";
import RoutesForm from "./routes_form";
import { createRoute } from "../../actions/routes_actions";
import { createLocation } from "../../actions/locations_actions";

const mapStateToProps = (state, ownProps) => {
    let athleteId = state.session.id;
    let errors = state.errors.routes;
    return ({
        route: {
            title: "", 
            description: "", 
            location: "",
            creatorId: athleteId,
            locations: new Array(),
        },
        errors
    })
};

const mapDispatchtoProps = (dispatch) => {
    return ({
        action: (route, locations) => dispatch(createRoute(route, locations)),
        createLocation: (location) => dispatch(createLocation(location)),
    })
};

export default connect(mapStateToProps, mapDispatchtoProps)(RoutesForm);