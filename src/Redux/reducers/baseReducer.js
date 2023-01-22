import { GET_BASE_CV } from "../actions/types";

const intialState = { base: [] };

const baseReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_BASE_CV:
      return { ...state, base: action.payload };
    default:
      return state;
  }
};
export default baseReducer;
