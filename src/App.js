import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Beneficiary from "./Pages/Beneficiary";
import Invoice from "./Pages/Invoice";
import Transaction from "./Pages/Transaction";
import Settings from "./Pages/Settings";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="lg:w-[80%] w-full">
        <NavBar />
        <Dashboard />
        <Home />
        <Beneficiary />
        <Invoice />
        <Transaction />
        <Settings />
      </div>
    </div>
  );
}

export default App;
