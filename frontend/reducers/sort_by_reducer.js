import { 
    SORT_DATE,
    SORT_TITLE,
    SORT_TIME,
    SORT_DISTANCE
} from "../actions/sort_actions";

const SortKeyReducer = (oldState = "dateDESC", action) => {
    
    switch (action.type) {
        case SORT_DATE:
            if (oldState === "dateASC") {
                return "dateDESC";
            } else {
                return "dateASC";
            }
            
        case SORT_TITLE:
            if (oldState === "titleASC") {
                return "titleDESC";
            } else {
                return "titleASC";
            }

        case SORT_TIME:
            if (oldState === "timeASC") {
                return "timeDESC";
            } else {
                return "timeASC";
            }
            
        case SORT_DISTANCE:
            if (oldState === "distanceASC") {
                return "distanceDESC";

            } else {
                return "distanceASC";
            }

        default:
            return oldState;
    }
};

export default SortKeyReducer;
