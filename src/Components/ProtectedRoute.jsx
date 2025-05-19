import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, verified }) => {
  const location = useLocation();

  if (verified !== 'verified') {
    return (
      <Navigate
        to="/dashboard"
        state={{ error: 'You need to fill in your KYC data to continue', from: location }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
