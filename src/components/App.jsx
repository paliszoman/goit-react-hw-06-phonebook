import React, { useEffect } from 'react';

import { Form } from './Form/Form.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { useDispatch } from 'react-redux';

import { setStartContacts } from '../app/phonebookSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('phonebook'));
    if (storage === null) {
      dispatch(
        setStartContacts([
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ])
      );
    } else {
      dispatch(setStartContacts(storage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
