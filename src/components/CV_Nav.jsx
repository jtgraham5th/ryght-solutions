import { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  PersonLinesFill,
  Telephone,
  PeopleFill,
  FileText,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styles from "./ClientDetails.module.scss";

function CVNav() {
  const setTab = (e) => {
    console.log(e);
    setActiveTab(e);
  };
  const [activeTab, setActiveTab] = useState("#overview");
  return (
    <Nav
      className={styles.cdNavTabs}
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
          to="overview"
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
          href="#prog_info"
          className="nav-link"
          to="#prog_info"
          eventkey="#prog_info"
        >
          <FileText />
          Program Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="#pharmacy"
          className="nav-link"
          to="pharmacy"
          eventkey="pharmacy"
        >
          Pharmacy
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default CVNav;
