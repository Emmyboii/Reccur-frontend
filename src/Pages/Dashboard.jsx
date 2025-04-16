import React from 'react'
import { Route, Routes } from "react-router-dom";
import WelcomePage from '../Components/WelcomePage';
import GetReady from "../Components/GetReady";
import VerifyNumber from "../Components/VerifyNumber";
import VerifyAddress from "../Components/VerifyAddress";
import VerifyIdentity from "../Components/VerifyIdentity";
import UploadDocument from "../Components/UploadDocument";

const Dashboard = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/getready" element={<GetReady />} />
                <Route path="/verifynumber" element={<VerifyNumber />} />
                <Route path="/verifyaddress" element={<VerifyAddress />} />
                <Route path="/verifyidentity" element={<VerifyIdentity />} />
                <Route path="/uploadDocument" element={<UploadDocument />} />
            </Routes>
        </div>
    )
}

export default Dashboard