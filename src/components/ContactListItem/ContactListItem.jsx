import React from 'react';
import { Contact } from './ContactListItem.styled';

const ContactsListItem = ({ contacts }) => {
  return (
    <div>
      {contacts.length === 0
        ? `No contacts yet`
        : contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              {name}: {number}
              <button type button>
                Button
              </button>
            </Contact>
          ))}
    </div>
  );
};

export default ContactsListItem;
