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

function BSP3({ register, control }) {
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
        <h3>Risk and Trauma Assessment (Include abuse/neglect)</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <h5>List all that apply</h5>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Suicidality</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Ideation"
            label="Ideation"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Plan"
            label="Plan"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Intent w/o means"
            label="Intent w/o means"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Intent w/ means"
            label="Intent w/ means"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Homicidality</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Ideation"
            label="Ideation"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Plan"
            label="Plan"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Intent w/o means"
            label="Intent w/o means"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Intent w/ means"
            label="Intent w/ means"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">
            Impulse Control
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Sufficient"
            label="Sufficient"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Moderate"
            label="Moderate"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Minimal"
            label="Minimal"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Inconsistent"
            label="Inconsistent"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Explosive"
            label="Explosive"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">
            Substance Abuse
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Abuse"
            label="Abuse"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Dependence"
            label="Dependence"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Unstable remission"
            label="Unstable remission"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2 italics">Medical Risks</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="None"
            label="None"
          />
          <Form.Label className="CE-form-label">Yes, Explain</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pfirstname")}
            type="text"
            name="pfirstname"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Neglect</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="None"
            label="None"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Nutritional"
            label="Nutritional"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Educational"
            label="Educational"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Medical"
            label="Medical"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Abuse</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Verbal / Emotional"
            label="Verbal / Emotional"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Physical"
            label="Physical"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Sexual"
            label="Sexual"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Family Violence"
            label="Family Violence"
          />
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Trauma</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Deaths"
            label="Deaths"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Separation from family"
            label="Separation from family"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Abuse"
            label="Abuse"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Violence"
            label="Violence"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Other"
            label="Other"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">
            Risky Behaviors
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Unprotected Sex"
            label="Unprotected Sex"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Shoplifting"
            label="Shoplifting"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Reckless Driving"
            label="Reckless Driving"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Gang Involvement"
            label="Gang Involvement"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Drug Dealing"
            label="Drug Dealing"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Carrying/Using Weapon"
            label="Carrying/Using Weapon"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Prostitution"
            label="Prostitution"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Eating Disorder"
            label="Eating Disorder"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Other"
            label="Other"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            If any of the above were checked, please provide details below.
          </Form.Label>
          <Form.Text>
            Include dates, names of perpetrators, if abuse/risk was reported,
            DFCS/CPS involvement, interventions, and outcome.{" "}
          </Form.Text>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            as="textarea"
            name="changefield"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BSP3;
