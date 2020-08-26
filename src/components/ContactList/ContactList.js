import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
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

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getFilteredNames(state),
  isLoadingContacts: phonebookSelectors.getLoading(state),
  isError: phonebookSelectors.getError(state),
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
