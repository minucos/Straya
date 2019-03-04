import { combineReducers } from "redux";
import AthletesReducer from "./athletes_reducer";
import RoutesReducer from "./routes_reducer";
import LocationsReducer from "./locations_reducer";

const EntitiesReducer = combineReducers({
    athletes: AthletesReducer,
    routes: RoutesReducer,
    locations: LocationsReducer,
});

export default EntitiesReducer;