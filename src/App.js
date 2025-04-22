import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Beneficiary from "./Pages/Beneficiary";
import Invoice from "./Pages/Invoice";
import Transaction from "./Pages/Transaction";
import Settings from "./Pages/Settings";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]">
        <Dashboard />
        <Home />
        <Beneficiary />
        <Invoice />
        <Transaction />
        <Routes>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
