import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Beneficiary from "./Pages/Beneficiary";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]">
        <Dashboard />
        <Home />
        <Beneficiary />
      </div>
    </div>
  );
}

export default App;
