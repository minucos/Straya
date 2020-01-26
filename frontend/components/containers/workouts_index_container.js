import { connect } from 'react-redux';
import Workouts from "./workouts_index";
import filterWorkouts from "../../reducers/selectors/sort_selector";
import { fetchWorkouts, deleteWorkout } from "../../actions/workouts_actions";
import {
    sortDate, sortTitle, sortTime, sortDistance
} from "../../actions/sort_actions";

const mapStateToProps = (state) => {
    
    let workouts = filterWorkouts(state);

    return ({
        workouts: workouts,
        sortBy: state.ui.sortBy,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchWorkouts: (query) => dispatch(fetchWorkouts(query)),
        deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId)),
        sortDate: () => dispatch(sortDate()),
        sortTitle: () => dispatch(sortTitle()),
        sortTime: () => dispatch(sortTime()),
        sortDistance: () => dispatch(sortDistance()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);