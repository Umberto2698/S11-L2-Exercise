import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import fetchReducer from "../reducers/fetchReducer";

const totalReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: fetchReducer,
});

const store = configureStore({
  reducer: totalReducer,
});

export default store;
