import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlice';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  enhancer,
});
