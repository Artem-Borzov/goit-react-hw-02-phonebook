import React from 'react';
import { Contacts, Title } from './ContactsList.styled';

const ContactsList = ({ children }) => {
  return (
    <Contacts>
      <Title>Contacts</Title>
      {children}
    </Contacts>
  );
};

export default ContactsList;
