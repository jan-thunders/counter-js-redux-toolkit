// createStore, applyMiddleware,  combineReducers, thunk
import { configureStore } from "@reduxjs/toolkit";
// reducers
import counterReducer from "../features/counter/counterSlice.js";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store