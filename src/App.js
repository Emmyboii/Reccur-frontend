import React, { Suspense, useContext, useEffect, useState } from "react";
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

  const CreatedKyc = localStorage.getItem('KYCcreated')
  const [kyc, setKyc] = useState(() => CreatedKyc || null)


  useEffect(() => {
    const fetchKyc = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/kyc/`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          }
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch kyc');
        }

        setKyc(data.id);
        localStorage.setItem('KYCcreated', data.id);

      } catch (error) {
        console.error('Error fetching kyc:', error.message);
        return null;
      }
    }

    if (!CreatedKyc) {
      fetchKyc();
    }
  }, [CreatedKyc])

  useEffect(() => {
    const timestamp = localStorage.getItem('tokenTimestamp');

    const now = Date.now();
    const TWO_DAYS = 2 * 24 * 60 * 60 * 1000;

    if (now - Number(timestamp) > TWO_DAYS) {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenTimestamp');
    }
  }, [])


  const shouldHideSidebar = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/forgotpassword' || location.pathname === '/updatepassword';

  return (
    <div className="flex w-full">
      {!shouldHideSidebar && <Sidebar kyc={kyc} verified={CreatedKyc} />}

      <div className="w-full">
        <div
          className={`w-full top-0 h-[200%] lg:hidden text-[#1D1C1F] z-40 absolute ${sideBar ? 'bg-black/20' : 'hidden'}`}
          onClick={handleSideBar}
        ></div>
        {!shouldHideSidebar && <NavBar />}
        <Suspense fallback={<LoadingScreen />}>
          <Routes>

            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomeRoot />
                </PublicRoute>
              }
            />

            <Route element={<ProtectedRoutes />}>
              <Route
                path="/dashboard/*"
                element={
                  <RedirectVerifiedUsers kyc={kyc} verified={CreatedKyc}>
                    <Dashboard />
                  </RedirectVerifiedUsers>
                }
              />
              <Route
                path="/home/*"
                element={
                  <ProtectedRoute kyc={kyc} verified={CreatedKyc}>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/beneficiaries/*"
                element={
                  <ProtectedRoute kyc={kyc} verified={CreatedKyc}>
                    <Beneficiary />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/invoices/*"
                element={
                  <ProtectedRoute kyc={kyc} verified={CreatedKyc}>
                    <Invoice />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/transactions/*"
                element={
                  <ProtectedRoute kyc={kyc} verified={CreatedKyc}>
                    <Transaction />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings/*"
                element={
                  <ProtectedRoute kyc={kyc} verified={CreatedKyc}>
                    <Settings />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
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
