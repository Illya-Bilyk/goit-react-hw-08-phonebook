import { Delete, Item } from './ContactList.styled';
import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';
import React from 'react';

export const Contact = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <Item>
      {name} : {number}
      <Delete
        type="button"
        name={name}
        disabled={isLoading}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </Delete>
    </Item>
  );
};
