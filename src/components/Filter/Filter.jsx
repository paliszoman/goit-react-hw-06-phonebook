import css from './Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { searchForContacts } from '../../app/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const formSubmit = e => {
    const form = e.currentTarget;
    dispatch(searchForContacts(form.value));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={formSubmit}
      />
    </form>
  );
};

Filter.propTypes = {
  formSubmit: PropTypes.func,
  searchFromFilter: PropTypes.string,
};
