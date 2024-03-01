import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import shootSlice from "./slices/shootSlice";

const reducer = combineReducers({
    shoot: shootSlice,
})

const store = configureStore({
reducer,
});

export default store;