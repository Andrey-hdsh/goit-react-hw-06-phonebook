import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../List/List';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts, updateContacts, getContacts } from 'redux/slice/contactsSlice';
import { setFilter , getFilter } from 'redux/slice/filtersSlice';


export const SectionFormContacts = () => {

  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleNewContact = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    } else if (contacts.some(contact => contact.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }
    dispatch(addContacts(name, number));
  };

  const handleFilterContacts = value => {
    dispatch(setFilter(value.currentTarget.value));
  };

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    dispatch(updateContacts(updatedContacts));
  };

  const textContactsFilter = filters.toLowerCase();
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
