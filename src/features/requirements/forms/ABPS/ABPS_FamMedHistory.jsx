import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";

function ABPSFamMedHistory({ register, title, field1, field2 }) {
  return (
    <Form.Group as={Row} className="mb-2 align-items-center rounded">
      <Col md={2}>
        <Form.Label className="RQ-form-label mb-0">{title} </Form.Label>
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Check
          inline
          {...register(field1)}
          type="radio"
          name={field1}
          value="Yes"
          label="Yes"
        />

        <Form.Check
          inline
          {...register(field1)}
          type="radio"
          name={field1}
          value="No"
          label="No"
        />
      </Col>
      <Col md={8} className="d-flex justify-content-center">
        <Form.Control
          {...register(`${field2}.serverity`)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
    </Form.Group>
  );
}

export default ABPSFamMedHistory;
