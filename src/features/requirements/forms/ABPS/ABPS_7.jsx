import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

import FormRating from "../../../../components/form/Form_Rating";

function ABSP7({ register, control }) {
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
      <FormRating register={register} title="Anxiety" name="f1" />
      <FormRating register={register} title="Appetite Problems" name="f2" />
      <FormRating register={register} title="Bizarre Behaviors" name="f3" />
      <FormRating
        register={register}
        title="Bizarre Ideations (Delusions)"
        name="f4"
      />
      <FormRating register={register} title="Conduct Problems" name="f5" />
      <FormRating register={register} title="Depression" name="f6" />
      <FormRating register={register} title="Eating Disorder" name="f7" />
      <FormRating register={register} title="Gender Issues" name="f8" />
      <FormRating register={register} title="Imparied Memory" name="f9" />
      <FormRating
        register={register}
        title="Indep. Living Problems"
        name="f10"
      />
      <FormRating
        register={register}
        title="Lack of Support System"
        name="f11"
      />
      <FormRating register={register} title="Loss of Energy" name="f12" />
      <FormRating register={register} title="Loss of Interest" name="f13" />
      <FormRating register={register} title="Obesessive/Compulsive" name="f14" />
      <FormRating register={register} title="Panic Attacks" name="f15" />
      <FormRating register={register} title="Paranoid Ideation" name="f16" />
      <FormRating register={register} title="Phobia" name="f17" />
      <FormRating
        register={register}
        title="Poor Interpersonal Skills"
        name="f18"
      />
      <FormRating register={register} title="Poor Judgement" name="f19" />
      <FormRating register={register} title="Poor Self Care Skills" name="f20" />
      <FormRating register={register} title="School Problems" name="f21" />
      <FormRating register={register} title="Sexual Acting Out" name="f22" />
      <FormRating register={register} title="Sleep Problems" name="f23" />
      <FormRating register={register} title="Somatization" name="f24" />
      <FormRating
        register={register}
        title="Unusual Body Movements"
        name="f25"
      />
      <FormRating register={register} title="Other" name="f26" />
      <FormRating register={register} title="Other" name="f27" />
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

export default ABSP7;
