import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";


function ABSP12({ register, control }) {
  const options = [
    "Income Maintenance",
    "Food",
    "Cloting",
    "Housing",
    "Medical",
    "Education",
    "Vocational",
    "Leisure",
    "Social",
  ];
  const factors = [
    "None",
    "Cognitive Impairment",
    "Lack of Motivation",
    "Abuse/Neglect",
    "Pain",
    "Language Barrier",
    "Impaired ability of read/write",
    "Sensory Impairment",
    "Fatigue",
    "Physical Disability",
    "Acute/Chronic Organicity",
    "Other",
  ];
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Social Services/Support Needs</h3>
      </div>
      <Form.Group as={Row} className="mb-2 align-items-center mb-4">
        <h5>Social Services/Support Needs</h5>
        <Form.Label>Check all that apply</Form.Label>
        <Col md={12} className="d-flex flex-wrap justify-content-start">
          {options.map((option, index) => (
            <Form.Check
              key={"support" + index}
              inline
              {...register("f1")}
              type="checkbox"
              name="f1"
              value={option}
              label={option}
            />
          ))}
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-2 align-items-center">
        <h5>Factors that may affect learning/treatment</h5>
        <Form.Label>Check all that apply</Form.Label>
        <Col md={12} className="d-flex flex-wrap justify-content-start">
          {factors.map((factor, index) => (
            <Form.Check
              key={"factors" + index}
              inline
              {...register("f2")}
              type="checkbox"
              name="f2"
              value={factor}
              label={factor}
            />
          ))}
        </Col>
      </Form.Group>
    </>
  );
}

export default ABSP12;
