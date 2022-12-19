import { Row, Col, Form } from "react-bootstrap";
import "./formComponents.css";

export function FormFamilyPhysician({ register }) {
  return (
<>      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Physician Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("name")}
            type="text"
            name="name"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Office Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("phone1")}
            type="number"
            name="phone1"
          />

        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Fax Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("phone2")}
            type="number"
            name="phone2"
          />

        </Col>
        </Form.Group>
    </>
  );
}
