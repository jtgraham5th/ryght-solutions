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

function BSP6({ register, control }) {
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
        <h3>Health and Wellness</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            Are there any issues/problems such as (housing, medication, safety,
            school, transportation, health, behaviors, etc.) that would
            interfere with your daily living?{" "}
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
            What things do you need to do for yourself every day to keep feeling
            alright?
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
            What things (triggers) might cause an increase in your symptoms?
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
            What are things that you can do to address your triggers before they
            lead to more serious symptoms?{" "}
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
            What are some early warning signs that others have reported and/or
            you have observed when you are starting to have problems?{" "}
          </Form.Label>
          <Form.Text>This should include the client’s own words</Form.Text>
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
            What are things you must do if you experience early warning signs?{" "}
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
            What are signs/symptoms that indicate things are getting worse?{" "}
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
            What are some things that can help reduce your symptoms when things
            are breaking down?{" "}
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
            These are my SUPPORTERS, the people who I want to help me when the
            symptoms I listed above come up:{" "}
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
            The people I do not want involved and why:{" "}
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
            What is your religious preference:{" "}
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
    </>
  );
}

export default BSP6;
