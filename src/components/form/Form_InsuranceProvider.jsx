import { Row, Col, Form } from "react-bootstrap";
import "./formComponents.css";

export function FormInsuranceProvider({ register }) {
  return (
<>      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Carrier Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("carrierName")}
            type="text"
            name="firstName"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("phoneNumber")}
            type="number"
            name="phoneNumber"
          />
        </Col>

      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("address")}
            type="text"
            name="address"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("city")}
            type="text"
            name="city"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
          <Form.Select
            {...register("state")}
            name="state"
            aria-label="Select State"
          >
            <option>Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Zip Code</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("zipCode")}
            type="number"
            name="zipCode"
          />
        </Col>
      </Form.Group>
    </>
  );
}
