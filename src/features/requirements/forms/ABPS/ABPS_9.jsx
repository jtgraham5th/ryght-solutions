import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

import ABPSHistOfViolence from "./ABPS_HistOfViolence";

function ABSP9({ register, control }) {
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
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            Describe client’s relationship with biological parents.{" "}
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
            Describe client’s relationship with siblings.
          </Form.Label>{" "}
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
            How would you describe yourself as a child growing up in your
            family? (Popular, aggressive, awkward, etc….)
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
            Did you experience problems during your childhood? (Conflict with
            parents, siblings, teachers, overweight, etc….)
          </Form.Label>{" "}
          <Form.Control
            className="goal-detail-input"
            {...register("f64")}
            as="textarea"
            name="f64"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <h5>Marital History</h5>
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">Apperance</Form.Label>
          <Form.Check
            inline
            {...register("f22")}
            type="checkbox"
            name="f22"
            value="Married"
            label="Married"
          />
          <Form.Check
            inline
            {...register("f22")}
            type="checkbox"
            name="f22"
            value="Single"
            label="Single"
          />
          <Form.Check
            inline
            {...register("f22")}
            type="checkbox"
            name="f22"
            value="Co-Habitation"
            label="Co-Habitation"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f22")}
            name="f22"
            value="Separated"
            label="Separated"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f22")}
            name="f22"
            value="Widowed"
            label="Widowed"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-2">
            Number of Previous Marriages
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f23")}
            type="text"
            name="f23"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-2">
            Length of Time with current partner:
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f24")}
            type="text"
            name="f24"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">
            How would you describe your relationship with your current partner?
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
          <Form.Label className="RQ-form-label mb-2">
            Is there violence of history of violence in past or current
            relationships?
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
      <ABPSHistOfViolence
        register={register}
        title="Physical Abuse"
        field1="f23"
      />
      <ABPSHistOfViolence
        register={register}
        title="Domestic Violence"
        field1="f24"
      />
      <ABPSHistOfViolence
        register={register}
        title="Community Violence"
        field1="f25"
      />
      <ABPSHistOfViolence
        register={register}
        title="Physical Neglect"
        field1="f26"
      />
      <ABPSHistOfViolence
        register={register}
        title="Emotional Abuse"
        field1="f27"
      />
      <ABPSHistOfViolence
        register={register}
        title="Elder Abuse"
        field1="f28"
      />
      <ABPSHistOfViolence
        register={register}
        title="Sexual Abuse"
        field1="f29"
      />
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">Comments</Form.Label>
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

export default ABSP9;
