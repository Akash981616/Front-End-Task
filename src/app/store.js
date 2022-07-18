import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from "./reducers/simpleReducer";
export const store = configureStore({
  reducer: {
  taskReducer:TaskReducer,
  },
});
