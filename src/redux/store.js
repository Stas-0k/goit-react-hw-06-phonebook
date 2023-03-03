import { configureStore } from '@reduxjs/toolkit';
import {  tasksReducer } from './contactsSlice'



export const store = configureStore({
  reducer: {
        contacts: tasksReducer,
  },
});
