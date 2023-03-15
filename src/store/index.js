import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//we create multiple slices for differnt states 
createSlice({
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
      state.counter = state.counter + action.amount
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter
    }
  }
})


const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
