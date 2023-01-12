import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ClientDashboard from "./pages/ClientDashboard";
import UserDashboard from "./pages/UserDashboard";
import Settings from "./pages/Settings";
import { Login } from "./features/authentication";
import { ClientProvider } from "./context/ClientContext";
import { UserProvider } from "./context/UserContext";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  //Replace with User/Admin Context in the NEAR future

  return (
    <>
      <Router>
        <UserProvider>
          <ClientProvider>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <div className="App">
              <Routes>
                <Route
                  path="/*"
                  element={
                    loginStatus ? (
                      <UserDashboard />
                    ) : (
                      <Login setStatus={setLoginStatus} />
                    )
                  }
                />
                <Route
                  path="patient/:patientid/*"
                  element={<ClientDashboard />}
                ></Route>
                <Route path="settings/" element={<Settings />} />
              </Routes>
            </div>
          </ClientProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
