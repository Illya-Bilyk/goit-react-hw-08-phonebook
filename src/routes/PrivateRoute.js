import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ redirectTo }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};
