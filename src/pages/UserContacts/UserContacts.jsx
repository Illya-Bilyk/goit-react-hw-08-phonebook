import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { FormWrap, TitlePhone, TitleContact } from './UserContacts.styled';
import { useGetContactsQuery } from 'redux/contacts/contactSlice';
import { useFilter } from 'hooks/filterHook';
import { useMemo } from 'react';

export const UserContacts = () => {
  const { filter } = useFilter();
  const { data: contacts } = useGetContactsQuery();

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#010101',
      }}
    >
      <FormWrap>
        <TitlePhone>Phonebook</TitlePhone>
        <ContactForm />

        <TitleContact>Contacts</TitleContact>
        <Filter />
        {contacts && <ContactList contacts={filteredContacts} />}
      </FormWrap>
    </div>
  );
};
