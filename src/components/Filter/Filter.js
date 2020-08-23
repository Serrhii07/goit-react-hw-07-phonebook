import React from 'react';
import { connect } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    <p className={styles.filter_text}>Find contacts by name</p>
    <input
      className={styles.filter_input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.filterContact(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
