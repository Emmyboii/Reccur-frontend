import React, { Suspense, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/NavBar";
import { Context } from "./Context/Context";
import LoadingScreen from "./Pages/LoadingScreen";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import HomeRoot from "./Pages/HomeRoot";
import ProtectedRoute from "./Components/ProtectedRoute";
import RedirectVerifiedUsers from "./Components/RedirectVerifiedUsers";
import PublicRoute from "./Components/PublicRoute";

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



  const verified = JSON.parse(localStorage.getItem('userCreated'))

  const shouldHideSidebar = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/forgotpassword' || location.pathname === '/updatepassword';

  return (
    <div className="flex w-full">
      {!shouldHideSidebar && <Sidebar />}

      <div className="w-full">
        <div
          className={`w-full top-0 h-[200%] lg:hidden text-[#1D1C1F] z-40 absolute ${sideBar ? 'bg-black/20' : 'hidden'}`}
          onClick={handleSideBar}
        ></div>
        {!shouldHideSidebar && <NavBar />}
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomeRoot />} />
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/dashboard/*"
                element={
                  <RedirectVerifiedUsers verified={verified}>
                    <Dashboard />
                  </RedirectVerifiedUsers>
                }
              />
              <Route
                path="/home/*"
                element={
                  <ProtectedRoute verified={verified}>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/beneficiaries/*"
                element={
                  <ProtectedRoute verified={verified}>
                    <Beneficiary />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/invoices/*"
                element={
                  <ProtectedRoute verified={verified}>
                    <Invoice />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/transactions/*"
                element={
                  <ProtectedRoute verified={verified}>
                    <Transaction />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings/*"
                element={
                  <ProtectedRoute verified={verified}>
                    <Settings />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/updatepassword" element={<UpdatePassword />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
