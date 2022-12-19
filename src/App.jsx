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
            <div
              className={
                !loginStatus ? "App landing" : sidebar ? "App active" : "App"
              }
            >
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
                <Route path="client/*" element={<ClientDashboard />} />
                <Route path="settings/" element={<Settings />} />
                {/* <Route path="/" exact element={<ClientView sidebar={sidebar} />} />
          <Route path="/client" exact element={<ClientView sidebar={sidebar} />} />
          <Route path="/notes" element={<CVProgressNotes />} />
          <Route path="/files" element={<FileManager />} /> */}
              </Routes>
            </div>
          </ClientProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
