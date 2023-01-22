import { GET_MULTIPOSTING } from "../actions/types";

const intialState = { multiposting: [] };

const multipostingReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_MULTIPOSTING:
      return { ...state, multiposting: action.payload };
    default:
      return state;
  }
};
export default multipostingReducer;
