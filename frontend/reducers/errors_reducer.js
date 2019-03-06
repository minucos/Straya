import { combineReducers } from "redux";
import SessionsErrorsReducer from "./sessions_errors_reducer";
import RoutesErrorsReducer from "./routes_errors_reducer";
import WorkoutsErrorsReducer from "./workouts_errors_reducer";

const ErrorsReducer = combineReducers({
    session: SessionsErrorsReducer,
    routes: RoutesErrorsReducer,
    workouts: WorkoutsErrorsReducer,
});

export default ErrorsReducer;