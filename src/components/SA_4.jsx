import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import CEFormFamilyPhysician from "./CE_FormFamilyPhysician";
import CEFormInsuranceProvider from "./CE_FormInsuranceProvider";

function SA4({ register, control }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    familyPhysician: false,
    insuranceProvider: false,
    activeForm: () => {},
  });

  const closeItem = (e) => {
    e.preventDefault();
    let sectionName = e.target.name;
    setAddNew((prevState) => ({
      ...prevState,
      sectionTitle: "",
      activeForm: () => {},
      [sectionName]: false,
    }));
  };

  const renderSectionForm = (name) => {
    switch (name) {
      case "familyPhysician":
        return CEFormFamilyPhysician;
      case "insuranceProvider":
        return CEFormInsuranceProvider;
      default:
        return CEFormFamilyPhysician;
    }
  };

  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Inital Client Intake</h3>
      </div>
      <hr /><h5>Counseling Information</h5>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="CE-form-label mb-2">
          Have you been in treatment or counseling before?
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("prevTreatment")}
            type="radio"
            name="prevTreatment"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            type="radio"
            {...register("prevTreatment")}
            name="prevTreatment"
            value="No"
            label="No"
          />
        </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 justify-content-center">
        <Form.Label className="CE-form-label">
          If yes, please give the following info:
        </Form.Label>
        <Col md={5}>
          <Form.Label className="CE-form-label">Problem</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("medicalProblems")}
            as="textarea"
            name="medicalProblems"
            rows={3}
          />
        </Col>
        <Col md={3}>
          <Row>
            <Form.Label className="CE-form-label">Month/Year</Form.Label>
            <Form.Control
              className="goal-detail-input"
              {...register("prevTreatementDate")}
              type="text"
              name="prevTreatementDate"
            />
          </Row>
          <Row>
            <Form.Label className="CE-form-label">Center</Form.Label>
            <Form.Control
              className="goal-detail-input"
              {...register("prevTreatmentCenter")}
              type="text"
              name="prevTreatmentCenter"
            />
          </Row>
        </Col>
        <Col md={4}>
        <Form.Label className="CE-form-label mb-2">
          Were you satisfied with the results?
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("prevTreatmentSatisfaction")}
            type="radio"
            name="prevTreatmentSatisfaction"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            type="radio"
            {...register("prevTreatmentSatisfaction")}
            name="prevTreatmentSatisfaction"
            value="No"
            label="No"
          />
        </div></Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={8}>
          <Form.Label className="CE-form-label mb-2">
            Have you had any suicidal or homicidal thoughts now or in the past?
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("suicidalThoughts")}
              type="radio"
              name="suicidalThoughts"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("suicidalThoughts")}
              name="suicidalThoughts"
              value="No"
              label="No"
            />
          </div>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">If yes, when:</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("suicidalThoughtsDate")}
            type="text"
            name="suicidalThoughtsDate"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">
            Did you or have you been thinking about acting on the thoughts?{" "}
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("actingOnThoughts")}
              type="radio"
              name="actingOnThoughts"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("actingOnThoughts")}
              name="actingOnThoughts"
              value="No"
              label="No"
            />
          </div>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">
            Have you ever been mentally, physically or sexually abused?{" "}
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("beenAbused")}
              type="radio"
              name="beenAbused"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("beenAbused")}
              name="beenAbused"
              value="No"
              label="No"
            />
          </div>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">
            Have you ever mentally, physically or sexually abused someone else?{" "}
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("abuser")}
              type="radio"
              name="abuser"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("abuser")}
              name="abuser"
              value="No"
              label="No"
            />
          </div>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Any additional information
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("additionalInfo")}
            as="textarea"
            name="additionalInfo"
            rows={3}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            What are your goals or expectations for the outcome of participation
            in this program? (Please state goals in consumer’s own words):
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("consumerGoals")}
            as="textarea"
            name="consumerGoals"
            rows={3}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default SA4;
