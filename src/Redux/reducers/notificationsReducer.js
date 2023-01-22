import { GET_NOTIFICATIONS } from "../actions/types";

const intialState = { notifications: [] };

const notificationsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
};
export default notificationsReducer;
