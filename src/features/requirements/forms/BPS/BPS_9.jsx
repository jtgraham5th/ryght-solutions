import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

function BSP9({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Education Assessment</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-0">
            School currently attending
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f1")}
            name="f1"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-0">Grade</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f2")}
            name="f2"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            Is the client in special classes? If so, what type?
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
            Has the client ever been suspended or expelled from school and/or
            bus?
          </Form.Label>
          <Form.Text>
            (Include both in-school suspensions and out-of-school suspensions)
          </Form.Text>
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
            Is the client in special classes? If so, what type?
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
            Does the client have frequent absences, truancy?
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
            Does the client need or is receiving tutoring services?
          </Form.Label>
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
            Is the client currently failing, and has the client ever been
            retained?
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
            What does the client like and dislike about school?
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
            Describe client’s peer relationships?
          </Form.Label>
          <Form.Text>
            (Include both the client’s and parent’s descriptions)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f67")}
            as="textarea"
            name="f67"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BSP9;
