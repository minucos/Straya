import { connect } from "react-redux";
import RoutesForm from "./routes_form";
import { createRoute } from "../../actions/routes_actions";

const mapStateToProps = (state, ownProps) => {
    let athleteId = state.session.id;

    return ({
        route: {
            title: "", 
            description: "", 
            location: "",
            creatorId: athleteId,
        },
    })
};

const mapDispatchtoProps = (dispatch) => {
    return ({
        action: (route) => dispatch(createRoute(route)),
    })
};

export default connect(mapStateToProps, mapDispatchtoProps)(RoutesForm);