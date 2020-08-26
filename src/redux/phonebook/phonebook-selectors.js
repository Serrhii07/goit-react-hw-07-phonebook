import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getFilteredNames = createSelector(
  [getFilter, getAllContacts],
  (filter, allContacts) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getFilter,
  getAllContacts,
  getFilteredNames,
  getLoading,
  getError,
};
