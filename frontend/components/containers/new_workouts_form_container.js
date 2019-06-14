import { connect } from "react-redux";
import WorkoutsForm from "./workouts_form";
import { createWorkout } from "../../actions/workouts_actions";

const mapStateToProps = (state, ownProps) => {
    let athleteId = state.session.id;

    return ({
        workout: {
            title: "",
            body: "",
            workout_type: "run",
            distance: 0,
            duration: 0,
            athlete_id: athleteId,
            photoFile: null,
        },
        buttonText: "Create",
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (workout) => dispatch(createWorkout(workout)),
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutsForm);