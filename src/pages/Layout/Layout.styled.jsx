import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 65px;
  background: #43d1af;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
`;
export const StyledLink = styled(NavLink)`
  padding-right: 40px;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  text-decoration: none;
`;
export const ButtonLogout = styled.button`
  padding-right: 40px;
  padding-left: 40px;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  border: none;
  background: #43d1af;
  cursor: pointer;
`;

export const UserMenu = styled.div`
  display: flex;
`;

export const UserMail = styled.p`
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  margin: 0 auto;
`;
