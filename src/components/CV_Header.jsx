import { Row, Col, Card } from "react-bootstrap";
import "../pages/ClientView.css";
import CVNav from "./CV_Nav";
import SelectClient from "./SelectClient";
import NewClient from "./NewClient";
import NewBilling from "./NewBilling";
import { useClient } from "../data/ClientContext";
import EditClient from "./EditClient";
import ClientSelectDropdown from "./ClientSelectDropdown";

function CVHeader({ activeTab, setActiveTab }) {
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
              <EditClient />
              {/* <NewBilling /> */}
            </div>
          </Col>
        </Row>
        <CVNav setActiveTab={setActiveTab} activeTab={activeTab} />
      </Card.Header>
    </>
  );
}

export default CVHeader;
