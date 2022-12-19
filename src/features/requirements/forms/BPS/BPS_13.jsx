import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

function BSP13({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Interpretive Summary</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-3">
            Please write a statement that integrates all assessments: describes
            central themes; reason/s the individual is seeking services;
            individual’s acceptance or understanding of his/her problems/needs
            and strategies for relapse prevention; individual’s apparent
            strengths and functional limitations; description of potential
            barriers to community inclusion/integration and successful
            attainment of goals and movement towards recovery; complicating
            conditions/disorders, including a discussion of substance abuse
            patterns and serious medical conditions; explanation of choice goals
            to be worked on; description of risk versus choice issues. The
            summary should begin with a brief description of the individual{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f60")}
            as="textarea"
            name="f60"
            rows={4}
          />
        </Col>
      </Form.Group>
    </>
  );
}
export default BSP13;
