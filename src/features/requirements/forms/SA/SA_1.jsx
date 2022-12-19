import { useState } from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "../RQ_Forms.css";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../../../../context/ClientContext";
import {FormAddContainer} from "../../../../components/form/Form_AddContainer";
import {FormFamilyPhysician} from "../../../../components/form/Form_FamilyPhysician";
import {FormInsuranceProvider} from "../../../../components/form/Form_InsuranceProvider";

function SA1({ register, control }) {
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
        return FormFamilyPhysician;
      case "insuranceProvider":
        return FormInsuranceProvider;
      default:
        return FormFamilyPhysician;
    }
  };

  return (
    <>
      <div className="RQ-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Inital Client Intake</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">
          Does Consumer Have Medical Aid?
          <div className="RQ-form-label-button-container">
            {addNew.familyPhysician ? (
              <>
                <Button
                  className="RQ-form-label-button me-2"
                  name="familyPhysician"
                  variant="outline-success"
                  size="sm"
                >
                  Save
                </Button>
                <Button
                  className="RQ-form-label-button"
                  name="familyPhysician"
                  variant="outline-secondary"
                  size="sm"
                  onClick={closeItem}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                variant="outline-primary"
                name="familyPhysician"
                className="RQ-form-label-button"
                onClick={addItem}
              >
                new
              </Button>
            )}
          </div>
        </Form.Label>
        <div>
          <Form.Check
            inline
            {...register("medicaid")}
            type="radio"
            name="medicaid"
            value="Yes"
            label="Yes"
          />
          <Form.Check
            inline
            type="radio"
            {...register("medicaid")}
            name="medicaid"
            value="No"
            label="No"
          />
          <Form.Check
            inline
            type="radio"
            {...register("medicaid")}
            name="medicaid"
            value="Applied for"
            label="Applied for"
          />
        </div>
      </Form.Group>
      <FormAddContainer
        sectionTitle={
          addNew.sectionTitle
            ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
            : ""
        }
        open={addNew.sectionTitle === "familyPhysician"}
        close={closeItem}
        newForm={addNew.activeForm}
      />
      <Form.Group as={Row} className="mb-2">
        {/* <h5>Personal Information</h5> */}
        <Col md={12}>
          <Form.Label className="RQ-form-label">
            Parent/Guardian Name
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
        <Col md={4}>
          <Form.Label className="RQ-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("address")}
            type="text"
            name="address"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("city")}
            type="text"
            name="city"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="RQ-form-label">State</Form.Label>
          <Form.Select
            {...register("state")}
            name="state"
            aria-label="Select State"
          >
            <option>Select State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label className="RQ-form-label">Zip Code</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("zipCode")}
            type="number"
            name="zipCode"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="RQ-form-label">Home Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("homePhone")}
            type="number"
            name="homePhone"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">Mobile Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("mobilePhone")}
            type="number"
            name="mobilePhone"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">Work Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("workPhone")}
            type="number"
            name="workPhone"
          />
        </Col>
        <Form.Text>
          Please give the telephone number in that a voice mail message may be
          left. Please remember that cellular phones are not necessarily
          confidential due to its technology.
        </Form.Text>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">Marital Status</Form.Label>
        <Row>
          <Col md={5}>
            <Row>
              <Col md={4}>
                <Form.Check
                  inline
                  {...register("maritalStatus")}
                  type="radio"
                  name="maritalStatus"
                  value="Married"
                  label="Married"
                />
              </Col>
              <Col md={6}>
                <InputGroup disabled size="sm">
                  <Form.Control
                    {...register("maritalStatus")}
                    type="number"
                    name="marriedYears"
                  />
                  <InputGroup.Text id="basic-addon2">Years</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Check
                  inline
                  {...register("maritalStatus")}
                  type="radio"
                  name="maritalStatus"
                  value="Divorced"
                  label="Divorced"
                />
              </Col>
              <Col md={6}>
                <InputGroup disabled size="sm">
                  <Form.Control
                    {...register("maritalStatus")}
                    type="number"
                    name="marriedYears"
                  />
                  <InputGroup.Text id="basic-addon2">Years</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Check
                  inline
                  {...register("maritalStatus")}
                  type="radio"
                  name="maritalStatus"
                  value="Widowed"
                  label="Widowed"
                />
              </Col>
              <Col md={6}>
                <InputGroup disabled size="sm">
                  <Form.Control
                    {...register("maritalStatus")}
                    type="number"
                    name="marriedYears"
                  />
                  <InputGroup.Text id="basic-addon2">Years</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Form.Check
              inline
              type="radio"
              {...register("maritalStatus")}
              name="maritalStatus"
              value="Never Married"
              label="Never Married"
            />
            <Form.Check
              inline
              type="radio"
              {...register("maritalStatus")}
              name="maritalStatus"
              value="Engaged"
              label="Engaged"
            />
            <Form.Check
              inline
              type="radio"
              {...register("maritalStatus")}
              name="maritalStatus"
              value="Separated"
              label="Separated"
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="RQ-form-label mb-2">Household:</Form.Label>
        <Col md={5} className="d-flex flex-column">
          <Form.Check
            inline
            type="radio"
            {...register("household")}
            name="household"
            value="Live alone"
            label="Live alone"
          />
          <Form.Check
            inline
            type="radio"
            {...register("household")}
            name="household"
            value="Homeless"
            label="Homeless"
          />
          <Form.Check
            inline
            type="radio"
            {...register("household")}
            name="household"
            value="Lives with partner and/or children"
            label="Lives with partner and/or children"
          />
        </Col>
        <Col md={5}>
          <Form.Check
            inline
            type="radio"
            {...register("household")}
            name="household"
            value="Lives with roomate(s)/other"
            label="Lives with roomate(s)/other"
          />
          <Form.Check
            inline
            type="radio"
            {...register("household")}
            name="household"
            value="Live with parents/other family"
            label="Live with parents/other family"
          />
          <Form.Check
            inline
            type="radio"
            {...register("household")}
            name="household"
            value="Other"
            label="Other"
          />
        </Col>
      </Form.Group>
      <h5>Parents:</h5>
      <Form.Group as={Row} className="mb-2">
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Mother:</Form.Label>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-mother"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.mother")}
              placeholder="Current Age"
              aria-label="Text input with radio button"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-mother"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.mother")}
              placeholder="Deceased years"
              aria-label="Text input with radio button"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-mother"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.mother")}
              placeholder="Absent/Unknown"
              readOnly
              aria-label="Text input with radio button"
            />
          </InputGroup>
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Father:</Form.Label>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-father"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.father")}
              placeholder="Current Age"
              aria-label="Text input with radio button"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-father"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.father")}
              placeholder="Deceased years"
              aria-label="Text input with radio button"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-father"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.father")}
              placeholder="Absent/Unknown"
              readOnly
              aria-label="Text input with radio button"
            />
          </InputGroup>
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Step-Mother:</Form.Label>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-stepMother"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.stepMother")}
              placeholder="Current Age"
              aria-label="Text input with radio button"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-stepMother"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.stepMother")}
              placeholder="Deceased years"
              aria-label="Text input with radio button"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-stepMother"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.stepMother")}
              placeholder="Absent/Unknown"
              readOnly
              aria-label="Text input with radio button"
            />
          </InputGroup>
        </Col>
        <Col md={3} className="d-flex flex-column">
          <Form.Label className="RQ-form-label mb-2">Step-Father:</Form.Label>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-stepFather"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.stepFather")}
              placeholder="Current Age"
              aria-label="Text input with radio button"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-stepFather"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.stepFather")}
              placeholder="Deceased years"
              aria-label="Text input with radio button"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputGroup.Radio
              name="parents-stepFather"
              aria-label="Radio button for following text input"
            />
            <Form.Control
              {...register("parents.stepFather")}
              placeholder="Absent/Unknown"
              readOnly
              aria-label="Text input with radio button"
            />
          </InputGroup>
        </Col>
      </Form.Group>

      <h5>Children:</h5>
      <Form.Group as={Row} className="mb-2 align-items-center">
        <Col md={5}>
          <InputGroup size="sm">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("child1.name")}
              type="text"
              name="emergencyContact"
            />
          </InputGroup>
          {/* <Form.Label className="RQ-form-label">Name</Form.Label> */}
        </Col>
        <Col md={2}>
          <InputGroup size="sm">
            <InputGroup.Text>Age</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("child1.age")}
              type="number"
              name="emergencyPhone"
            />
          </InputGroup>
        </Col>
        <Col md={5}>
          <InputGroup size="sm" className="justify-content-evenly">
            <InputGroup.Text>Live with you?</InputGroup.Text>
            <Form.Check
              inline
              {...register("child1.livesWith")}
              type="radio"
              name="child1-livesWith"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("child1.livesWith")}
              name="child1-livesWith"
              value="No"
              label="No"
            />
          </InputGroup>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 align-items-center">
        <Col md={5}>
          <InputGroup size="sm">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("child2.name")}
              type="text"
              name="emergencyContact"
            />
          </InputGroup>
          {/* <Form.Label className="RQ-form-label">Name</Form.Label> */}
        </Col>
        <Col md={2}>
          <InputGroup size="sm">
            <InputGroup.Text>Age</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("child2.age")}
              type="number"
              name="emergencyPhone"
            />
          </InputGroup>
        </Col>
        <Col md={5}>
          <InputGroup size="sm" className="justify-content-evenly">
            <InputGroup.Text>Live with you?</InputGroup.Text>
            <Form.Check
              inline
              {...register("child2.livesWith")}
              type="radio"
              name="child2-livesWith"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("child2.livesWith")}
              name="child2-livesWith"
              value="No"
              label="No"
            />
          </InputGroup>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2 align-items-center">
        <Col md={5}>
          <InputGroup size="sm">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("child3.name")}
              type="text"
              name="emergencyContact"
            />
          </InputGroup>
          {/* <Form.Label className="RQ-form-label">Name</Form.Label> */}
        </Col>
        <Col md={2}>
          <InputGroup size="sm">
            <InputGroup.Text>Age</InputGroup.Text>
            <Form.Control
              className="goal-detail-input"
              {...register("child3.age")}
              type="number"
              name="emergencyPhone"
            />
          </InputGroup>
        </Col>
        <Col md={5} className="justify-content-evenly">
          <InputGroup size="sm">
            <InputGroup.Text>Live with you?</InputGroup.Text>
            <Form.Check
              inline
              {...register("child3.livesWith")}
              type="radio"
              name="child3-livesWith"
              value="Yes"
              label="Yes"
            />
            <Form.Check
              inline
              type="radio"
              {...register("child3.livesWith")}
              name="child3-livesWith"
              value="No"
              label="No"
            />
          </InputGroup>
        </Col>
      </Form.Group>

      <h5>Siblings:</h5>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="RQ-form-label">Brothers Ages</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("brothers")}
            type="text"
            name="brothers"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="RQ-form-label">Sisters Ages</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("sisters")}
            type="text"
            name="sisters"
          />
        </Col>
        <Form.Text>Separate ages by a comma or space</Form.Text>
      </Form.Group>
    </>
  );
}

export default SA1;
