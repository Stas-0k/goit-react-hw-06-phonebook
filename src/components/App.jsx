import React from 'react';
import ContactForm from './contact-form';
import Filter from './filter';
import ContactList from './contact-list';


function App() {
 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
}

export default App;
