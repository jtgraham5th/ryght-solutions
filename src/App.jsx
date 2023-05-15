import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
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
import { useUser } from "./context/UserContext";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  //Replace with User/Admin Context in the NEAR future
  const PrivateRoutes = () => {
    const token = localStorage.getItem("UserID");
    return token ? <Outlet /> : <Navigate to="ryght-solutions/" />;
  };
  return (
    <>
      <Router>
        <UserProvider>
          <ClientProvider>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <div className="App">
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route
                    path="ryght-solutions/home/"
                    element={<UserDashboard />}
                  />
                  <Route
                    path="ryght-solutions/patient/:patientid/*"
                    element={<ClientDashboard />}
                  ></Route>
                  <Route
                    path="ryght-solutions/settings/"
                    element={<Settings />}
                  />
                </Route>
                <Route
                  path="ryght-solutions/*"
                  element={<Landing setStatus={setLoginStatus} />}
                />
              </Routes>
            </div>
          </ClientProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
