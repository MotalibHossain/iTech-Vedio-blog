import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import vedioFetchSlice from '../features/Videos/VideoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vedios:vedioFetchSlice
  },
});
