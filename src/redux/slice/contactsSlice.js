import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filtersSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContacts: {
      reducer(state, actions) {
        state.contact = [...state.contact, actions.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    updateContacts(state, action) {
      state.contact = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filters: filterReducer,
});



export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const getContacts = state => state.contacts.contact;
export const { addContacts, updateContacts } = contactsSlice.actions;
