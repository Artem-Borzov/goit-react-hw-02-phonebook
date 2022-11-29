import React from 'react';
import { Contact } from './ContactListItem.styled';
import PropTypes from 'prop-types';

const ContactsListItem = ({ name, number, children }) => {
  return (
    <Contact>
      {name}: {number}
      {children}
    </Contact>
  );
};

ContactsListItem.propTypes = {};

export default ContactsListItem;
