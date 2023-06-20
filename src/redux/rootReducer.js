import { combineReducers } from "@reduxjs/toolkit";
import modelSlice from "./models/model.slicer";
const roodReducer = combineReducers({
  modelSlice: modelSlice,
});
export default roodReducer;
