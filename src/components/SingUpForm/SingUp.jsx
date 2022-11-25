import { SingInForm } from './SingUpForm';
import { FormWrap, TitlePhone } from 'pages/UserContacts/UserContacts.styled';

export const SingUp = () => {
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
        <TitlePhone>Sing Up</TitlePhone>
        <SingInForm />
      </FormWrap>
    </div>
  );
};
