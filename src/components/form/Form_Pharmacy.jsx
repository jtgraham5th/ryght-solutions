import { Row, Col, Form } from "react-bootstrap";
import "./formComponents.css";

export function FormPharmacy({ state, setState }) {

  const handleChange =(e) => {
    const name = e.target.name
    const value = e.target.value
    setState((prevState) => ({...prevState, [name]: value}))
  }
  
  return (
<>      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Pharmacy Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            onChange={(e) => handleChange(e)}
            type="text"
            name="name"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            onChange={(e) => handleChange(e)}
            type="number"
            name="phone1"
          />

        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Fax Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            onChange={(e) => handleChange(e)}
            type="number"
            name="phone2"
          />

        </Col>
        </Form.Group>
    </>
  );
}
