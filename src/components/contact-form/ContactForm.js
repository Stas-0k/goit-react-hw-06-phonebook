import css from './contact-form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

function ContactForm() {
 
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target.elements;
    const formR = evt.currentTarget;
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          form.name.value.toLowerCase().trim()
      )
    ) {
      alert(`${form.name.value} is already in contacts`);
    } else {
      dispatch(addContact(form.name.value, form.number.value));
      formR.reset();
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className={css.form_contact}>
      <label className={css.label_contact}>Name</label>
      <input
        type="text"
        name="name"
        className={css.input_contact}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label_contact}>Number</label>
      <input
        type="tel"
        name="number"
        className={css.input_contact}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.bttn_contact}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
