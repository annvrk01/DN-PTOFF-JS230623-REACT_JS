import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './../store/todoSlice';
import userSlice from './../store/userSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlice
  },
})