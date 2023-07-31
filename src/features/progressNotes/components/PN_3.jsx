import { Row, Col, Form } from "react-bootstrap";
import "./PN_Manager.css";

export function PN3({ register, control }) {
  return (
    <>
      <Form.Group>
        <Form.Label className="PNM-form-label mb-2">
          Consumer's Overall Affect
        </Form.Label>
        <Row>
          <Col md={3}>
            <Form.Check
              {...register("consumerAffect")}
              type="radio"
              name="consumerAffect"
              value="Agitated"
              label="Agitated"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Angry"
              label="Angry"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Anxious"
              label="Anxious"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Calm"
              label="Calm"
            />
          </Col>
          <Col md={3}>
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Defiant"
              label="Defiant"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Energetic"
              label="Energetic"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Flat"
              label="Flat"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Happy"
              label="Happy"
            />
          </Col>
          <Col md={3}>
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Moody"
              label="Moody"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Playful"
              label="Playful"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Sad"
              label="Sad"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Suicidal"
              label="Suicidal"
            />
          </Col>
          <Col md={3}>
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Tired"
              label="Tired"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="Other"
              label="Other"
            />
            <Form.Check
              type="radio"
              {...register("consumerAffect")}
              name="consumerAffect"
              value="N/A"
              label="N/A"
            />
          </Col>
        </Row>
      </Form.Group>
      <hr />
      <Form.Group>
        <Row className="w-100 align-items-center">
          <Col md={8}>
            <Form.Label className="PNM-form-label w-100 mb-2">
              Relevant changes in medical condition and/or medications (health
              and safety stressor) since last visit?
            </Form.Label>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-around"
          >
            <Form.Check
              type="radio"
              {...register("medChanges")}
              name="medChanges"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              type="radio"
              {...register("medChanges")}
              name="medChanges"
              value="No"
              label="No (None Reported)"
            />
          </Col>
        </Row>
        <Form.Text>If yes, please explain:</Form.Text>
        <Form.Control autoComplete="off" as="textarea" {...register("medChangesComments")} name="medChangesComments" rows={3} />
      </Form.Group>
      <hr />
      <Form.Group as={Row}>
        <Col md={6}>
          <Form.Label className="PNM-form-label w-100">
            Consumer met his/her progress goal this session:
          </Form.Label>
          <Form.Select {...register("progressMet")} name="progressMet" aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Label className="PNM-form-label">Comments:</Form.Label>
          <Form.Control autoComplete="off"  {...register("progressComments")} as="textarea" name="progressComments" rows={3} />
        </Col>
      </Form.Group>
    </>
  );
}
