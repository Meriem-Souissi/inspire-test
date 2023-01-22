import { combineReducers } from "redux";

import candidatesReducer from "./candidatesReducer";
import annoncesReducer from "./annoncesReducer";
import multipostingReducer from "./multipostingReducer";
import notificationsReducer from "./notificationsReducer";

export default combineReducers({
  candidatesReducer,
  annoncesReducer,
  multipostingReducer,
  notificationsReducer,
});
