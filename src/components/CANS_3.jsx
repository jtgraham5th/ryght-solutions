import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import BPSRating from "./BPS_Rating";
import CANSRating from "./CANS_Rating";

function CANS3({ register, control }) {
  const traumaticStress = [
    "Adjustment to Trauma",
    "Traumatic Grief",
    "Re-experiencing",
    "Hyperarousal",
    "Avoidance",
    "Numbing",
    "Dissociation",
    "Affective/Physiological",
    "Dysregulation",
  ];
  const acculturation = ["Language", "Identity", "Ritual", "Cultural Stress"];
  return (
    <>
      <div className="CE-section-title">
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
        <Col md={6}>
          <h5>Traumatic Stress Symptoms</h5>
          <hr />
          {traumaticStress.map((item, index) => (
            <CANSRating
              key={index}
              register={register}
              title={item}
              field={index + 1}
            />
          ))}
        </Col>
        <Col md={6}>
          <h5>Acculturation</h5>
          <hr />
          {acculturation.map((item, index) => (
            <CANSRating
              key={index}
              register={register}
              title={item}
              field={index + traumaticStress.length + 1}
            />
          ))}
        </Col>
      </Row>
    </>
  );
}

export default CANS3;
