import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

function SA5({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Inital Client Intake</h3>
      </div>
      <hr />
      <h5>Diagnostic Impressions</h5>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Axis I</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisI")}
            as="textarea"
            name="axisI"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Axis II</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisII")}
            as="textarea"
            name="axisII"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Axis III</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisIII")}
            as="textarea"
            name="axisIII"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Axis VI</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisVI")}
            as="textarea"
            name="axisVI"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Axis V</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisV")}
            as="textarea"
            name="axisV"
            rows={2}
          />
        </Col>
      </Form.Group>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Strengths</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("strengths")}
            as="textarea"
            name="strengths"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Needs</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("needs")}
            as="textarea"
            name="needs"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Abilities</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("abilities")}
            as="textarea"
            name="abilities"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label">Preferences</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("preferences")}
            as="textarea"
            name="preferences"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default SA5;
