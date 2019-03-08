import { connect } from 'react-redux';
import Dashboard from "./dashboard";
import { fetchWorkouts } from "../../actions/workouts_actions";

const mapStateToProps = (state) => {
    return ({
        athlete: state.entities.athletes[state.session.id],
        workouts: state.entities.workouts,
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchWorkouts: () => dispatch(fetchWorkouts()),
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);