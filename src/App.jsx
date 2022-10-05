import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import ClientDashboard from "./pages/ClientDashboard";
import UserDashboard from "./pages/UserDashboard";
import Login from "./components/Login";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  //Replace with User/Admin Context in the NEAR future

  return (
    <>
      <Router>
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
            {/* <Route path="/*" element={} /> */}
            {/* <Route path="/" exact element={<ClientView sidebar={sidebar} />} />
          <Route path="/client" exact element={<ClientView sidebar={sidebar} />} />
          <Route path="/notes" element={<CVProgressNotes />} />
          <Route path="/files" element={<FileManager />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
