import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Contact } from './ContactItem';
import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
