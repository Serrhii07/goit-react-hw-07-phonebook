import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              deleteContact={() => onDeleteContact(id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

const getFilteredNames = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredNames(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
