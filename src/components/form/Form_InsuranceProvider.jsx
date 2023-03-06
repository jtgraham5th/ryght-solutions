import { Row, Col, Form } from "react-bootstrap";
import "./formComponents.css";

export function FormInsuranceProvider({ state, setState }) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Carrier Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            onChange={(e) => handleChange(e)}
            type="text"
            name="carrierName"
          />
        </Col>
      </Form.Group>
    </>
  );
}
