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

function BSP5({ register, control }) {
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
        <h3>Medical Assessment</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What medical problems does the client have?
          </Form.Label>
          <Form.Text>
            Include specific diagnosis, when problem was diagnosed,
            interventions
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
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What was the client’s health at birth? Early development?{" "}
          </Form.Label>
          <Form.Text>
            Include any delays with walking, crawling, sitting up, concerns with
            height/weight, any problems with running, jumping, climbing,
            balancing, coordination, problems with hearing, vision or speech;
            current with immunizations
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
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What is the client’s prenatal history?
          </Form.Label>
          <Form.Text>
            (Include any substance abuse, physical abuse, medications, and
            illnesses during mother’s pregnancy, prenatal exposure to alcohol,
            tobacco and other drugs)
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

      <Form.Group as={Row} className="mb-4">
        <h5>Prescribed Mediations</h5>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">
            Medication Name
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
        </Col>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">
            Dose / Frequency
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
        </Col>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Prescribed by?</Form.Label>
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
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">
            When Prescribed?
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
        </Col>
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Next Refill?</Form.Label>
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
        <Col md={2} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Side Effects?</Form.Label>
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
          <Form.Label className="CE-form-label mb-2">
            Is client compliant with medications?
          </Form.Label>
          <Row>
            <Col md={1}>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Yes"
            label="Yes"
          /></Col><Col md={11}>
          <Form.Label className="CE-form-label">No, Explain</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pfirstname")}
            type="text"
            name="pfirstname"
          /></Col></Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            Current Pediatrician/Primary Care Physician:{" "}
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            name="changefield"
            rows={2}
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            Telephone No. & Address
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            name="changefield"
            rows={2}
          />
        </Col>
      </Form.Group>
      <h5>Nutritional Screening</h5>
      <Form.Group as={Row} className="mb-3">
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            Current Weight:
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            name="changefield"
            rows={2}
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-0">
            Current Height: 
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("changefield")}
            name="changefield"
            rows={2}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4">
      <Col md={3} className="d-flex flex-column">
          <Form.Label className="CE-form-label mb-2">Appetite</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Good"
            label="Good"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Fair"
            label="Fair"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Poor, explain below"
            label="Poor, explain below"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label mb-2">Eating Behavior</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Binges/overeats to excess"
            label="Binges/overeats to excess"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Restricts food/vomits/over-exercises to avoid weight gain"
            label="Restricts food/vomits/over-exercises to avoid weight gain"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Hiding/Hording food"
            label="Hiding/Hording food"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label mb-2">Other</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Recently gained/lost significant weight"
            label="Recently gained/lost significant weight"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Special Dietary Needs"
            label="Special Dietary Needs"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Allergies, explain below"
            label="Allergies, explain below"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <h5>Assistive or Adaptive Devices</h5>
        <Col md={12}>
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
            value="Glasses"
            label="Glasses"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Walker"
            label="Walker"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Braille"
            label="Braille"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Hearing Aids"
            label="Hearing Aids"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Cane"
            label="Cane"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Crutches"
            label="Crutches"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Wheelchair"
            label="Wheelchair"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Translated Written Information"
            label="Translated Written Information"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Translator for Speaking"
            label="Translator for Speaking"
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
          <Form.Label className="CE-form-label mb-0">
          If any of the above were checked, please provide details below.          </Form.Label>
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

export default BSP5;
