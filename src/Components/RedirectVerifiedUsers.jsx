import { Navigate, useLocation } from 'react-router-dom';

const RedirectVerifiedUsers = ({ children, verified, kyc }) => {
  const location = useLocation();

  if (verified ===kyc) {
    // Redirect to the page they came from, or home
    const from = location.state?.from?.pathname || '/home';
    return <Navigate to={from} replace />;
  }

  return children;
};

export default RedirectVerifiedUsers;
