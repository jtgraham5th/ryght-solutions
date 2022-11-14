import { Col, Alert } from "react-bootstrap";
import { personalDataOptions } from "../data/formData";

function ClientIssues() {
  return (
    <Col md={12} className="data-issues">
      {personalDataOptions.map((type) => (
        <Alert
          key={`default-${type}`}
          variant="danger"
          className="text-start fs-6"
        >
          {type}
        </Alert>
      ))}
    </Col>
  );
}

export default ClientIssues;
