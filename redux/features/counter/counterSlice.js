import { createSlice } from "@reduxjs/toolkit";


const initialState = 0

const counterSlice = createSlice({
     name: "counter",
     initialState: initialState, 
     reducers: {
          increase:  (state, action) => {return state + 1},
          decrease:  (state, action) => state-1,
          reset:  state => initialState,
     }
})

// console.log(counterSlice)

export const {increase,decrease,reset} = counterSlice.actions

// const counterReducer = counterSlice.reducer
export default counterSlice.reducer


