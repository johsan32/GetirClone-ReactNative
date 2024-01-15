import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contextReducer } from "../reducers/context";
import cartReducer from "../reducers/cartReducer";

const reducer = combineReducers({
  context: contextReducer,
  carts:cartReducer,
});

export default configureStore({
  reducer: reducer,
});
