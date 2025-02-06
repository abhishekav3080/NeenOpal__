import { combineReducers } from "redux";
import graphReducer from "./graphReducer";
import historyReducer from "./historyReducer";

const rootReducer = combineReducers({
  graph: graphReducer,
  history: historyReducer,
});

export default rootReducer;
