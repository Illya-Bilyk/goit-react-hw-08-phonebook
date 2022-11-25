import { Outlet } from 'react-router-dom';
import {
  Header,
  StyledLink,
  Nav,
  ButtonLogout,
  UserMenu,
  UserMail,
} from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { getUserEmail } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

export const Layout = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <>
      <Header>
        <Nav>
          <div>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            {isLoggedIn && <StyledLink to="contacts">Contacts</StyledLink>}
          </div>
          <div>
            {isLoggedIn ? (
              <UserMenu>
                <UserMail>{userEmail}</UserMail>
                <ButtonLogout type="button" onClick={() => dispatch(logout())}>
                  Log out
                </ButtonLogout>
              </UserMenu>
            ) : (
              <>
                <StyledLink to="singup">Sing Up</StyledLink>
                <StyledLink to="logIn">Log in</StyledLink>
              </>
            )}
          </div>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
