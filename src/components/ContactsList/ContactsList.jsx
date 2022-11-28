import React from 'react';
import { Contacts, Title } from './ContactsList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ children }) => {
  return (
    <Contacts>
      <Title>Contacts</Title>
      {children}
    </Contacts>
  );
};

ContactsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactsList;
