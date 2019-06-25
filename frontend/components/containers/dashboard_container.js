import { connect } from 'react-redux';
import Dashboard from "./dashboard";
import { fetchWorkouts } from "../../actions/workouts_actions";
import { fetchRoutes } from "../../actions/routes_actions";
import { fetchAthletes } from "../../actions/athletes_actions";

const mapStateToProps = (state) => {
    return ({
        athlete: state.entities.athletes[state.session.id],
        athletes: state.entities.athletes,
        workouts: state.entities.workouts,
        routes: state.entities.routes,
        locations: state.entities.locations,
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchWorkouts: () => dispatch(fetchWorkouts()),
        fetchRoutes: () => dispatch(fetchRoutes()),
        fetchAthletes: () => dispatch(fetchAthletes()),
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);