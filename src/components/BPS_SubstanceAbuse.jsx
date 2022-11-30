import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";

function BPSSubstanceAbuse({ register, title, subtitle }) {
  return (
    <Form.Group as={Row} className="mb-3 align-items-center rounded">
      <Col md={3}>
        <Form.Label className="CE-form-label mb-0">{title} </Form.Label>
        {subtitle ? <Form.Text>{subtitle}</Form.Text> : ''}
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Control
          {...register(title)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Control
          {...register(title)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Control
          {...register(title)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
      <Col md={2} className="d-flex justify-content-center">
        <Form.Control
          {...register(title)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
    </Form.Group>
  );
}

export default BPSSubstanceAbuse;
