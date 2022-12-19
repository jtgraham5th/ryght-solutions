import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../../../../context/ClientContext";

function ANSA1({ register, control }) {
  const { formData } = useClient();
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>ANSA Georgia</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="RQ-form-label">First Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f1")}
            type="text"
            name="f1"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">Last Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f2")}
            type="text"
            name="f2"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={3}>
          <Form.Label className="RQ-form-label">Date of Birth</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f3")}
            type="text"
            name="f3"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">Gender</Form.Label>
          <Form.Select
            {...register("genderid")}
            name="genderid"
            aria-label="Select Gender"
          >
            <option>Select Gender</option>
            {formData["Gender Identity"].map((item, i) => {
              return (
                <option key={i} value={item.groupvalue}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
        <Form.Label className="RQ-form-label">Reason</Form.Label>
          <Form.Check
            inline
            {...register("f4")}
            type="radio"
            name="f4"
            value="Initial"
            label="Initial"
          />
          <Form.Check
            inline
            {...register("f4")}
            type="radio"
            name="f4"
            value="Reassessment"
            label="Reassessment"
          />
          <Form.Check
            inline
            {...register("f4")}
            type="radio"
            name="f4"
            value="Discharge"
            label="Discharge"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">CID#</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f5")}
            type="text"
            name="f5"
          />
        </Col>

      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="RQ-form-label">Provider</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f6")}
            type="text"
            name="f6"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default ANSA1;
