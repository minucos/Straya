import { combineReducers } from "redux";
import SortByReducer from "./sort_by_reducer";
import CountReducer from './count_reducer';

const UIReducer = combineReducers({
    sortBy: SortByReducer,
    count: CountReducer
});

export default UIReducer;