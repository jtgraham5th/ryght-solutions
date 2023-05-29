import { Row, Col } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";

import FormANSRating from "../../../../components/form/Form_ANS_Rating";

function CANS4({ register, control }) {
  const traumaticExperiences = [
    "Sexual Abuse",
    "Physical Abuse",
    "Emotional Abuse",
    "Neglect",
    "Medical Trauma",
    "Witness to Family Violence",
    "Witness to Community Violence",
    "School Violence",
    "Natural or Manmade Disasters",
    "War Affected",
    "Terrorism Affected",
    "Witness/Victim to Criminal Activity",
    "Parental Criminal Behavior",
    "Disruption in Caregiving",
  ];
  const childStrengths = [
    "Family",
    "Interpersonal",
    "Education",
    "Vocational",
    "Coping and Savoring ",
    "Optimism",
    "Talents/Interest",
    "Spiritual/Religious",
    "Community Life",
    "RelationshipPermanence",
    "Resilience",
  ];
  const random = [
    "Substance Use",
    "Peer Influences",
    "Environmental Influences",
    "Severity of Use",
    "Duration of Use",
    "Recovery Support in Community",
    "Stage of Recovery",
  ];
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>CANS Georgia</h3>
      </div>
      <hr />
      <Row>
        <Col md={4}>
          <h5>Traumatice / Adverse Childhood Experiences</h5>{" "}
          <Row className="mb-3 border small">
            <Col md={6} className="p-2">
              <div>0 = No evidence of need</div>
              <div>1 = Mild Exposure </div>
            </Col>
            <Col md={6} className="p-2">
              <div>2 = Moderate</div>
              <div>3 = Severe</div>
            </Col>
          </Row>
          {traumaticExperiences.map((item, index) => (
            <FormANSRating
              key={index}
              register={register}
              title={item}
              field={index + 1}
            />
          ))}
        </Col>
        <Col md={4}>
          <h5>Child Strengths</h5>
          <Row className="mb-3 border small">
            <Col md={6} className="p-2">
              <div>0 = Centerpiece Strength</div>
              <div>1 = Useful Strength</div>
            </Col>
            <Col md={6} className="p-2">
              <div>2 = Identified Strength</div>
              <div>3 = None identified</div>
            </Col>
          </Row>

          {childStrengths.map((item, index) => (
            <FormANSRating
              key={index}
              register={register}
              title={item}
              field={index + traumaticExperiences.length + 1}
            />
          ))}
        </Col>
        <Col md={4}>
          <h5>Other</h5>
          <Row className="mb-3 border small">
            <Col md={6} className="p-2">
              <div>0 = No Evidence</div>
              <div>1 = History watch/prevent</div>
            </Col>
            <Col md={6} className="p-2">
              <div>2 = recent, act</div>
              <div>3 = acute, but immediately</div>
            </Col>
          </Row>

          {random.map((item, index) => (
            <FormANSRating
              key={index}
              register={register}
              title={item}
              field={
                index + traumaticExperiences.length + childStrengths.length + 1
              }
            />
          ))}
        </Col>
      </Row>
    </>
  );
}

export default CANS4;
