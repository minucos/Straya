import { connect } from 'react-redux';
import WorkoutShow from "./workout_show";
import { fetchWorkout, deleteWorkout } from "../../actions/workouts_actions";

const mapStateToProps = (state, ownProps) => {
    let workoutId = ownProps.match.params.id;
    let workout = state.entities.workouts[workoutId];

    return ({
        workoutId: workoutId,
        workout: workout,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchWorkout: (workoutId) => dispatch(fetchWorkout(workoutId)),
        deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);