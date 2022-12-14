import { Nav } from "react-bootstrap";
import {
  PersonLinesFill,
  Telephone,
  PeopleFill,
  FileText,
} from "react-bootstrap-icons";
import styles from "../ClientDetails.module.scss";

export function CDNav({activeTab, setActiveTab}) {
  return (
    <Nav
      className={styles.cdNavTabs}
      fill
      variant="tabs"
      activeKey={activeTab}
      onSelect={(e) => setActiveTab(e)}
    >
      <Nav.Item>
        <Nav.Link href="#PERS_INFO">
          <PersonLinesFill /> Personal Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#CONT_INFO">
          <Telephone /> Contact Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#PAGU_INFO">
          <PeopleFill /> Parent/Guardian Information{" "}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#PROG_INFO">
          <FileText />
          Program Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#PHARM_INFO"> Pharmacy Information</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}