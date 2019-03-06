import { connect } from 'react-redux';
import Workouts from "./workouts_index";
import { fetchWorkouts, deleteWorkout } from "../../actions/workouts_actions";

const mapStateToProps = (state) => {
    let workouts = Object.values(state.entities.workouts);

    return ({
        workouts: workouts
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchWorkouts: () => dispatch(fetchWorkouts()),
        deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);