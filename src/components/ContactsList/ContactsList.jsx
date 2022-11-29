import React from 'react';
import { Contacts, DeleteBtn } from './ContactsList.styled';
import ContactsListItem from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id} name={name} number={number}>
            <DeleteBtn onClick={() => onDelete(id)} type="button">
              Delete
            </DeleteBtn>
          </ContactsListItem>
        );
      })}
    </Contacts>
  );
};

ContactsList.propTypes = {};

export default ContactsList;
