import { GET_ANNONCES } from "../actions/types";

const intialState = { annonces: [] };

const annoncesReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ANNONCES:
      return { ...state, annonces: action.payload };
    default:
      return state;
  }
};
export default annoncesReducer;
