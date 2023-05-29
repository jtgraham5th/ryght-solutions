import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

import FormDiagnosticCodes from "../../../../components/form/Form_DiagnosticCodes";

function ABSP14({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Diagnostic Impression</h3>
      </div>
      <hr />
      <Row className="mb-3">
        <h5>
          Axis I: Clinical Disorders; Other conditions that may be a focus of
          clinical attention.
        </h5>
        <Col md={1} className="fs-5"></Col>
        <Col md={5} className="text-center fs-5">
          Diagnosis Code
        </Col>
        <Col md={5} className="text-center fs-5">
          Diagnosis Title
        </Col>
      </Row>
      <FormDiagnosticCodes register={register} title="A." field={1} />
      <FormDiagnosticCodes register={register} title="B." field={3} />
      <FormDiagnosticCodes register={register} title="C." field={5} />
      <FormDiagnosticCodes register={register} title="D." field={7} />
      <Row className="mb-3">
        <h5>Axis II: Personality Disorders; Mental Retardation</h5>
        <Col md={1} className="fs-5"></Col>
        <Col md={5} className="text-center fs-5">
          Diagnosis Code
        </Col>
        <Col md={5} className="text-center fs-5">
          Diagnosis Title
        </Col>
      </Row>
      <FormDiagnosticCodes register={register} title="E." field={9} />
      <FormDiagnosticCodes register={register} title="F." field={11} />
      <Form.Group as={Row} className="mb-3">
        <h5>Axis III: Medical Problems</h5>
        <Form.Text className="mb-2">(List all Medical Problems)</Form.Text>
        <Col md={12}>
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
        <h5>Axis IV: Psychosocial and Environmental Problems</h5>
        <Form.Text className="mb-2">Check Yes or No for each problem</Form.Text>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">
            Primary Support Group
          </Form.Label>
          <Form.Check
            inline
            {...register("f13")}
            type="radio"
            name="f13"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f13")}
            type="radio"
            name="f13"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">
            Occupational
          </Form.Label>
          <Form.Check
            inline
            {...register("f14")}
            type="radio"
            name="f14"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f14")}
            type="radio"
            name="f14"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">
            Access to Health Care
          </Form.Label>
          <Form.Check
            inline
            {...register("f16")}
            type="radio"
            name="f16"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f16")}
            type="radio"
            name="f16"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">
            Social Environment
          </Form.Label>
          <Form.Check
            inline
            {...register("f17")}
            type="radio"
            name="f17"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f17")}
            type="radio"
            name="f17"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">Housing</Form.Label>
          <Form.Check
            inline
            {...register("f18")}
            type="radio"
            name="f18"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f18")}
            type="radio"
            name="f18"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">
            Legal System/Crime
          </Form.Label>
          <Form.Check
            inline
            {...register("f19")}
            type="radio"
            name="f19"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f19")}
            type="radio"
            name="f19"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">
            Educational
          </Form.Label>
          <Form.Check
            inline
            {...register("f20")}
            type="radio"
            name="f20"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f20")}
            type="radio"
            name="f20"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">
            Economic
          </Form.Label>
          <Form.Check
            inline
            {...register("f21")}
            type="radio"
            name="f21"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f21")}
            type="radio"
            name="f21"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="RQ-form-label d-flex mb-0">
            Other problems
          </Form.Label>
          <Form.Check
            inline
            {...register("f22")}
            type="radio"
            name="f22"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("f22")}
            type="radio"
            name="f22"
            value="No"
            label="No"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={10}>
          <Form.Label>Trauma</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f61")}
            as="textarea"
            name="f61"
            rows={2}
          />
        </Col>
        <Col md={2} className="d-flex justify-content-end flex-column">
          <Form.Check
            {...register("f23")}
            type="radio"
            name="f23"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            {...register("f23")}
            type="radio"
            name="f23"
            value="No"
            label="No"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default ABSP14;