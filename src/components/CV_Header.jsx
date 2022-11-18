import { Row, Col, Card } from "react-bootstrap";
import "../pages/ClientView.css";
import CVNav from "./CV_Nav";
import SelectClient from "./SelectClient";
import NewClient from "./NewClient";
import NewBilling from "./NewBilling";
import { useClient } from "../data/ClientContext";
import EditClient from "./EditClient";

function CVHeader({ activeTab, setActiveTab }) {
  const { activeClient } = useClient();

  return (
    <>
      <Card.Header className="text-start">
        <Row className="pb-3">
          <Col className="d-flex flex-row justify-content-between">
            <h2 className="m-0">
              {activeClient.firstname} {activeClient.lastname}
            </h2>
            <div className="CV-header-action-container">
              <SelectClient />
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
