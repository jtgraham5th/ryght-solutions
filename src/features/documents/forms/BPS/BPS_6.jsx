import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

function BSP6({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Health and Wellness</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            Are there any issues/problems such as (housing, medication, safety,
            school, transportation, health, behaviors, etc.) that would
            interfere with your daily living?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f60")}
            as="textarea"
            name="f60"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What things do you need to do for yourself every day to keep feeling
            alright?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f61")}
            as="textarea"
            name="f61"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What things (triggers) might cause an increase in your symptoms?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f62")}
            as="textarea"
            name="f62"
            rows={2}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What are things that you can do to address your triggers before they
            lead to more serious symptoms?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f63")}
            as="textarea"
            name="f63"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What are some early warning signs that others have reported and/or
            you have observed when you are starting to have problems?{" "}
          </Form.Label>
          <Form.Text>This should include the client’s own words</Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f64")}
            as="textarea"
            name="f64"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What are things you must do if you experience early warning signs?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f65")}
            as="textarea"
            name="f65"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What are signs/symptoms that indicate things are getting worse?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f66")}
            as="textarea"
            name="f66"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What are some things that can help reduce your symptoms when things
            are breaking down?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f67")}
            as="textarea"
            name="f67"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            These are my SUPPORTERS, the people who I want to help me when the
            symptoms I listed above come up:{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f68")}
            as="textarea"
            name="f68"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            The people I do not want involved and why:{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f69")}
            as="textarea"
            name="f69"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What is your religious preference:{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f70")}
            as="textarea"
            name="f70"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BSP6;
