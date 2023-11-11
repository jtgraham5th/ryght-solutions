import React from "react";
import { Nav } from "react-bootstrap";
import ClientSelectDropdown from "../../../components/ClientSelectDropdown";

function UserDashboardNav({activeKey, setActiveKey}) {

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey)
  }
  
  return (
    <Nav variant="pills" defaultActiveKey="1" className=" justify-content-end w-100" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" title="Item1">
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item2">
          Notes Manager
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Item3">
          Authorizations Manager
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <ClientSelectDropdown />
      </Nav.Item>
    </Nav>
  );
}

export default UserDashboardNav;
