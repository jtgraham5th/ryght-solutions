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

function BSP7({ register, control }) {
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
        <h3>Behavior and Mental Health Assessment</h3>
      </div>
      <hr />
      <Row className="mb-3">
        <Form.Text>Please complete the below checklist for symptoms:</Form.Text>
        <Col md={2} className="fs-5"></Col>
        <Col md={4} className="text-center fs-5 bold">Severity</Col>
        <Col md={6} className="text-center fs-5">Duration</Col>
      </Row>
      <BPSRating
        register={register}
        title="Anxiety"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Appetite Problems"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Bizarre Behaviors"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Bizarre Ideations (Delusions)"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Conduct Problems"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Depression"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Eating Disorder"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Gender Issues"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Imparied Memory"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Indep. Living Problems"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Lack of Support System"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Loss of Energy"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Loss of Interest"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Obesessive/Compulsive"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Panic Attacks"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Paranoid Ideation"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Phobia"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Poor Interpersonal Skills"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Poor Judgement"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Poor Self Care Skills"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="School Problems"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Sexual Acting Out"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Sleep Problems"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Somatization"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Unusual Body Movements"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Other"
        severity="fs1"
        duration="fs2"
      />
      <BPSRating
        register={register}
        title="Other"
        severity="fs1"
        duration="fs2"
      />
            <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
          If any of the above were checked, please provide details below.
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            as="textarea"
            name="changefield"
            rows={2}
          />
        </Col>
      </Form.Group>
            <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
          Has client ever been diagnosed with a mental health problem?
          </Form.Label>
          <Form.Text>Include specific diagnosis, when problem was diagnosed, interventions</Form.Text>
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

export default BSP7;
