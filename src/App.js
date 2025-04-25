import React, { useContext } from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Beneficiary from "./Pages/Beneficiary";
import Invoice from "./Pages/Invoice";
import Transaction from "./Pages/Transaction";
import Settings from "./Pages/Settings";
import NavBar from "./Components/NavBar";
import { Context } from "./Context/Context";

function App() {

  const { handleSideBar, sideBar } = useContext(Context)

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full">
        <div
          className={`w-full h-[200%] lg:hidden text-[#1D1C1F] z-40 absolute ${sideBar ? 'bg-black/20' : 'hidden'}`}
          onClick={handleSideBar}
        ></div>
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
