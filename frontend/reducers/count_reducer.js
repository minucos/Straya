import { RECEIVE_ALL_ROUTES } from "../actions/routes_actions";

const CountReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ROUTES:
      return action.count;

    default:
      return state;
  }
};

export default CountReducer;