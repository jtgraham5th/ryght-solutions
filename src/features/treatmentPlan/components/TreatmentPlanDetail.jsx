import { Row, Col, Card, Form, ListGroup } from "react-bootstrap";
import "../TreatmentPlan.css";

export function TreatmentPlanDetail() {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Treatment Plan Details</Card.Title>
        <Row className="pb-3">
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item className="data-item">
                Program Start Date: <strong>01/01/2000</strong>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                Primary Dx/Date: <strong>01/01/2000</strong>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                Initial Date of Plan: <strong>01/01/2000</strong>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item className="data-item">
                Time In: <strong>1:00 pm</strong>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                Time Out: <strong>3:00 pm</strong>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item className="data-item">
              <Form.Label>Place of Service</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </ListGroup.Item>
          </Col>
          <Col md={3}>
            <ListGroup.Item className="data-item">
              <Form.Label>Service Code</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </ListGroup.Item>
          </Col>
          <Col md={3}>
            <ListGroup.Item className="data-item">
              <Form.Label>Service Units Used</Form.Label>
              <Form.Control type="text" />
            </ListGroup.Item>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
