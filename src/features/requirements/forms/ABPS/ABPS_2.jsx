import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";


function ABPS2({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Client Presentation & Presenting Problem</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="RQ-form-label">
            Location of Assessment
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f1")}
            type="text"
            name="f1"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="RQ-form-label">
            Who was present during the assessment?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f2")}
            type="text"
            name="f2"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <h5>Interview Observations</h5>
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">Apperance</Form.Label>
          <Form.Check
            inline
            {...register("f3")}
            type="checkbox"
            name="f3"
            value="Well Groomed"
            label="Well Groomed"
          />
          <Form.Check
            inline
            {...register("f3")}
            type="checkbox"
            name="f3"
            value="Unkempt"
            label="Unkempt"
          />
          <Form.Check
            inline
            {...register("f3")}
            type="checkbox"
            name="f3"
            value="Disheveled"
            label="Disheveled"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f3")}
            name="f3"
            value="Malodorus"
            label="Malodorus"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">Build</Form.Label>
          <Form.Check
            inline
            {...register("f4")}
            type="checkbox"
            name="f4"
            value="Average"
            label="Average"
          />
          <Form.Check
            inline
            {...register("f4")}
            type="checkbox"
            name="f4"
            value="Thin"
            label="Thin"
          />
          <Form.Check
            inline
            {...register("f4")}
            type="checkbox"
            name="f4"
            value="Overweight"
            label="Overweight"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f4")}
            name="f4"
            value="Obese"
            label="Obese"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">Demeanor</Form.Label>
          <Form.Check
            inline
            {...register("f5")}
            type="checkbox"
            name="f5"
            value="Cooperative"
            label="Cooperative"
          />
          <Form.Check
            inline
            {...register("f5")}
            type="checkbox"
            name="f5"
            value="Hostile"
            label="Hostile"
          />
          <Form.Check
            inline
            {...register("f5")}
            type="checkbox"
            name="f5"
            value="Guarded"
            label="Guarded"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f5")}
            name="f5"
            value="Withdrawn"
            label="Withdrawn"
          />
          <Form.Check
            inline
            {...register("f5")}
            type="checkbox"
            name="f5"
            value="Preoccupied"
            label="Preoccupied"
          />
          <Form.Check
            inline
            {...register("f5")}
            type="checkbox"
            name="f5"
            value="Demanding"
            label="Demanding"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f5")}
            name="f5"
            value="Seductive"
            label="Seductive"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">Eye Contact</Form.Label>
          <Form.Check
            inline
            {...register("f6")}
            type="checkbox"
            name="f6"
            value="Average"
            label="Average"
          />
          <Form.Check
            inline
            {...register("f6")}
            type="checkbox"
            name="f6"
            value="Decreased"
            label="Decreased"
          />
          <Form.Check
            inline
            {...register("f6")}
            type="checkbox"
            name="f6"
            value="Increased"
            label="Increased"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">Speech</Form.Label>
          <Form.Check
            inline
            {...register("f7")}
            type="checkbox"
            name="f7"
            value="Clear"
            label="Clear"
          />
          <Form.Check
            inline
            {...register("f7")}
            type="checkbox"
            name="f7"
            value="Slurred"
            label="Slurred"
          />
          <Form.Check
            inline
            {...register("f7")}
            type="checkbox"
            name="f7"
            value="Rapid"
            label="Rapid"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f7")}
            name="f7"
            value="Slow"
            label="Slow"
          />
          <Form.Check
            inline
            {...register("f7")}
            type="checkbox"
            name="f7"
            value="Pressured"
            label="Pressured"
          />
          <Form.Check
            inline
            {...register("f7")}
            type="checkbox"
            name="f7"
            value="Soft"
            label="Soft"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f7")}
            name="f7"
            value="Loud"
            label="Loud"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f7")}
            name="f7"
            value="Monotone"
            label="Monotone"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">Mental Status:</Form.Label>
          <Form.Text>
            (Describe client’s mood, affect, thought processes, though contact,
            AVH, intelligence, insight, judgment, and orientation)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f60")}
            as="textarea"
            name="f60"
            rows={2}
          />
        </Col>
      </Form.Group>
      <h5>Presenting Problem and Requested Service</h5>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            Origin of problem/when it began:
          </Form.Label>
          <Form.Text>
            Include the onset of the problem, duration, frequency, past
            intervention/services and the results of the services.
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
          <Form.Label className="RQ-form-label">
            Related Issues that exacerbate the problem:
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
            Interventions previously tried:
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
    </>
  );
}

export default ABPS2;
