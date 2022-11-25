import { InputName, Button, Label } from './ContactForm.styled';
import { Formik, Form } from 'formik';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contacts/contactSlice';
import React from 'react';

export function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    if (newContact && contacts.some(item => item.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    addContact(newContact);
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Label htmlFor="name">
            Name
            <InputName
              type="text"
              placeholder="Enter your name"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <InputName
              type="tel"
              placeholder="Enter your number"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
}
