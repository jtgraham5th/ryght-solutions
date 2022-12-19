import { Row, Col, Form } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import FormANSRating from "../../../../components/form/Form_ANS_Rating";
import { useForm } from "react-hook-form";

function ANSA3() {
  const { register, handleSubmit } = useForm({});

  const strengths = [
    "Family",
    "Social Connectedness",
    "Optimism",
    "Talents/Interests",
    "Educational",
    "Volunteering",
    "Job History",
    "Spiritual/Religious",
    "Community Connection",
    "Natural Supports",
    "Resiliency",
    "Resourcefulness",
  ];
  const substanceUse = [
    "Substance Use",
    "Peer Influences",
    "Environmental Influences",
    "Severity of Use",
    "Duration of Use",
    "Recovery Support in Community",
    "Stage of Recovery",
  ];
  const acculturation = [
    "Language",
    "Cultural Identity",
    "Ritual",
    "Cultural Stress",
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

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={4}>
            <h5>Strengths</h5>
            <Row className="mb-3 border small">
              <Col md={6} className="p-2">
                <div>0 = Centerpiece</div>
                <div>1 = Useful</div>
              </Col>
              <Col md={6} className="p-2">
                <div>2 = Identified</div>
                <div>3 = Not Yet Identified</div>
              </Col>
            </Row>
            {strengths.map((item, index) => (
              <FormANSRating
                key={index}
                register={register}
                title={item}
                field={index + 1}
              />
            ))}
          </Col>
          <Col md={4}>
            <h5>Substance Use</h5>
            <Row className="mb-3 border small">
              <Col md={6} className="p-2">
                <div>0 = No evidence</div>
                <div>1 = History, watch/prevent </div>
              </Col>
              <Col md={6} className="p-2">
                <div>2 = Recent act</div>
                <div>3 = acute, act immediately</div>
              </Col>
            </Row>
            {substanceUse.map((item, index) => (
              <>
                <FormANSRating
                  key={index}
                  register={register}
                  title={item}
                  field={index + strengths.length + 1}
                />
              </>
            ))}
          </Col>
          <Col md={4}>
            <h5>Acculturation</h5>
            <Row className="mb-3 border small">
              <Col md={6} className="p-2">
                <div>0 = No evidence</div>
                <div>1 = Minimal Needs </div>
              </Col>
              <Col md={6} className="p-2">
                <div>2 = Moderate Needs</div>
                <div>3 = Severe Needs</div>
              </Col>
            </Row>
            {acculturation.map((item, index) => (
              <FormANSRating
                key={index}
                register={register}
                title={item}
                field={
                  index + strengths.length + substanceUse.length + 1
                }
              />
            ))}
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ANSA3;
