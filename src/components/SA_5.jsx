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

function SA5({ register, control }) {
  const { formData } = useClient();
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
        <h3>Inital Client Intake</h3>
      </div>
      <hr /><h5>Diagnostic Impressions</h5>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Axis I
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisI")}
            as="textarea"
            name="axisI"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Axis II
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisII")}
            as="textarea"
            name="axisII"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Axis III
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisIII")}
            as="textarea"
            name="axisIII"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Axis VI
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisVI")}
            as="textarea"
            name="axisVI"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Axis V
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("axisV")}
            as="textarea"
            name="axisV"
            rows={2}
          />
        </Col>
      </Form.Group>
      <hr/>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Strengths
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("strengths")}
            as="textarea"
            name="strengths"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Needs
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("needs")}
            as="textarea"
            name="needs"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Abilities
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("abilities")}
            as="textarea"
            name="abilities"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Preferences
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("preferences")}
            as="textarea"
            name="preferences"
            rows={2}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default SA5;
