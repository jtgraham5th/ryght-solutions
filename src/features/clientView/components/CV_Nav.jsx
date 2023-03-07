import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useClient } from "../../../context/ClientContext";

import {
  PersonLinesFill,
  Telephone,
  PeopleFill,
  FileText,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../ClientView.css";

export function CVNav() {
  // const {id} = useParams(  )
  const setTab = (e) => {
    setActiveTab(e);
  };
  const { activeClient } = useClient();
  const [activeTab, setActiveTab] = useState("#overview");
  useEffect(() => {
    setActiveTab("#overview");
  }, [activeClient]);
  return (
    <Nav
      className="CV-nav-tabs"
      fill
      variant="tabs"
      activeKey={activeTab}
      onSelect={(e) => setTab(e)}
    >
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="#overview"
          className="nav-link"
          to=""
          eventkey="overview"
        >
          <PersonLinesFill /> Personal Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="#progress_notes"
          className="nav-link"
          to="progress-notes"
          eventkey="progress-notes"
        >
          <Telephone /> Progress Notes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="#treatment"
          className="nav-link"
          to="treatment-plan"
          eventkey="treatment-plan"
        >
          <PeopleFill /> Treatment Plan
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="#documents"
          className="nav-link"
          to="documents"
          eventkey="documents"
        >
          <FileText />
          Documents
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="#authorizations"
          className="nav-link"
          to="authorizations"
          eventkey="authorizations"
        >
          Authorizations
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
