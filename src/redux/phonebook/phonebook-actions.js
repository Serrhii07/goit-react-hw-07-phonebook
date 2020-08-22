import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('ADD_CONTACT', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('DELETE_CONTACT');
const filterContact = createAction('FILTER_CONTACT');

export default { addContact, deleteContact, filterContact };
