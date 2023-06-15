import { Row, Col, Card } from "react-bootstrap";
import "../ClientView.css";
import {CVNav} from "./CV_Nav";
import { useClient } from "../../../context/ClientContext";
import EditClientBtn from "../../../components/EditClientBtn";
import ClientSelectDropdown from "../../../components/ClientSelectDropdown";

export function CVHeader({ activeTab, setActiveTab }) {
  const { activeClient } = useClient();

  return (
    <>
      <Card.Header className="text-start border-bottom-0">
        <Row className="pb-3">
          <Col className="d-flex flex-row justify-content-between">
            <h2 className="m-0">
              {activeClient.pfirstname} {activeClient.plastname}
            </h2>
            <div className="CV-header-action-container">
              <ClientSelectDropdown />
              <EditClientBtn />
              {/* <NewBillingBtn /> */}
            </div>
          </Col>
        </Row>
        <CVNav setActiveTab={setActiveTab} activeTab={activeTab} />
      </Card.Header>
    </>
  );
}
