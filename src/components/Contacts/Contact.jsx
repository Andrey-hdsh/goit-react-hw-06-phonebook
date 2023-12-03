import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../List/List';
import { useDispatch, useSelector } from 'react-redux';

import { newContact , updateContacts } from 'redux/contactsSlice';
import { setFilter } from 'redux/filtersSlice';

export const SectionFormContacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filters = useSelector(state => state.filters.filters);
  const dispatch = useDispatch();

  const handleNewContact = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    } else if (contacts.some(contact => contact.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    dispatch(newContact(name, number));
  };

  const handleFilterContacts = value => {
    dispatch(setFilter(value.currentTarget.value));
  };

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    dispatch(updateContacts(updatedContacts));
  };

  const textContactsFilter = filters.toLowerCase();
  console.log(textContactsFilter);
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(textContactsFilter);
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm hundleContact={handleNewContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter value={filters} onChange={handleFilterContacts} />
      <ContactList
        filteredData={filteredContacts}
        deletedData={handleDeleteContact}
      />
    </div>
  );
};
