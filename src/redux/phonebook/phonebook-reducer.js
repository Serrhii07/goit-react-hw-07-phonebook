import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
