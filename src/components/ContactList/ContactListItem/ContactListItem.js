import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, deleteContact }) => (
  <li className={styles.contact_item}>
    {name}: {number}
    <button className={styles.contact_button} onClick={deleteContact}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
