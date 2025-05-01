import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const WelcomePage = React.lazy(() => import('../Components/WelcomePage'));
const GetReady = React.lazy(() => import('../Components/GetReady'));
const VerifyNumber = React.lazy(() => import('../Components/VerifyNumber'));
const VerifyAddress = React.lazy(() => import('../Components/VerifyAddress'));
const VerifyIdentity = React.lazy(() => import('../Components/VerifyIdentity'));
const UploadDocument = React.lazy(() => import('../Components/UploadDocument'));

const Dashboard = () => {
    return (
        <div>
            <Suspense fallback={<LoadingScreen />}>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="getready" element={<GetReady />} />
                    <Route path="verifynumber" element={<VerifyNumber />} />
                    <Route path="verifyaddress" element={<VerifyAddress />} />
                    <Route path="verifyidentity" element={<VerifyIdentity />} />
                    <Route path="uploadDocument" element={<UploadDocument />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default Dashboard