import { Row, Col, Form } from "react-bootstrap";
import "./formComponents.css";

function FormRating({ register, title, field }) {
  return (
    <Form.Group as={Row} className="mb-3 align-items-center rounded">
      <Col md={2} >
        <Form.Label className="RQ-form-label mb-0">{title} </Form.Label>
      </Col>
      <Col md={4} className="d-flex justify-content-center">
        <Form.Check
          inline
          {...register(`f${field}`)}
          type="radio"
          name={`f${field}`}
          value="Mild"
          label="Mild"
        />

        <Form.Check
          inline
          {...register(`f${field}`)}
          type="radio"
          name={`f${field}`}
          value="Moderate"
          label="Moderate"
        />

        <Form.Check
          inline
          {...register(`f${field}`)}
          type="radio"
          name={`f${field}`}
          value="Severe"
          label="Severe"
        />
      </Col>
      <Col md={6} className="d-flex justify-content-center">
        <Form.Check
          inline
          {...register(`${field + 1}`)}
          type="radio"
          name={`${field + 1}`}
          value="Less than 1 month"
          label="Less than 1 month"
        />
        <Form.Check
          inline
          {...register(`${field + 1}`)}
          type="radio"
          name={`${field + 1}`}
          value="1 - 6 months"
          label="1 - 6 months"
        />
        <Form.Check
          inline
          {...register(`${field + 1}`)}
          type="radio"
          name={`${field + 1}`}
          value="7 - 11 months"
          label="7 - 11 months"
        />
        <Form.Check
          inline
          {...register(`${field + 1}`)}
          type="radio"
          name={`${field + 1}`}
          value="More than 1 year"
          label="More than 1 year"
        />
      </Col>
    </Form.Group>
  );
}

export default FormRating;
