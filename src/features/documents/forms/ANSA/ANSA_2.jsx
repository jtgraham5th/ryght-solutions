import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import FormANSRating from "../../../../components/form/Form_ANS_Rating";
import { useForm } from "react-hook-form";

function ANSA2() {
  const { register, handleSubmit } = useForm({});

  const lifeFunctioning = [
    "Physical/Medical",
    "Family Functioning",
    "Employment1",
    "Social Functioning",
    "Recreational",
    "Intellectual/Developmental",
    "Sexuality",
    "Independent Living Skills",
    "Residential Stability",
    "Legal",
    "Sleep",
    "Self Care",
    "Decision-making",
    "Involvement in Recovery",
    "Transportation",
    "Medication Adherence",
    "Parental/Caregiver Role",
  ];
  const behavioralHealth = [
    "Psychosis",
    "Impulse Control",
    "Depression",
    "Anxiety",
    "Interpersonal Problems",
    "Antisocial Behavior",
    "Adjustment to Trauma",
    "Anger Control",
    "Eating Disturbance",
  ];
  const riskBehaviors = [
    "Suicide Risk",
    "Danger to Others",
    "Self Injurious Behavior",
    "Other Self Harm",
    "Exploitation",
    "Gambling",
    "Sexual Aggression",
    "Criminal Behavior",
  ];
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>ANSA Georgia</h3>
      </div>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Row>
          <Col md={4}>
            <h5>Life Functioning</h5>
            <Row className="mb-3 border small">
              <Col md={6} className="p-2">
                <div>0 = No evidence of problems</div>
                <div>1 = history, mild </div>
              </Col>
              <Col md={6} className="p-2">
                <div>2 = Moderate</div>
                <div>3 = Severe</div>
              </Col>
            </Row>
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
            <h5>Behavioral Health Needs</h5>
            <Row className="mb-3 border small">
              <Col md={12} className="p-2">
                <div>0 = No evidence of problems</div>
                <div>1 = History, or sub threshold, watch/prevent </div>
                <div>
                  2 = Causing problems, consistent with diagnosable disorder
                </div>
                <div>3 = Causing severe/dangerous problems</div>
              </Col>
            </Row>
            {behavioralHealth.map((item, index) => (
              <>
                <FormANSRating
                  key={index}
                  register={register}
                  title={item}
                  field={index + lifeFunctioning.length + 1}
                />
              </>
            ))}
          </Col>
          <Col md={4}>
            <h5>Risk Behaviors</h5>
            <Row className="mb-3 border small">
              <Col md={6} className="p-2">
                <div>0 = No evidence</div>
                <div>1 = History, watch/prevent </div>
              </Col>
              <Col md={6} className="p-2">
                <div>2 = Recent, act</div>
                <div>3 = Acute, act immediately</div>
              </Col>
            </Row>
            {riskBehaviors.map((item, index) => (
              <FormANSRating
                key={index}
                register={register}
                title={item}
                field={
                  index + lifeFunctioning.length + behavioralHealth.length + 1
                }
              />
            ))}
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ANSA2;
