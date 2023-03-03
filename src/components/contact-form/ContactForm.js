import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import css from './contact-form.module.css';
// import { useDispatch } from "react-redux";
// import {addContact } from '../../redux/contactsSlice'


function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name,
      id: nanoid(),
      number,
    };

    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form_contact}>
      <label className={css.label_contact}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        className={css.input_contact}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <label className={css.label_contact}>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        className={css.input_contact}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button type="submit" className={css.bttn_contact}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default ContactForm;