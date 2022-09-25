import { Nav } from "react-bootstrap";
import {
  PersonLinesFill,
  Telephone,
  PeopleFill,
  FileText,
  Incognito,
  WindowFullscreen,
} from "react-bootstrap-icons";
import styles from "./ClientDetails.module.scss";

function CVNav({ activeTab, setActiveTab }) {
  return (
    <Nav
      className={styles.cdNavTabs}
      fill
      variant="tabs"
      activeKey={activeTab}
      onSelect={(e) => setActiveTab(e)}
    >
      <Nav.Item>
        <Nav.Link href="#info">
          <PersonLinesFill /> Personal Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#progress_notes">
          <Telephone /> Progress Notes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#treatment">
          <PeopleFill /> Treatment Plan
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#prog_info">
          <FileText />
          Program Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#pharmacy"> Pharmacy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#pccp">
          <Incognito />
          PCCP
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default CVNav;
