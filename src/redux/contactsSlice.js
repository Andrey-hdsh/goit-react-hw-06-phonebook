import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const newContact = (name, number) => {
  return {
    type: 'contacts',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const updateContacts = updateContacts => {
  return {
    type: 'update contacts',
    payload: updateContacts,
  };
};

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'update contacts':
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
