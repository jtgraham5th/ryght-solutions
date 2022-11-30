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

function BSP4({ register, control }) {
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
        <h3>Family Assessment</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-4">
        <h5>Household Composition</h5>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Name</Form.Label>
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">
            Relationship to Client
          </Form.Label>
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Date of Birth</Form.Label>
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Age</Form.Label>
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
          <Form.Control
            {...register("parents.mother")}
            className="mb-2"
            aria-label="Text input with radio button"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <h5>Living Situation</h5>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="House w/family of origin "
            label="House w/family of origin "
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Independent Living"
            label="Independent Living"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Group Home/Foster Home"
            label="Group Home/Foster Home"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Homeless"
            label="Homeless"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Adequate Housing"
            label="Adequate Housing"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Safety Risks/Hazardous"
            label="Safety Risks/Hazardous"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Overcrowded"
            label="Overcrowded"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Risk of Homelessness"
            label="Risk of Homelessness"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What is the family’s source(s) of income? Is income monthly,
            bi-weekly? Is income sufficient for household expenses?{" "}
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
      <Form.Group as={Row} className="mb-2">
        <h5>Family History</h5>
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            Medical Problems
          </Form.Label>
          <Form.Text>
            Heart Disease, Lung Disease, Cancer, Strokes, Dementia, Diabetes,
            Asthma, etc
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
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            Substance Abuse
          </Form.Label>
          <Form.Text>
            Alcohol, Cocaine, Cannabis, Stimulants, Inhalants, Hallucinogens,
            Sedatives, Designer Drugs
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
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            Mental Illnesses/Bx Problems
          </Form.Label>
          <Form.Text>
            depression, schizophrenia, bipolar disorder, anxiety, ADD, ADHD,
            Learning Disorders, School Behavior Problems, Incarcerations,
            Gambling
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
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            Describe client’s relationship with biological parents.{" "}
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
            Describe client’s relationship with siblings.
          </Form.Label>{" "}
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

export default BSP4;
