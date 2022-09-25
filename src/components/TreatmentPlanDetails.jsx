import { Row, Col, Card, Form, ListGroup, Image, Badge } from "react-bootstrap";
import { useState } from "react";
import ClientIssues from "./ClientIssues";
import "./ClientDemographics.css";

function TreatmentPlanDetails() {
  const [activeTab, setActiveTab] = useState("#PERS_INFO");
  const [clientlist, setClientList] = useState([
    "Avery Allison",
    "Crissy Williams",
    "Samuel Johnson",
  ]);

  return (
    <Card>
      <Card.Header>Treatment Plan Details</Card.Header>
      <Card.Body className="pt-0 pb-0">
        <Row className="demoInfo">
          <Col md={12} className="clientDetails">
            <ListGroup variant="flush">
              <ListGroup.Item className="data-item">
                Program Start Date: <strong>01/01/2000</strong>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                Primary Dx/Date: <strong>01/01/2000</strong>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                Initial Date of Plan: <strong>01/01/2000</strong>
              </ListGroup.Item>
              <ListGroup.Item className="data-item d-flex flex-row p-0 text-center">
                <div style={{borderRight: "1px solid silver", padding: "0.2rem", width: "100%"}}>Time In: <strong>1:00 pm</strong></div><div style={{ padding: "0.2rem", width: "100%"}}> Time Out: <strong>3:00 pm</strong></div>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                <Form.Label>Service Code</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                <Form.Label>Place of Service</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                <Form.Label>Service Units Used</Form.Label>
                <Form.Control type="text" />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default TreatmentPlanDetails;
