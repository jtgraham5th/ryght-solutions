import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

import FormRating from "../../../../components/form/Form_Rating";

function BSP7({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
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
      <FormRating register={register} title="Anxiety" field={1} />
      <FormRating register={register} title="Appetite Problems" field={3} />
      <FormRating register={register} title="Bizarre Behaviors" field={5} />
      <FormRating
        register={register}
        title="Bizarre Ideations (Delusions)"
        field={7}
      />
      <FormRating register={register} title="Conduct Problems" field={9} />
      <FormRating register={register} title="Depression" field={11} />
      <FormRating register={register} title="Eating Disorder" field={13} />
      <FormRating register={register} title="Gender Issues" field={15} />
      <FormRating register={register} title="Imparied Memory" field={17} />
      <FormRating
        register={register}
        title="Indep. Living Problems"
        field={19}
      />
      <FormRating
        register={register}
        title="Lack of Support System"
        field={21}
      />
      <FormRating register={register} title="Loss of Energy" field={23} />
      <FormRating register={register} title="Loss of Interest" field={25} />
      <FormRating register={register} title="Obesessive/Compulsive" field={27} />
      <FormRating register={register} title="Panic Attacks" field={29} />
      <FormRating register={register} title="Paranoid Ideation" field={31} />
      <FormRating register={register} title="Phobia" field={33} />
      <FormRating
        register={register}
        title="Poor Interpersonal Skills"
        field={35}
      />
      <FormRating register={register} title="Poor Judgement" field={37} />
      <FormRating register={register} title="Poor Self Care Skills" field={39} />
      <FormRating register={register} title="School Problems" field={41} />
      <FormRating register={register} title="Sexual Acting Out" field={43} />
      <FormRating register={register} title="Sleep Problems" field={45} />
      <FormRating register={register} title="Somatization" field={47} />
      <FormRating
        register={register}
        title="Unusual Body Movements"
        field={49}
      />
      <FormRating register={register} title="Other" field={51} />
      <FormRating register={register} title="Other" field={53} />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
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
          <Form.Label className="RQ-form-label mb-0">
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
