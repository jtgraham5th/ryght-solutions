import { useState } from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import "./CE_Manager.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import CEFormFamilyPhysician from "./CE_FormFamilyPhysician";
import CEFormInsuranceProvider from "./CE_FormInsuranceProvider";

function SA3({ register, control }) {
  const { formData } = useClient();
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    familyPhysician: false,
    insuranceProvider: false,
    activeForm: () => {},
  });

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
      <hr />
      <h5>Confidential Medical Information</h5>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="CE-form-label mb-2">
          Do you have any allergies (medication/food/environmental)?
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("allergies")}
            type="radio"
            name="allergies"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            type="radio"
            {...register("allergies")}
            name="allergies"
            value="No"
            label="No"
          />
        </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="CE-form-label">Medical Problems</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("medicalProblems")}
            as="textarea"
            name="medicalProblems"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Prescribed Medications
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("prescriptions")}
            as="textarea"
            name="prescriptions"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Over-the-Counter Medications
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("otcMedications")}
            as="textarea"
            name="otcMedications"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4 align-items-center">
        <Form.Label className="CE-form-label">
          In case of a medical or other emergency, please tell us who you would
          like us to call:
        </Form.Label>
        <Col md={4}>
          <InputGroup size="sm">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("eContactName")}
              type="text"
              name="eContactName"
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <InputGroup size="sm">
            <InputGroup.Text>Relationship</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("eContactRelationship")}
              type="text"
              name="eContactRelationship"
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <InputGroup size="sm" className="justify-content-evenly">
            <InputGroup.Text>Phone</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("eContactPhone")}
              type="number"
              name="eContactPhone"
            />
          </InputGroup>
        </Col>
      </Form.Group>

      <h5>Substance Abuse Information</h5>
      <Form.Group as={Row} className="mb-2">
        <Col md={5}>
          <Form.Label className="CE-form-label mb-2">
            Have you ever used drugs or alcohol?
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("DAUsage")}
              type="radio"
              name="DAUsage"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("DAUsage")}
              name="DAUsage"
              value="No"
              label="No"
            />
            <Form.Check
              inline
              type="radio"
              {...register("DAUsage")}
              name="DAUsage"
              value="Not Sure"
              label="Not Sure"
            />
          </div>
        </Col>
        <Col md={7}>
          <Form.Label className="CE-form-label">If yes, explain:</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("DAUsageDetails")}
            as="textarea"
            name="DAUsageDetails"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            List the Frequency and usage of drug/alcohol and the last time used:
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("DAUsageFreqDetails")}
            as="textarea"
            name="DAUsageFreqDetails"
            rows={3}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={8}>
          <Form.Label className="CE-form-label mb-2">
            Do you use Tobacco (snuff, cigarettes, cigars, etc):
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("tobaccoUsage")}
              type="radio"
              name="tobaccoUsage"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("tobaccoUsage")}
              name="tobaccoUsage"
              value="No"
              label="No"
            />
          </div>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">If yes, how often:</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("tobaccoUsageFreq")}
            type="text"
            name="tobaccoUsageFreq"
          />
        </Col>
      </Form.Group>

      <h5>Legal History</h5>
      <Form.Group as={Row} className="mb-2">
        <Col md={6}>
          <Form.Label className="CE-form-label mb-2">
            Have you ever been arrested for domestic violence, DUI, drugs or any
            other felony?
          </Form.Label>
          <div>
            <Form.Check
              inline
              {...register("felony")}
              type="radio"
              name="felony"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("felony")}
              name="felony"
              value="No"
              label="No"
            />
          </div>
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">
            If yes, please list charge(s) & date(s):
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("felonyDetails")}
            as="textarea"
            name="felonyDetails"
            rows={2}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Form.Label className="CE-form-label mb-2">Legal Custody</Form.Label>
        <div>
          <Form.Check
            inline
            {...register("legalCustody")}
            type="radio"
            name="legalCustody"
            value="DFAC"
            label="DFAC"
          />
          <Form.Check
            inline
            type="radio"
            {...register("legalCustody")}
            name="legalCustody"
            value="Parent"
            label="Parent"
          />
          <Form.Check
            inline
            type="radio"
            {...register("legalCustody")}
            name="legalCustody"
            value="Relative"
            label="Relative"
          />
          <Form.Check
            inline
            type="radio"
            {...register("legalCustody")}
            name="legalCustody"
            value="Other"
            label="Other"
          />
        </div>
      </Form.Group>

      <Form.Group as={Row} className="mb-2">
        <Col md={12}>
          <Form.Label className="CE-form-label">
            Is the consumer currently on probation (If yes, please provide the
            name of the probation officer and court jurisdiction/obtain phone
            number of probation officer)
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("probationOfficer")}
            type="text"
            name="probationOfficer"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default SA3;
