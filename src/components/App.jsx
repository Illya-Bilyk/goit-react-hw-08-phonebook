import { Routes, Route } from 'react-router-dom';
import { UserContacts } from 'pages/UserContacts/UserContacts';
import { Layout } from 'pages/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { SingUp } from './SingUpForm';
import { LogIn } from './LogInForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="singup" element={<SingUp />} />
          </Route>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="logIn" element={<LogIn />} />
          </Route>
          <Route element={<PrivateRoute redirectTo="login" />}>
            <Route path="contacts" element={<UserContacts />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
