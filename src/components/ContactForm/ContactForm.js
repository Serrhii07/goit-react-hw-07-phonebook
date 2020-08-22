import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const validName = this.getValidName();
    if (validName) {
      this.props.onSubmit(this.state);
    }

    this.reset();
  };

  getValidName = () => {
    const { contacts } = this.props;
    const { name } = this.state;
    const normalizedName = name.toLowerCase();
    const duplicate = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );

    if (duplicate) {
      toast.info(`${name} is already in contacts.`);
      return;
    }

    if (!name) {
      toast.info('Please, fill the form');
      return;
    }

    return name;
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <p className={styles.form_text}>Name</p>
          <input
            className={styles.form_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p className={styles.form_text}>Number</p>
          <input
            className={styles.form_input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button className={styles.form_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(phonebookActions.addContact({ name, number })),
});

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
