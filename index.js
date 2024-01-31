import store from "./redux/app/store.js"; 
// action creators
import {increase,decrease,reset} from "./redux/features/counter/counterSlice.js";

console.log("initial State", store.getState());

store.dispatch(increase()); 

console.log("after increase", store.getState());


store.dispatch(increase()); 

console.log("after increase", store.getState());


store.dispatch(increase()); 

console.log("after increase", store.getState());


store.dispatch(decrease());

console.log("after decrease", store.getState());

store.dispatch(reset());

console.log("after reset", store.getState());

