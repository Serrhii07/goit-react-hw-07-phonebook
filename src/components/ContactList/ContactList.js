import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import PropTypes from 'prop-types';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;
    const { onDeleteContact } = this.props;

    return (
      <>
        {this.props.isLoadingContacts && <h2>Loading...</h2>}
        {this.props.isError && <h2>Oops! Something went wrong :(</h2>}
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
  }
}

const getFilteredNames = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter, loading, error } }) => ({
  contacts: getFilteredNames(items, filter),
  isLoadingContacts: loading,
  isError: error,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
