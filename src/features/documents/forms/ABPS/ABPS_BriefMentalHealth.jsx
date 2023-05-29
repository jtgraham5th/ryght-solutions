import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";

function ABPSBriefMentalHealth({ register, title, field, options }) {
  return (
    <Form.Group as={Row} className="mb-2 align-items-center border-bottom p-2">
      <Col md={3}>
        <Form.Label className="RQ-form-label mb-0">{title}</Form.Label>
      </Col>
      <Col md={9} className="d-flex flex-wrap justify-content-start">
        {options.map((option, index) => (
          <Form.Check
            key={title + index}
            inline
            {...register(field)}
            type="checkbox"
            name={field}
            value={option}
            label={option}
          />
        ))}
      </Col>
    </Form.Group>
  );
}

export default ABPSBriefMentalHealth;
