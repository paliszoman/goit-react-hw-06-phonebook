import css from './Form.module.css';
import React from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../app/phonebookSlice';
import { getPhonebook } from '../../app/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getPhonebook);
  const formSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const name = form.name.value;
    const number = form.number.value;
    const id = nanoid(6);
    const nameArray = contacts.map(item => item.name);
    if (nameArray.includes(name)) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact({ id, name, number }));
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={formSubmit}>
      <label className={css.label}>Name</label>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label className={css.label}>Number</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.butt} type="submit">
        Add Contact
      </button>
    </form>
  );
};

Form.propTypes = {
  formSubmit: PropTypes.func,
  props: PropTypes.objectOf(PropTypes.string),
};
