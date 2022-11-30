import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";

function BPSDiagnosticCodes({ register, title}) {
  return (
    <Form.Group as={Row} className="mb-3 align-items-center rounded">
      <Col md={1} >
        <Form.Label className="d-flex justify-content-end mb-0">{title} </Form.Label>
      </Col>
      <Col md={5} className="d-flex justify-content-center">
        <Form.Control
          {...register(title)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
      <Col md={5} className="d-flex justify-content-center">
        <Form.Control
          {...register(title)}
          className="mb-2"
          aria-label="Text input with radio button"
        />
      </Col>
    </Form.Group>
  );
}

export default BPSDiagnosticCodes;
