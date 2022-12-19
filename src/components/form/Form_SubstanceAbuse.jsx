import { Row, Col, Form } from "react-bootstrap";
import "./formComponents.css";

function FormSubstanceAbuse({ register, title, subtitle, field }) {
  return (
    <Form.Group as={Row} className="mb-3 align-items-center rounded">
      <Col md={3}>
        <Form.Label className="RQ-form-label mb-0">{title} </Form.Label>
        {subtitle ? <Form.Text>{subtitle}</Form.Text> : ''}
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Control
          {...register(`f${field}`)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Control
          {...register(`f${field + 1}`)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Control
          {...register(`f${field + 2}`)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Control
          {...register(`f${field + 3}`)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
    </Form.Group>
  );
}

export default FormSubstanceAbuse;
