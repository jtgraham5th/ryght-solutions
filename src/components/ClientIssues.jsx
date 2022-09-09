import { Row, Col, Card, ListGroup, Form, Alert } from "react-bootstrap";
import { personalDataOptions } from "../data/formData";

function ClientIssues() {
  return (
    <Col md={12} className="data-issues">
      {personalDataOptions.map((type) => (
        <Alert
          key={`default-${type}`}
          variant="danger"
          className="text-start data-item"
        >
          {type}
        </Alert>
      ))}
    </Col>
  );
}

export default ClientIssues;
