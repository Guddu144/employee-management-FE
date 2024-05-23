import { Navigate, Outlet } from 'react-router-dom';
import { getTokenFromCookies } from '../utils/request';

const Auth = () => {
  const token = getTokenFromCookies();
  if (!token) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default Auth;
