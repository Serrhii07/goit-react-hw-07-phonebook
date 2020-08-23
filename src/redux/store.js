import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phonebookReducer from './phonebook/phonebook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware,
});

export default store;
