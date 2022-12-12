import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";

function ABSP10({ register, control }) {
  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Demographic Information</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-4">
        <h5>Sexuality</h5>
        <Col md={12} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">
            How would you describe your sexual preference?{" "}
          </Form.Label>
          <Form.Text>(Heterosexual, Homosexual, Bi-Sexual)</Form.Text>
          <Form.Control
            {...register("f1")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <h5>Educational Assessment</h5>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            School attended
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f2")}
            name="f2"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            Grade Completed
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f3")}
            name="f3"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            How would you rate your performance in school (did you experience
            any problems in school, etc fighting?
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
      <Form.Group as={Row} className="mb-4">
        <h5>Occupation</h5>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            Current Employment
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f4")}
            name="f4"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">How Long</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f5")}
            name="f5"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            Have you experienced problems finding employment: (please explain)
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
      <Form.Group as={Row} className="mb-4">
        <h5>Military History</h5>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            Have you ever served?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f6")}
            name="f6"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            If yes, What branch?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f7")}
            name="f7"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            Years in Service?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f8")}
            name="f8"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">Discharge Type</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f9")}
            name="f9"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            Were you in combat? (do you experience any flashbacks, uncontrolled
            anger outbursts, etc…)
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
      <Form.Group as={Row} className="mb-2 align-items-center rounded">
        <h5>Ethnic/Cultural Orientation</h5>
        <Col md={3}>
          <Form.Label className="CE-form-label mb-0">
            What type of community were you raised in?
          </Form.Label>
        </Col>
        <Col md={9} className="d-flex justify-content-center">
          <Form.Check
            inline
            {...register("f10")}
            type="radio"
            name="f10"
            value="Large City"
            label="Large City"
          />

          <Form.Check
            inline
            {...register("f10")}
            type="radio"
            name="f10"
            value="Medium Size City"
            label="Medium Size City"
          />
          <Form.Check
            inline
            {...register("f10")}
            type="radio"
            name="f10"
            value="Large Town"
            label="Large Town"
          />
          <Form.Check
            inline
            {...register("f10")}
            type="radio"
            name="f10"
            value="Small Town"
            label="Small Town"
          />
          <Form.Check
            inline
            {...register("f10")}
            type="radio"
            name="f10"
            value="Rural"
            label="Rural"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What cultural practices linked to your racial/ethnic background is
            important to you?
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
          <Form.Label className="CE-form-label mb-0">
            What are your hobbies or leisure preferences:
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
          <Form.Label className="CE-form-label mb-0">
            What are your spiritual preferences:
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
    </>
  );
}

export default ABSP10;
