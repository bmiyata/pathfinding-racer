import { combineReducers } from "redux";
import gridReducer from "./grid/grid.reducer";
import algorithm1Reducer from "./algorithm1/algorithm1.reducer";
import algorithm2Reducer from "./algorithm2/algorithm2.reducer";

const rootReducer = combineReducers({
  grid: gridReducer,
  algorithm1: algorithm1Reducer,
  algorithm2: algorithm2Reducer
});

export default rootReducer;
