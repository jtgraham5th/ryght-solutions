import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import FileManager from "./components/FileManger";
import Notes from "./components/Notes";
import ClientView from "./pages/ClientView";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Router>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        <Routes>
          <Route path="/" exact element={<Dashboard sidebar={sidebar} />} />
          <Route path="/client" exact element={<ClientView sidebar={sidebar} />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/files" element={<FileManager />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
