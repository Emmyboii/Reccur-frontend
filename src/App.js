import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import GetReady from "./Components/GetReady";
import VerifyNumber from "./Components/VerifyNumber";
import VerifyAddress from "./Components/VerifyAddress";
import VerifyIdentity from "./Components/VerifyIdentity";
import UploadDocument from "./Components/UploadDocument";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/getready" element={<GetReady />} />
          <Route path="/verifynumber" element={<VerifyNumber />} />
          <Route path="/verifyaddress" element={<VerifyAddress />} />
          <Route path="/verifyidentity" element={<VerifyIdentity />} />
          <Route path="/uploadDocument" element={<UploadDocument />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
