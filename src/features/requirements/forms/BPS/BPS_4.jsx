import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

function BSP4({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Family Assessment</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-4">
        <h5>Household Composition</h5>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Name</Form.Label>
          <Form.Control
            {...register("f1")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f2")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f3")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f4")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f5")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">
            Relationship to Client
          </Form.Label>
          <Form.Control
            {...register("f6")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f7")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f8")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f9")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f10")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Date of Birth</Form.Label>
          <Form.Control
            {...register("f11")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f12")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f13")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f14")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f15")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Age</Form.Label>
          <Form.Control
            {...register("f16")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f17")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f18")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f19")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f20")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <h5>Living Situation</h5>
          <Form.Check
            inline
            {...register("f21")}
            type="checkbox"
            name="f21"
            value="House w/family of origin "
            label="House w/family of origin "
          />
          <Form.Check
            inline
            {...register("f21")}
            type="checkbox"
            name="f21"
            value="Independent Living"
            label="Independent Living"
          />
          <Form.Check
            inline
            {...register("f21")}
            type="checkbox"
            name="f21"
            value="Group Home/Foster Home"
            label="Group Home/Foster Home"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f21")}
            name="f21"
            value="Homeless"
            label="Homeless"
          />
          <Form.Check
            inline
            {...register("f21")}
            type="checkbox"
            name="f21"
            value="Adequate Housing"
            label="Adequate Housing"
          />
          <Form.Check
            inline
            {...register("f21")}
            type="checkbox"
            name="f21"
            value="Safety Risks/Hazardous"
            label="Safety Risks/Hazardous"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f21")}
            name="f21"
            value="Overcrowded"
            label="Overcrowded"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f21")}
            name="f21"
            value="Risk of Homelessness"
            label="Risk of Homelessness"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What is the family’s source(s) of income? Is income monthly,
            bi-weekly? Is income sufficient for household expenses?{" "}
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
      <Form.Group as={Row} className="mb-2">
        <h5>Family History</h5>
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            Medical Problems
          </Form.Label>
          <Form.Text>
            Heart Disease, Lung Disease, Cancer, Strokes, Dementia, Diabetes,
            Asthma, etc
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
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            Substance Abuse
          </Form.Label>
          <Form.Text>
            Alcohol, Cocaine, Cannabis, Stimulants, Inhalants, Hallucinogens,
            Sedatives, Designer Drugs
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f62")}
            as="textarea"
            name="f62"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            Mental Illnesses/Bx Problems
          </Form.Label>
          <Form.Text>
            depression, schizophrenia, bipolar disorder, anxiety, ADD, ADHD,
            Learning Disorders, School Behavior Problems, Incarcerations,
            Gambling
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f63")}
            as="textarea"
            name="f63"
            rows={2}
          />
        </Col>
      </Form.Group>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            Describe client’s relationship with biological parents.{" "}
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
            Describe client’s relationship with siblings.
          </Form.Label>{" "}
          <Form.Control
            className="goal-detail-input"
            {...register("f65")}
            as="textarea"
            name="f65"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BSP4;
