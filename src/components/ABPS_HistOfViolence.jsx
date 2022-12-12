import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";

function ABPSHistOfViolence({ register, title, field1 }) {
  return (
    <Form.Group as={Row} className="mb-2 align-items-center rounded">
      <Col md={3}>
        <Form.Label className="CE-form-label mb-0">{title} </Form.Label>
      </Col>
      <Col md={9} className="d-flex justify-content-center">
        <Form.Check
          inline
          {...register(field1)}
          type="checkbox"
          name={field1}
          value="Victim"
          label="Victim"
        />

        <Form.Check
          inline
          {...register(field1)}
          type="checkbox"
          name={field1}
          value="Prepetrator"
          label="Prepetrator"
        />
        <Form.Check
          inline
          {...register(field1)}
          type="checkbox"
          name={field1}
          value="Direct Exposure"
          label="Direct Exposure"
        />
        <Form.Check
          inline
          {...register(field1)}
          type="checkbox"
          name={field1}
          value="Indirect Exposure"
          label="Indirect Exposure"
        />
        <Form.Check
          inline
          {...register(field1)}
          type="checkbox"
          name={field1}
          value="Current"
          label="Current"
        />
      </Col>
    </Form.Group>
  );
}

export default ABPSHistOfViolence;
