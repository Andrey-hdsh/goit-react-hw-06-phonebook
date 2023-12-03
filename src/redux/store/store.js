import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from '../contactsSlice';
import { filterReducer } from '../filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// // const initialState = {
// //   contacts: [
// //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// //   ],
// //   filters: '',
// // };

// const contactsInitialState = {
//     contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
// };

// const filterInitialState = {
//     filters: '',
// }

// export const newContact = (name, number) => {
//   return {
//     type: 'contacts',
//     payload: {
//       id: nanoid(),
//       name: name,
//       number: number,
//     },
//   };
// };

// export const setFilter = value => {
//   return {
//     type: 'filters',
//     payload: value,
//   };
// };

// export const updateContacts = updateContacts => {
//   return {
//     type: 'update contacts',
//     payload: updateContacts,
//   };
// };

// const contactsReducer = (state = contactsInitialState, action) => {
//     switch (action.type) {
//         case 'contacts':
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload],
//             }
//         case 'update contacts':
//             return {
//                 ...state,
//                 contacts: action.payload,
//             }
//         default:
//             return state;
//     }
// };

// const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) {
//         case 'filters':
//             return {
//                 ...state,
//                 filters: action.payload,
//             }
//         default:
//             return state;
//  }
// }

// // const rootReducer = (state = initialState, action) => {
// // //   console.log(action);
// //   switch (action.type) {
// //     case 'contacts':
// //       return {
// //         ...state,
// //         contacts: [...state.contacts, action.payload],
// //       };

// //     case 'filters':
// //       return {
// //         ...state,
// //         filters: action.payload,
// //       };
// //     case 'update contacts':
// //       return {
// //         ...state,
// //         contacts: action.payload,
// //       };
// //     default:
// //       return state;
// //   }
// // };

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filters: filterReducer,
// })

// export const store = configureStore({
//   reducer: rootReducer,
// });
