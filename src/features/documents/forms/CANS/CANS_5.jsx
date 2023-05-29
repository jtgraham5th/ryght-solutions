import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import FormANSRating from "../../../../components/form/Form_ANS_Rating";

function CANS5({ register, control }) {
  const childRating = [
    "Motor",
    "Sensory",
    "Communication",
    "Failure to thrive",
    "Feeding/Elimination",
    "Birth Weight",
    "Prenatal Care",
    "Substance Exposure",
    "Labor & Delivery",
    "Parent/Sibling Problems",
    "Availability of Caregiver",
    "Curiosity",
    "Playfulness",
    "Temperament",
    "Day Care Preschool",
  ];
  const transitionAdulthood = [
    "Independent living skills",
    "Transportation",
    "Parenting roles",
    "Intimate Relationships",
    "Medication Compliance",
    "Education Attainment",
    "Victimization",
    "Job Functioning",
  ];
  const caregiverStrengths = [
    "Physical",
    "Mental Health",
    "Involvement",
    "Knowledge",
    "Social Resources",
    "Posttraumatic Reactions",
    "Safety",
    "Substance Abuse",
    "Developmental",
    "Supervision",
    "Organization",
    "Residential Stability",
    "Marital/Partner Violence",
  ];
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>CANS Georgia</h3>
      </div>
      <hr />
      <Row className="mb-3 border">
        <Col md={3} className="p-2">
          0 = No evidence
        </Col>
        <Col md={3} className="p-2">
          1 = Minimal Needs
        </Col>
        <Col md={3} className="p-2">
          2 = Moderate Needs
        </Col>
        <Col md={3} className="p-2">
          3 = Severe Needs
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h5>Ratings of Children 5 years or younger</h5>
          <hr />
          <Form.Text>(Required if 5 or younger)</Form.Text>
          {childRating.map((item, index) => (
            <FormANSRating key={index} register={register} title={item} field={index + 1} />
          ))}
        </Col>
        <Col md={4}>
          <h5>Transition to Adulthood</h5>
          <hr />
          <Form.Text>(Required if 15 and older)</Form.Text>
          {transitionAdulthood.map((item, index) => (
            <FormANSRating
            key={index}
              register={register}
              title={item}
              field={index + childRating.length + 1}
            />
          ))}
        </Col>
        <Col md={4}>
          <h5>OPTIONAL: Caregiver Strengths & Needs</h5>
          <hr />
          {caregiverStrengths.map((item, index) => (
            <FormANSRating
            key={index}
              register={register}
              title={item}
              field={
                index + childRating.length + transitionAdulthood.length + 1
              }
            />
          ))}
        </Col>
      </Row>
    </>
  );
}

export default CANS5;
