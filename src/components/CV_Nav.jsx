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
          className="nav-link"
          to="overview"
          eventkey="overview"
        >
          <PersonLinesFill /> Personal Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          className="nav-link"
          to="progress-notes"
          eventkey="progress-notes"
        >
          <Telephone /> Progress Notes
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          className="nav-link"
          to="treatment-plan"
          eventkey="treatment-plan"
        >
          <PeopleFill /> Treatment Plan
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="#prog_info" eventkey="#prog_info">
          <FileText />
          Program Information
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="pharmacy" eventkey="pharmacy">
          {" "}
          Pharmacy
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default CVNav;
