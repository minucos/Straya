import { combineReducers } from "redux";
import AthletesReducer from "./athletes_reducer";
import RoutesReducer from "./routes_reducer";
import LocationsReducer from "./locations_reducer";
import WorkoutsReducer from "./workouts_reducer";

const EntitiesReducer = combineReducers({
    athletes: AthletesReducer,
    routes: RoutesReducer,
    locations: LocationsReducer,
    workouts: WorkoutsReducer,
});

export default EntitiesReducer;