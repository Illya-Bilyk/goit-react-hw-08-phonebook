import { LogInForm } from './LogInForm';
import { FormWrap, TitlePhone } from 'pages/UserContacts/UserContacts.styled';

export const LogIn = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#010101',
      }}
    >
      <FormWrap>
        <TitlePhone>Log In</TitlePhone>
        <LogInForm />
      </FormWrap>
    </div>
  );
};
