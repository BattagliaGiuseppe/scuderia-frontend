import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const token = localStorage.getItem('token');

  // Se non c'è token, reindirizza al login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Se c'è token, mostra i componenti figli
  return <Outlet />;
}
