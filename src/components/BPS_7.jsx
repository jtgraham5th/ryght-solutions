import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import BPSRating from "./BPS_Rating";

function BSP7({ register, control }) {
  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Behavior and Mental Health Assessment</h3>
      </div>
      <hr />
      <Row className="mb-3">
        <Form.Text>Please complete the below checklist for symptoms:</Form.Text>
        <Col md={2} className="fs-5"></Col>
        <Col md={4} className="text-center fs-5 bold">
          Severity
        </Col>
        <Col md={6} className="text-center fs-5">
          Duration
        </Col>
      </Row>
      <BPSRating register={register} title="Anxiety" field={1} />
      <BPSRating register={register} title="Appetite Problems" field={3} />
      <BPSRating register={register} title="Bizarre Behaviors" field={5} />
      <BPSRating
        register={register}
        title="Bizarre Ideations (Delusions)"
        field={7}
      />
      <BPSRating register={register} title="Conduct Problems" field={9} />
      <BPSRating register={register} title="Depression" field={11} />
      <BPSRating register={register} title="Eating Disorder" field={13} />
      <BPSRating register={register} title="Gender Issues" field={15} />
      <BPSRating register={register} title="Imparied Memory" field={17} />
      <BPSRating
        register={register}
        title="Indep. Living Problems"
        field={19}
      />
      <BPSRating
        register={register}
        title="Lack of Support System"
        field={21}
      />
      <BPSRating register={register} title="Loss of Energy" field={23} />
      <BPSRating register={register} title="Loss of Interest" field={25} />
      <BPSRating register={register} title="Obesessive/Compulsive" field={27} />
      <BPSRating register={register} title="Panic Attacks" field={29} />
      <BPSRating register={register} title="Paranoid Ideation" field={31} />
      <BPSRating register={register} title="Phobia" field={33} />
      <BPSRating
        register={register}
        title="Poor Interpersonal Skills"
        field={35}
      />
      <BPSRating register={register} title="Poor Judgement" field={37} />
      <BPSRating register={register} title="Poor Self Care Skills" field={39} />
      <BPSRating register={register} title="School Problems" field={41} />
      <BPSRating register={register} title="Sexual Acting Out" field={43} />
      <BPSRating register={register} title="Sleep Problems" field={45} />
      <BPSRating register={register} title="Somatization" field={47} />
      <BPSRating
        register={register}
        title="Unusual Body Movements"
        field={49}
      />
      <BPSRating register={register} title="Other" field={51} />
      <BPSRating register={register} title="Other" field={53} />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            If any of the above were checked, please provide details below.
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
          <Form.Label className="CE-form-label mb-0">
            Has client ever been diagnosed with a mental health problem?
          </Form.Label>
          <Form.Text>
            Include specific diagnosis, when problem was diagnosed,
            interventions
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
    </>
  );
}

export default BSP7;
