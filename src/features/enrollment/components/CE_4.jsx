import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { GearWideConnected } from "react-bootstrap-icons";

export function CE4({ register }) {
  return (
    <>
      <div className="CE-section-title">
        <GearWideConnected size={30} className="me-3" />
        <h3>Settings</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-4">
        <h5>Settings</h5>
        <Col md={6}>
          <Form.Label className="CE-form-label">Assigned Location</Form.Label>
          <Form.Select
            {...register("assignedLocation")}
            name="assignedLocation"
            aria-label="Select Location"
          >
            <option>Select Location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={5}>
          <Form.Check
            {...register("addToCaseload")}
            type="switch"
            inline
            name="addToCaseload"
            label="Add this to my client caseload"
          />
        </Col>
        <Col md={5}>
          <Form.Check
            {...register("goToProfile")}
            type="switch"
            inline
            name="goToProfile"
            label="Go to profile after adding"
          />
        </Col>
      </Form.Group>
    </>
  );
}
