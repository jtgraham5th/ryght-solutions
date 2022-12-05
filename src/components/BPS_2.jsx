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

function BPS2({ register, control }) {
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
        <h3>Client Presentation & Presenting Problem</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Location of Assessment
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pfirstname")}
            type="text"
            name="pfirstname"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Who was present during the assessment?
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("PGName")}
            type="text"
            name="PGName"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <h5>Interview Observations</h5>
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">Apperance</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Well Groomed"
            label="Well Groomed"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Unkempt"
            label="Unkempt"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Disheveled"
            label="Disheveled"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Malodorus"
            label="Malodorus"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">Build</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Average"
            label="Average"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Thin"
            label="Thin"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Overweight"
            label="Overweight"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Obese"
            label="Obese"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">Demeanor</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Cooperative"
            label="Cooperative"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Hostile"
            label="Hostile"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Guarded"
            label="Guarded"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Withdrawn"
            label="Withdrawn"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Preoccupied"
            label="Preoccupied"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Demanding"
            label="Demanding"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Seductive"
            label="Seductive"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">Eye Contact</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Average"
            label="Average"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Decreased"
            label="Decreased"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Increased"
            label="Increased"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-2">Speech</Form.Label>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Clear"
            label="Clear"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Slurred"
            label="Slurred"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Rapid"
            label="Rapid"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Slow"
            label="Slow"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Pressured"
            label="Pressured"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="checkbox"
            name="maritalStatus"
            value="Soft"
            label="Soft"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Loud"
            label="Loud"
          />
          <Form.Check
            inline
            type="checkbox"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="Monotone"
            label="Monotone"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">Mental Status:</Form.Label>
          <Form.Text>
            (Describe client’s mood, affect, thought processes, though contact,
            AVH, intelligence, insight, judgment, and orientation)
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
      <h5>Presenting Problem and Requested Service</h5>
      <Form.Group as={Row} className="mb-3">
        <Col md={12}>
          <Form.Label className="CE-form-label mb-0">
            What is the client’s presenting problem/why are they here?
          </Form.Label>
          <Form.Text>This should be in the client’s own words.</Form.Text>
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
          <Form.Label className="CE-form-label">
          What is the parent’s/family’s perception of the problem?          </Form.Label>
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
          Describe precipitating events:          </Form.Label>
          <Form.Text>Include the onset of the problem, duration, frequency, past intervention/services and the results of the services.</Form.Text>
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
          <Form.Label className="CE-form-label">
          What services is the client asking for? </Form.Label>
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

export default BPS2;
