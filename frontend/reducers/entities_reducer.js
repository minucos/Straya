import { combineReducers } from "redux";
import AthletesReducer from "./athletes_reducer";

const EntitiesReducer = combineReducers({
    athletes: AthletesReducer,
});

export default EntitiesReducer;