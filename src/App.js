import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80%]">
        <Dashboard />
        <Home />
      </div>
    </div>
  );
}

export default App;
