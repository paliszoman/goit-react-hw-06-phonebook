import css from './ContactList.module.css';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getPhonebook } from '../../app/selectors';
import { deleteContacts } from '../../app/phonebookSlice';

const searchForContacts = (filter, contacts) => {
  if (filter === '') return contacts;
  const lowercaseFilteredText = filter.toLowerCase();
  let filterArray = []; //filter store
  contacts.map(contact => {
    const nameMatch = contact.name
      .toLowerCase()
      .includes(lowercaseFilteredText); // return true if name include filtered text
    if (nameMatch) {
      filterArray.push(contact); // if true push correct obj to filterArrat
    }
    return filterArray;
  });
  return filterArray;
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getPhonebook);
  const data = searchForContacts(filter, contacts);

  return (
    <ul className={css.contactList}>
      {data.map(({ id, name, number }) => (
        <li key={id} className={css.contact}>
          {name}: {number}{' '}
          <button
            key={id}
            type="submit"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteMe: PropTypes.func,
};
