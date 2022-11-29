import React from 'react';
import { Contacts } from './ContactsList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ children }) => {
  return <Contacts>{children}</Contacts>;
};

ContactsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactsList;
