import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";

function ANSARating({ register, title, field, na }) {
  return (
    <Form.Group as={Row} className="mb-3 align-items-center rounded">
      <Col md={4}>
        <Form.Label className="CE-form-label mb-0">{title} </Form.Label>
      </Col>
      <Col md={8} className="d-flex justify-content-center">
        <Form.Check
          inline
          {...register(`f${field}`)}
          type="radio"
          name={`f${field}`}
          value="No Evidence"
          label="NA"
        />
        <Form.Check
          inline
          {...register(`f${field}`)}
          type="radio"
          name={`f${field}`}
          value="No Evidence"
          label="0"
        />
        <Form.Check
          inline
          {...register(`f${field}`)}
          type="radio"
          name={`f${field}`}
          value="Need for watching"
          label="1"
        />

        <Form.Check
          inline
          {...register(`f${field}`)}
          type="radio"
          name={`f${field}`}
          value="A need for action"
          label="2"
        />
        <Form.Check
          inline
          {...register(`f${field}`)}
          type="radio"
          name={`f${field}`}
          value="a need for
          immediate/intensive action"
          label="3"
        />
      </Col>
    </Form.Group>
  );
}

export default ANSARating;
