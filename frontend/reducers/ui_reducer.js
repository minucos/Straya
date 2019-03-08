import { combineReducers } from "redux";
import SortByReducer from "./sort_by_reducer";

const UIReducer = combineReducers({
    sortBy: SortByReducer,
});

export default UIReducer;