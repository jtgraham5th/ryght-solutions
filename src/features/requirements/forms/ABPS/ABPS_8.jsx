import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

import FormSubstanceAbuse from "../../../../components/form/Form_SubstanceAbuse";

function ABSP8({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Behavior and Mental Health Assessment</h3>
      </div>
      <hr />
      <Row className="mb-3">
        <h5>Substance Abuse Information</h5>
        <Col md={3} className="fs-5">
          Substance Name
        </Col>
        <Col md={2} className="text-center fs-5">
          Age of 1st Use
        </Col>
        <Col md={2} className="text-center fs-5">
          Age of Heaviest Use
        </Col>
        <Col md={2} className="text-center fs-5">
          Frequency/Amount
        </Col>
        <Col md={2} className="text-center fs-5">
          Date of Last use
        </Col>
      </Row>
      <Form.Group as={Row} className="mb-3">
        <FormSubstanceAbuse register={register} title="Alcohol" field={1} />
        <FormSubstanceAbuse register={register} title="Cannabis" field={5} />
        <FormSubstanceAbuse register={register} title="Cocaine" field={9} />
        <FormSubstanceAbuse
          register={register}
          title="Stimulants"
          subtitle="(Crystal, speed, amphetamines)"
          field={13}
        />
        <FormSubstanceAbuse
          register={register}
          title="Metamphetamine"
          field={17}
        />
        <FormSubstanceAbuse
          register={register}
          title="Inhalants"
          subtitle="(LSD, PCP, mushrooms)"
          field={21}
        />
        <FormSubstanceAbuse
          register={register}
          title="Opioids"
          subtitle="(Heroine, Narcotics, Methadone)"
          field={25}
        />
        <FormSubstanceAbuse
          register={register}
          title="Sedative/Hypnotics"
          subtitle="(Valium, Xanax)"
          field={29}
        />
        <FormSubstanceAbuse
          register={register}
          title="Designer Drugs"
          subtitle="(Herbal, Steroids, Cough Syrup)"
          field={33}
        />
        <FormSubstanceAbuse register={register} title="Tobacco" field={37} />
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What consequences has the client faced as a result of the
            Drug/Alcohol use?
          </Form.Label>
          <Form.Text>
            Include hangovers, DT’s, Blackouts, Binges, Overdoses, Seizures, GI
            Bleeding, Job Loss, DUI’s, Assaults, Incarcerations, Homicides, etc
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("f60")}
            as="textarea"
            name="f60"
            rows={3}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-0">
            Longest period of sobriety?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f41")}
            name="f41"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-0">When?</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f42")}
            name="f42"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <h5>Client's Legal History</h5>
        <Col md={7}>
          <Form.Check
            inline
            {...register("f43")}
            type="checkbox"
            name="f43"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("f43")}
            type="checkbox"
            name="f43"
            value="Probation"
            label="Probation"
          />
          <Form.Check
            inline
            {...register("f43")}
            type="checkbox"
            name="f43"
            value="Parole"
            label="Parole"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f43")}
            name="f43"
            value="DFCS/CPS"
            label="DFCS/CPS"
          />
          <Form.Check
            inline
            {...register("f43")}
            type="checkbox"
            name="f43"
            value="DUI"
            label="DUI"
          />
          <Form.Check
            inline
            {...register("f43")}
            type="checkbox"
            name="f43"
            value="Restraining Order"
            label="Restraining Order"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f43")}
            name="f43"
            value="Prostitution"
            label="Prostitution"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f43")}
            name="f43"
            value="Eating Disorder"
            label="Eating Disorder"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f43")}
            name="f43"
            value="Other"
            label="Other"
          />
        </Col>
        <Col md={5}>
          <Form.Label className="RQ-form-label mb-0">
            Name of Probation Officer, Parole Officer, Case Manager
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f44")}
            name="f44"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default ABSP8;
