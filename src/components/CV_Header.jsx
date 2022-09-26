import { Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import "../pages/ClientView.css";
import CVNav from "./CV_Nav";
import SelectClient from "./SelectClient";
import NewClient from "./NewClient";
import NewBilling from "./NewBilling";

function CVHeader({activeTab, setActiveTab}) {
  const [clientlist, setClientList] = useState([
    "Avery Allison",
    "Crissy Williams",
    "Samuel Johnson",
  ]);

  return (
    <>
      <Card.Header className="text-start">
        <Row className="pb-3">
          <Col className="d-flex flex-row justify-content-between">
            <h2 className="m-0">Jane Doe</h2>
            <div className="CV-header-action-container">
              <SelectClient clients={clientlist} />
              <NewClient />
              <NewBilling />
            </div>
          </Col>
        </Row>
        <CVNav setActiveTab={setActiveTab} activeTab={activeTab} />
      </Card.Header>
    </>
  );
}

export default CVHeader;
