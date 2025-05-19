import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  const location = useLocation();

  if (isAuthenticated) {
    const previousRoute = location.state?.from?.pathname || "/home";
    return <Navigate to={previousRoute} replace />;
  }

  return children;
};

export default PublicRoute;
