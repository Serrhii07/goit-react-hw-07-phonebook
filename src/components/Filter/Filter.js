import React from 'react';
import { connect } from 'react-redux';
import { phonebookSelectors, filterContact } from '../../redux/phonebook';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

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
  value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContact(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
