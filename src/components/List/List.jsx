import { ListContainer } from './list.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/slice/filtersSlice';
import { deleteContacts, getContacts } from 'redux/slice/contactsSlice';

export const ContactList = () => {
  
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const textContactsFilter = filters.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(textContactsFilter);
  });

  return (
    <ListContainer>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button type="submit" onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};
