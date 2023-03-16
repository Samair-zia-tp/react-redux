import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth'

const store = configureStore({
  //it receives reducer - reserved keyword
  reducer: { counter: counterReducer, auth: authReducer }, // for more than one reducers we pass an object with key value pair
});

export default store;
