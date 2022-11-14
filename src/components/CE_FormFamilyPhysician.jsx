import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";

function CEFormFamilyPhysician({ register }) {
  return (
<>      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Physician Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("physicianName")}
            type="text"
            name="physicianName"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Office Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("officeNumber")}
            type="number"
            name="officeNumber"
          />

        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Fax Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("faxNumber")}
            type="number"
            name="faxNumber"
          />

        </Col>
        </Form.Group>
    </>
  );
}

export default CEFormFamilyPhysician;
