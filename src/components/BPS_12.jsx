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
import BPSDiagnosticCodes from "./BPS_DiagnosticCodes";

function BSP12({ register, control }) {
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
        <h3>Diagnostic Impression</h3>
      </div>
      <hr />
      <Row className="mb-3">
        <h5>
          Axis I: Clinical Disorders; Other conditions that may be a focus of
          clinical attention.
        </h5>
        <Col md={1} className="fs-5"></Col>
        <Col md={5} className="text-center fs-5">
          Diagnosis Code
        </Col>
        <Col md={5} className="text-center fs-5">
          Diagnosis Title
        </Col>
      </Row>
      <BPSDiagnosticCodes register={register} title="A." />
      <BPSDiagnosticCodes register={register} title="B." />
      <BPSDiagnosticCodes register={register} title="C." />
      <BPSDiagnosticCodes register={register} title="D." />
      <Row className="mb-3">
        <h5>Axis II: Personality Disorders; Mental Retardation</h5>
        <Col md={1} className="fs-5"></Col>
        <Col md={5} className="text-center fs-5">
          Diagnosis Code
        </Col>
        <Col md={5} className="text-center fs-5">
          Diagnosis Title
        </Col>
      </Row>
      <BPSDiagnosticCodes register={register} title="E." />
      <BPSDiagnosticCodes register={register} title="F." />
      <Form.Group as={Row} className="mb-3">
        <h5>Axis III: Medical Problems</h5>
        <Form.Text className="mb-2">(List all Medical Problems)</Form.Text>
        <Col md={12}>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={3}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <h5>Axis IV: Psychosocial and Environmental Problems</h5>
        <Form.Text className="mb-2" >Check Yes or No for each problem</Form.Text>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Primary Support Group
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Occupational
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Access to Health Care
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Social Environment
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Housing
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Legal System/Crime
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Educational
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Economic
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
        <Col md={4} className="pb-2 pt-2 border">
          <Form.Label className="CE-form-label d-flex mb-0">
            Other problems
          </Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} >
        <Col md={10}>
          <Form.Label>Trauma</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            as="textarea"
            name="patient_comment"
            rows={2}
          />
        </Col>
        <Col md={2} className="d-flex justify-content-end flex-column">
        <Form.Check
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="No"
            label="No"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BSP12;
