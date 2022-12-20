import { createSlice } from '@reduxjs/toolkit';

const initialPhonebookState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: initialPhonebookState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
      localStorage.setItem('phonebook', JSON.stringify(state.contacts));
    },
    searchForContacts(state, action) {
      state.filter = action.payload;
    },
    deleteContacts(state, action) {
      let filtered = state.contacts.filter(item => item.id !== action.payload);
      state.contacts = filtered;
      localStorage.setItem('phonebook', JSON.stringify(state.contacts));
    },
    setStartContacts(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const {
  addContact,
  searchForContacts,
  deleteContacts,
  setStartContacts,
} = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
