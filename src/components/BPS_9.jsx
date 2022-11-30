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

function BSP9({ register, control }) {
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
        <h3>Education Assessment</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
          School currently attending
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            name="patient_comment"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
          Grade
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("patient_comment")}
            name="patient_comment"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
          Is the client in special classes? If so, what type?
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
          Has the client ever been suspended or expelled from school and/or bus?
          </Form.Label>
          <Form.Text>(Include both in-school suspensions and out-of-school suspensions)</Form.Text>
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
          Is the client in special classes? If so, what type?
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
          Does the client have frequent absences, truancy?
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
          Does the client need or is receiving tutoring services?
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
          Is the client currently failing, and has the client ever been retained?
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
          What does the client like and dislike about school?
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
          Describe client’s peer relationships?
          </Form.Label>
          <Form.Text>(Include both the client’s and parent’s descriptions)</Form.Text>
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

export default BSP9;
