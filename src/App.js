import React, { Suspense, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/NavBar";
import { Context } from "./Context/Context";
import LoadingScreen from "./Pages/LoadingScreen";

const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const Home = React.lazy(() => import('./Pages/Home'));
const Beneficiary = React.lazy(() => import('./Pages/Beneficiary'));
const Invoice = React.lazy(() => import('./Pages/Invoice'));
const Transaction = React.lazy(() => import('./Pages/Transaction'));
const Settings = React.lazy(() => import('./Pages/Settings'));
const SignUp = React.lazy(() => import('./Pages/SignUp'));
const Login = React.lazy(() => import('./Pages/Login'));
const ForgotPassword = React.lazy(() => import('./Pages/ForgotPassword'));
const UpdatePassword = React.lazy(() => import('./Pages/UpdatePassword'));

function App() {
  const { handleSideBar, sideBar } = useContext(Context);
  const location = useLocation();

  const shouldHideSidebar = location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/forgotpassword'||location.pathname === '/updatepassword';


  return (
    <div className="flex w-full">
      {!shouldHideSidebar && <Sidebar />}

      <div className="w-full">
        <div
          className={`w-full h-[200%] lg:hidden text-[#1D1C1F] z-40 absolute ${sideBar ? 'bg-black/20' : 'hidden'}`}
          onClick={handleSideBar}
        ></div>
        <NavBar />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/beneficiaries/*" element={<Beneficiary />} />
            <Route path="/invoices/*" element={<Invoice />} />
            <Route path="/transactions/*" element={<Transaction />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/updatepassword" element={<UpdatePassword />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
