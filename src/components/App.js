import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm />
      <ToastContainer />
      <h2 className={styles.header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
