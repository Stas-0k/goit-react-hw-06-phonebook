import React, { useState, useEffect } from 'react';
import ContactForm from './contact-form';
import Filter from './filter';
import ContactList from './contact-list';


function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')));
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    if (
      contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevState => 
         [...prevState, contact],
      );
    }
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactDelete = contactId => {
    setContacts(
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getContacts()} onDelete={contactDelete} />
    </div>
  );
}

export default App;
