import React from 'react';
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactItem/ContactItem';
import Filter from './Phonebook/Filter/Filter';
import css from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  componentDidMount() {
    const contactsParsed = JSON.parse(localStorage.getItem('contacts'));

    if(contactsParsed){
      this.setState({ contacts: contactsParsed });
    };
  };

  componentDidUpdate(prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    };
  };

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleChangeFilter = (filter) => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onAddContact={this.handleAddContact}
        />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onChangeFilter={this.handleChangeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  };
};

export default App;