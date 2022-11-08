import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = Boolean(localStorage.getItem('access_token'));
  return auth ? children : <Navigate to="/login" replace />;
};
