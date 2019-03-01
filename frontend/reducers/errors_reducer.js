import { combineReducers } from "redux";
import SessionsErrorsReducer from "./sessions_errors_reducer";
import RoutesErrorsReducer from "./routes_errors_reducer";

const ErrorsReducer = combineReducers({
    session: SessionsErrorsReducer,
    routes: RoutesErrorsReducer,
});

export default ErrorsReducer;