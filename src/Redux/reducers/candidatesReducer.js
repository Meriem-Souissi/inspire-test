import { GET_CANDIDATES } from "../actions/types";

const intialState = { candidates: [] };

const candidatesReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES:
      return { ...state, candidates: action.payload };
    default:
      return state;
  }
};
export default candidatesReducer;
