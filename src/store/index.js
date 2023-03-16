import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//we create multiple slices for differnt states 
const counterSlice = createSlice({
  name: 'counter', //name of the slice we created 
  initialState, // initial state 
  //reducer functions for this slice
  reducers: {
    increment(state){
      state.counter++; // here we can do this and it is not mutating the original state
    },
    decrement(state){
      state.counter--
    },
    increase(state, action) {
      // state.counter = state.counter + action.amount
      state.counter = state.counter + action.payload // when using toolkit we can access the argument passed by using payload
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter
    }
  }
})

const store = configureStore({
  //it receives reducer - reserved keyword
  reducer : counterSlice.reducer
});

export const counterActions = counterSlice.actions; // actions is an object that returns keys where keynames are the methods we use in our reducer area in slice

export default store;
