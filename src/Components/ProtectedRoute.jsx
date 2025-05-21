import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, verified, kyc }) => {
    const location = useLocation();

    if (verified !== kyc) {
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