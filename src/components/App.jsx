import React, { useEffect, useState } from 'react';
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactItem/ContactItem';
import Filter from './Phonebook/Filter/Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}];
  });
  const [ filter, setFilter] = useState('');
  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleChangeFilter = (filter) => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

    const filteredContacts = getFilteredContacts();

    return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm
        contacts={contacts}
        onAddContact={handleAddContact}
      />

      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChangeFilter={handleChangeFilter}
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
export default App;