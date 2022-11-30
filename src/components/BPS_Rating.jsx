import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";

function BPSRating({ register, title, severity, duration }) {
  return (
    <Form.Group as={Row} className="mb-3 align-items-center rounded">
      <Col md={2} >
        <Form.Label className="CE-form-label mb-0">{title} </Form.Label>
      </Col>
      <Col md={4} className="d-flex justify-content-center">
        <Form.Check
          inline
          {...register(severity)}
          type="radio"
          name={severity}
          value="Mild"
          label="Mild"
        />

        <Form.Check
          inline
          {...register(severity)}
          type="radio"
          name={severity}
          value="Moderate"
          label="Moderate"
        />

        <Form.Check
          inline
          {...register(severity)}
          type="radio"
          name={severity}
          value="Severe"
          label="Severe"
        />
      </Col>
      <Col md={6} className="d-flex justify-content-center">
        <Form.Check
          inline
          {...register(duration)}
          type="radio"
          name={duration}
          value="Less than 1 month"
          label="Less than 1 month"
        />
        <Form.Check
          inline
          {...register(duration)}
          type="radio"
          name={duration}
          value="1 - 6 months"
          label="1 - 6 months"
        />
        <Form.Check
          inline
          {...register(duration)}
          type="radio"
          name={duration}
          value="7 - 11 months"
          label="7 - 11 months"
        />
        <Form.Check
          inline
          {...register(duration)}
          type="radio"
          name={duration}
          value="More than 1 year"
          label="More than 1 year"
        />
      </Col>
    </Form.Group>
  );
}

export default BPSRating;
