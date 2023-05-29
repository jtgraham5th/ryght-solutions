import { Row, Col } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import FormANSRating from "../../../../components/form/Form_ANS_Rating";

function CANS2({ register, control }) {
  const lifeFunctioning = [
    "Family",
    "Living Situation",
    "Social Functioning",
    "Developmental",
    "Recreational",
    "Legal",
    "Medical",
    "Physical",
    "Sleep",
    "Sexual Development",
    "School Behavior",
    "School Achievement",
    "School Attendance",
  ];
  const childBehavior = [
    "Psychosis",
    "Attention/Concentration",
    "Impulsivity",
    "Depression",
    "Anxiety",
    "Oppositional",
    "Conduct",
    "Attachment",
    "Eating Disturbance",
    "Behavioral Regression",
    "Somatization",
    "Anger Control",
  ];
  const childRisk = [
    "Suicide Risk",
    "Non-Suicidal Self Injury",
    "Other Self Harm",
    "Danger to Others",
    "Sexual Aggression",
    "Runaway",
    "Delinquency",
    "Judgment",
    "Fire setting",
    "Intentional Misbehavior",
    "Sexually Reactive Behavior",
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
          0 = No evidence of need
        </Col>
        <Col md={3} className="p-2">
          1 = Need for watching
        </Col>
        <Col md={3} className="p-2">
          2 = Need for action
        </Col>
        <Col md={3} className="p-2">
          3 = Need for immediate/intensive action
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h5>Life Functioning</h5>
          <hr />
          {lifeFunctioning.map((item, index) => (
            <FormANSRating
              key={index}
              register={register}
              title={item}
              field={index + 1}
            />
          ))}
        </Col>
        <Col md={4}>
          <h5>Child Behavior</h5>
          <hr />
          {childBehavior.map((item, index) => (
            <FormANSRating
              key={index}
              register={register}
              title={item}
              field={index + lifeFunctioning.length + 1}
            />
          ))}
        </Col>
        <Col md={4}>
          <h5>Child Risk</h5>
          <hr />
          {childRisk.map((item, index) => (
            <FormANSRating
              key={index}
              register={register}
              title={item}
              field={index + lifeFunctioning.length + childBehavior.length + 1}
            />
          ))}
        </Col>
      </Row>
    </>
  );
}

export default CANS2;
