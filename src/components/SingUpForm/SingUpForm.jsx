import {
  InputName,
  Button,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { Formik, Form } from 'formik';
import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import React from 'react';

export function SingInForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const { name, email, password } = newUser;
    dispatch(register({ name, email, password }));

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
          <Label htmlFor="email">
            Email
            <InputName
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </Label>
          <Label htmlFor="password">
            Password
            <InputName
              type="password"
              placeholder="Enter your password"
              name="password"
              required
            />
          </Label>
          <Button type="submit">Sing up</Button>
        </Form>
      </Formik>
    </>
  );
}
