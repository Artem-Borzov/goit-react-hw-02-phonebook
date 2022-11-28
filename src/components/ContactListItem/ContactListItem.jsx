import React from 'react';
import { Contact, DeleteBtn } from './ContactListItem.styled';
import PropTypes from 'prop-types';

const ContactsListItem = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.length === 0
        ? `No contacts yet`
        : contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              {name}: {number}
              <DeleteBtn onClick={() => onDelete(id)} type="button">
                Delete
              </DeleteBtn>
            </Contact>
          ))}
    </div>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsListItem;
