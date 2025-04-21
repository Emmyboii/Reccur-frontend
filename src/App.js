import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Beneficiary from "./Pages/Beneficiary";
import Invoice from "./Pages/Invoice";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]">
        <Dashboard />
        <Home />
        <Beneficiary />
        <Invoice />
      </div>
    </div>
  );
}

export default App;
