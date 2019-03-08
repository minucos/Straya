import { connect } from "react-redux";
import WorkoutsForm from "./workouts_form";
import { updateWorkout, fetchWorkout } from "../../actions/workouts_actions";

const mapStateToProps = (state, ownProps) => {
    let workoutId = ownProps.match.params.id;
    
    let workout = state.entities.workouts[workoutId];

    return ({
        workout: workout,
        workoutId: workoutId,
        buttonText: "Save",
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchWorkout: (workoutId) => dispatch(fetchWorkout(workoutId)),
        updateWorkout: (workout) => dispatch(updateWorkout(workout)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsForm);