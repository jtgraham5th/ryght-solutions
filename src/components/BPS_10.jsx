import { useState } from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import CEAddContainer from "./CE_AddContainer";
import CEFormFamilyPhysician from "./CE_FormFamilyPhysician";
import CEFormInsuranceProvider from "./CE_FormInsuranceProvider";
import BPSRating from "./BPS_Rating";
import BPSSubstanceAbuse from "./BPS_SubstanceAbuse";

function BSP10({ register, control }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    familyPhysician: false,
    insuranceProvider: false,
    activeForm: () => {},
  });

  const addItem = (e) => {
    e.preventDefault();
    let sectionName = e.target.name;
    setAddNew((prevState) => ({
      ...prevState,
      sectionTitle: sectionName,
      activeForm: renderSectionForm(sectionName),
      [sectionName]: true,
    }));
  };
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
        <h3>SNAP: Strength, Needs, Ability, Prefrences</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What strengths does the client have that affects their quality of
            life?
          </Form.Label>
          <Form.Text>
            (This should include family, friend, teacher supports, hobbies,
            community resources, education)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What is needed to increase the client’s quality of life?
          </Form.Label>
          <Form.Text>
            (Name specific interventions, resources for biological,
            psychological, and social/environmental barriers)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What are the client’s abilities and skills that would help increase
            his/her quality of life?
          </Form.Label>
          <Form.Text>
            (This should include personality traits, work skills, academic
            skills)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What strengths does the parent believe the client has?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What are the family’s strengths?{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What are the client and family’s expectation of and preferences for
            this service?{" "}
          </Form.Label>
          <Form.Text>
            (This should include the client’s own words of his/her expected
            outcome)
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BSP10;
