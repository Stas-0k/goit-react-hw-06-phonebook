import css from './contact-list.module.css';
import { useSelector } from "react-redux";
import { getContacts } from '../../redux/selectors'
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice'
import {getFilter} from '../../redux/selectors'

const ContactList = () => {

  const contacts = useSelector(getContacts)
  const search = useSelector(getFilter)
  

  const dispatch = useDispatch();

  console.log(search)

  const filtredContacts =
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.query.toLowerCase()))

 
  

  if (contacts.length > 0) {
    return (
      <ul className={css.list_contact}>
        {filtredContacts.map(contact => (
          <li className={css.listItem_contact} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.bttn_contactList}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>No data to display :(</p>;
  }
};



export default ContactList;
