import { Row, Col, Form} from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

function BSP3({ register, control }) {

  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Risk and Trauma Assessment (Include abuse/neglect)</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <h5>List all that apply</h5>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Suicidality</Form.Label>
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Ideation"
            label="Ideation"
          />
          <Form.Check
            inline
            {...register("f1")}
            type="checkbox"
            name="f1"
            value="Plan"
            label="Plan"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f1")}
            name="f1"
            value="Intent w/o means"
            label="Intent w/o means"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f1")}
            name="f1"
            value="Intent w/ means"
            label="Intent w/ means"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Homicidality</Form.Label>
          <Form.Check
            inline
            {...register("f2")}
            type="checkbox"
            name="f2"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("f2")}
            type="checkbox"
            name="f2"
            value="Ideation"
            label="Ideation"
          />
          <Form.Check
            inline
            {...register("f2")}
            type="checkbox"
            name="f2"
            value="Plan"
            label="Plan"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f2")}
            name="f2"
            value="Intent w/o means"
            label="Intent w/o means"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f2")}
            name="f2"
            value="Intent w/ means"
            label="Intent w/ means"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">
            Impulse Control
          </Form.Label>
          <Form.Check
            inline
            {...register("f3")}
            type="checkbox"
            name="f3"
            value="Sufficient"
            label="Sufficient"
          />
          <Form.Check
            inline
            {...register("f3")}
            type="checkbox"
            name="f3"
            value="Moderate"
            label="Moderate"
          />
          <Form.Check
            inline
            {...register("f3")}
            type="checkbox"
            name="f3"
            value="Minimal"
            label="Minimal"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f3")}
            name="f3"
            value="Inconsistent"
            label="Inconsistent"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f3")}
            name="f3"
            value="Explosive"
            label="Explosive"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">
            Substance Abuse
          </Form.Label>
          <Form.Check
            inline
            {...register("f4")}
            type="checkbox"
            name="f4"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("f4")}
            type="checkbox"
            name="f4"
            value="Abuse"
            label="Abuse"
          />
          <Form.Check
            inline
            {...register("f4")}
            type="checkbox"
            name="f4"
            value="Dependence"
            label="Dependence"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f4")}
            name="f4"
            value="Unstable remission"
            label="Unstable remission"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2 italics">Medical Risks</Form.Label>
          <Form.Check
            inline
            {...register("f5")}
            type="radio"
            name="f5"
            value="None"
            label="None"
          />
          <Form.Label className="RQ-form-label">Yes, Explain</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f5")}
            type="text"
            name="f5"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Neglect</Form.Label>
          <Form.Check
            inline
            {...register("f6")}
            type="checkbox"
            name="f6"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("f6")}
            type="checkbox"
            name="f6"
            value="Nutritional"
            label="Nutritional"
          />
          <Form.Check
            inline
            {...register("f6")}
            type="checkbox"
            name="f6"
            value="Educational"
            label="Educational"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f6")}
            name="f6"
            value="Medical"
            label="Medical"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Abuse</Form.Label>
          <Form.Check
            inline
            {...register("f7")}
            type="checkbox"
            name="f7"
            value="Verbal / Emotional"
            label="Verbal / Emotional"
          />
          <Form.Check
            inline
            {...register("f7")}
            type="checkbox"
            name="f7"
            value="Physical"
            label="Physical"
          />
          <Form.Check
            inline
            {...register("f7")}
            type="checkbox"
            name="f7"
            value="Sexual"
            label="Sexual"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f7")}
            name="f7"
            value="Family Violence"
            label="Family Violence"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Trauma</Form.Label>
          <Form.Check
            inline
            {...register("f8")}
            type="checkbox"
            name="f8"
            value="Deaths"
            label="Deaths"
          />
          <Form.Check
            inline
            {...register("f8")}
            type="checkbox"
            name="f8"
            value="Separation from family"
            label="Separation from family"
          />
          <Form.Check
            inline
            {...register("f8")}
            type="checkbox"
            name="f8"
            value="Abuse"
            label="Abuse"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f8")}
            name="f8"
            value="Violence"
            label="Violence"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f8")}
            name="f8"
            value="Other"
            label="Other"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">
            Risky Behaviors
          </Form.Label>
          <Form.Check
            inline
            {...register("f9")}
            type="checkbox"
            name="f9"
            value="Unprotected Sex"
            label="Unprotected Sex"
          />
          <Form.Check
            inline
            {...register("f9")}
            type="checkbox"
            name="f9"
            value="Shoplifting"
            label="Shoplifting"
          />
          <Form.Check
            inline
            {...register("f9")}
            type="checkbox"
            name="f9"
            value="Reckless Driving"
            label="Reckless Driving"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f9")}
            name="f9"
            value="Gang Involvement"
            label="Gang Involvement"
          />
          <Form.Check
            inline
            {...register("f9")}
            type="checkbox"
            name="f9"
            value="Drug Dealing"
            label="Drug Dealing"
          />
          <Form.Check
            inline
            {...register("f9")}
            type="checkbox"
            name="f9"
            value="Carrying/Using Weapon"
            label="Carrying/Using Weapon"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f9")}
            name="f9"
            value="Prostitution"
            label="Prostitution"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f9")}
            name="f9"
            value="Eating Disorder"
            label="Eating Disorder"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f9")}
            name="f9"
            value="Other"
            label="Other"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            If any of the above were checked, please provide details below.
          </Form.Label>
          <Form.Text>
            Include dates, names of perpetrators, if abuse/risk was reported,
            DFCS/CPS involvement, interventions, and outcome.{" "}
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
    </>
  );
}

export default BSP3;
