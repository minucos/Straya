import { combineReducers } from "redux";
import AthletesReducer from "./athletes_reducer";
import RoutesReducer from "./routes_reducer";

const EntitiesReducer = combineReducers({
    athletes: AthletesReducer,
    routes: RoutesReducer,
});

export default EntitiesReducer;