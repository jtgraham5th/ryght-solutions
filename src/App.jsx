import "./App.css";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ClientDashboard from "./pages/ClientDashboard";
import UserDashboard from "./pages/UserDashboard";
import Settings from "./pages/Settings";
import { Landing } from "./features/authentication";
import { ClientProvider } from "./context/ClientContext";
import { UserProvider } from "./context/UserContext";

import ErrorBoundary from "./components/common/ErrorBoundary";
import NotificationProvider from "./components/common/NotificationSystem";
import FeatureDemo from "./components/common/FeatureDemo";

function App() {
  const [sidebar, setSidebar] = useState(false);


  // Development bypass - set to true to skip login entirely
  const DEV_BYPASS_LOGIN = process.env.NODE_ENV === 'development' && process.env.REACT_APP_BYPASS_LOGIN === 'true';

  //Replace with User/Admin Context in the NEAR future
  const PrivateRoutes = () => {
    const token = localStorage.getItem("UserID");
    
    // Development bypass - automatically set admin user
    if (DEV_BYPASS_LOGIN && !token) {
      localStorage.setItem("UserID", "1"); // Set admin user ID
      return <Outlet />;
    }
    
    return token ? <Outlet /> : <Navigate to="/" />;
  };
  
  return (
    <ErrorBoundary>
      <NotificationProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
          <UserProvider>
            <ClientProvider>
              <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
              <div className="App">
                {DEV_BYPASS_LOGIN && (
                  <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    textAlign: 'center',
                    padding: '5px',
                    zIndex: 9999,
                    fontSize: '12px'
                  }}>
                    🚧 DEVELOPMENT MODE: Login bypassed - You are automatically logged in as admin
                  </div>
                )}
                <Routes>
                  <Route element={<PrivateRoutes />}>
                    <Route
                      path="/home"
                      element={<UserDashboard />}
                    />
                    <Route
                      path="/patient/:patientid/*"
                      element={<ClientDashboard />}
                    ></Route>
                    <Route
                      path="/settings"
                      element={<Settings />}
                    />
                    <Route
                      path="/demo"
                      element={<FeatureDemo />}
                    />
                  </Route>
                  <Route path="*" element={<Landing />} />
                </Routes>
              </div>
            </ClientProvider>
          </UserProvider>
        </BrowserRouter>
      </NotificationProvider>
    </ErrorBoundary>
  );
}

export default App;
