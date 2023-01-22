import { GET_STATISTICS } from "../actions/types";

const intialState = { statistics: [] };

const statisticsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_STATISTICS:
      return { ...state, statistics: action.payload };
    default:
      return state;
  }
};
export default statisticsReducer;
