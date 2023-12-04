import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../List/List';

export const SectionFormContacts = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
};
