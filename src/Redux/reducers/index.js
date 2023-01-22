import { combineReducers } from "redux";

import candidatesReducer from "./candidatesReducer";
import annoncesReducer from "./annoncesReducer";
import multipostingReducer from "./multipostingReducer";
import notificationsReducer from "./notificationsReducer";
import statisticsReducer from "./statisticsReducer";
import baseReducer from "./baseReducer";

export default combineReducers({
  candidatesReducer,
  annoncesReducer,
  multipostingReducer,
  notificationsReducer,
  statisticsReducer,
  baseReducer,
});
