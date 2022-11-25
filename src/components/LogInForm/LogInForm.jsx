import {
  InputName,
  Button,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { Formik, Form } from 'formik';
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import React from 'react';

export function LogInForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      email: values.email,
      password: values.password,
    };
    const { email, password } = newUser;
    dispatch(login({ email, password }));

    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
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
          <Button type="submit">Log in</Button>
        </Form>
      </Formik>
    </>
  );
}
