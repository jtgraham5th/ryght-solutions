import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";


function ABSP4({ register, control }) {
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Medical Assessment</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            What medical problems does the client have?
          </Form.Label>
          <Form.Text>
            Include specific diagnosis, when problem was diagnosed,
            interventions
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
      <Form.Group as={Row} className="mb-4">
        <h5>Prescribed Mediations</h5>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">
            Medication Name
          </Form.Label>
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
        </Col>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">
            Dose / Frequency
          </Form.Label>
          <Form.Control
            {...register("f5")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
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
        </Col>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Prescribed by?</Form.Label>
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
        </Col>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">
            When Prescribed?
          </Form.Label>
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
          <Form.Control
            {...register("f16")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Next Refill?</Form.Label>
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
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Side Effects?</Form.Label>
          <Form.Control
            {...register("f21")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f22")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f23")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("f24")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-2">
            Is client compliant with medications?
          </Form.Label>
          <Row>
            <Col md={1}>
              <Form.Check
                inline
                {...register("f25")}
                type="radio"
                name="f25"
                value="Yes"
                label="Yes"
              />
            </Col>
            <Col md={11}>
              <Form.Label className="RQ-form-label">No, Explain</Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("f25")}
                type="text"
                name="pfirstname"
              />
            </Col>
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-0">
            Current Pediatrician/Primary Care Physician:{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f26")}
            name="f26"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-0">
            Telephone No. & Address
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f27")}
            name="f27"
          />
        </Col>
      </Form.Group>
      <h5>Nutritional Screening</h5>
      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-0">
            Current Weight:
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f28")}
            name="f28"
            rows={2}
          />
        </Col>
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-0">
            Current Height:
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("f29")}
            name="f29"
            rows={2}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4">
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Appetite</Form.Label>
          <Form.Check
            inline
            {...register("f30")}
            type="checkbox"
            name="f30"
            value="Good"
            label="Good"
          />
          <Form.Check
            inline
            {...register("f30")}
            type="checkbox"
            name="f30"
            value="Fair"
            label="Fair"
          />
          <Form.Check
            inline
            {...register("f30")}
            type="checkbox"
            name="f30"
            value="Poor, explain below"
            label="Poor, explain below"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="RQ-form-label mb-2">
            Eating Behavior
          </Form.Label>
          <Form.Check
            inline
            {...register("f31")}
            type="checkbox"
            name="f31"
            value="Binges/overeats to excess"
            label="Binges/overeats to excess"
          />
          <Form.Check
            inline
            {...register("f31")}
            type="checkbox"
            name="f31"
            value="Restricts food/vomits/over-exercises to avoid weight gain"
            label="Restricts food/vomits/over-exercises to avoid weight gain"
          />
          <Form.Check
            inline
            {...register("f31")}
            type="checkbox"
            name="f31"
            value="Hiding/Hording food"
            label="Hiding/Hording food"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="RQ-form-label mb-2">Other</Form.Label>
          <Form.Check
            inline
            {...register("f32")}
            type="checkbox"
            name="f32"
            value="Recently gained/lost significant weight"
            label="Recently gained/lost significant weight"
          />
          <Form.Check
            inline
            {...register("f32")}
            type="checkbox"
            name="f32"
            value="Special Dietary Needs"
            label="Special Dietary Needs"
          />
          <Form.Check
            inline
            {...register("f32")}
            type="checkbox"
            name="f32"
            value="Allergies, explain below"
            label="Allergies, explain below"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <h5>Assistive or Adaptive Devices</h5>
        <Col md={12}>
          <Form.Check
            inline
            {...register("f33")}
            type="checkbox"
            name="f33"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("f33")}
            type="checkbox"
            name="f33"
            value="Glasses"
            label="Glasses"
          />
          <Form.Check
            inline
            {...register("f33")}
            type="checkbox"
            name="f33"
            value="Walker"
            label="Walker"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f33")}
            name="f33"
            value="Braille"
            label="Braille"
          />
          <Form.Check
            inline
            {...register("f33")}
            type="checkbox"
            name="f33"
            value="Hearing Aids"
            label="Hearing Aids"
          />
          <Form.Check
            inline
            {...register("f33")}
            type="checkbox"
            name="f33"
            value="Cane"
            label="Cane"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f33")}
            name="f33"
            value="Crutches"
            label="Crutches"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f33")}
            name="f33"
            value="Wheelchair"
            label="Wheelchair"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f33")}
            name="f33"
            value="Translated Written Information"
            label="Translated Written Information"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f33")}
            name="f33"
            value="Translator for Speaking"
            label="Translator for Speaking"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("f33")}
            name="f33"
            value="Other"
            label="Other"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="RQ-form-label mb-0">
            If any of the above were checked, please provide details below.{" "}
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
    </>
  );
}

export default ABSP4;
