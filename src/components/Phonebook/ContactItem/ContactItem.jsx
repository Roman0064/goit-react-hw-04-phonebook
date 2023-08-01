import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.list}>
      {name}: {number}
      <button onClick={() => onDelete(id)} className={css.btn}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.wrapper}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
