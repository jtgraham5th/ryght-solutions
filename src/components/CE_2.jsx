import { useState } from "react";
import { Row, Col, Form, Button, Accordion } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { ClipboardHeartFill } from "react-bootstrap-icons";
import CEAddContainer from "./CE_AddContainer";
import CEFormFamilyPhysician from "./CE_FormFamilyPhysician";
import CEFormInsuranceProvider from "./CE_FormInsuranceProvider";

function CE2({ register, control }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    familyPhysician: false,
    insuranceProvider: false,
    activeForm: () => {},
  });
  const [secondaryIns, toggleSecondaryIns] = useState(false);

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
        <ClipboardHeartFill size={30} className="me-3" />
        <h3>Program & Insurance Information</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-4">
        <h5>Employement Details</h5>
        <Col md={6}>
          <Form.Label className="CE-form-label">Employer</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("employer")}
            type="number"
            name="employer"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("employerphone")}
            type="number"
            name="employerphone"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} >
        <h5>Medical Information</h5>
        <Col md={2}>
          <Form.Label className="CE-form-label">Height</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("height")}
            type="text"
            name="height"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Weight</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("weight")}
            type="number"
            name="weight"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Allergies</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("allergies")}
            type="text"
            name="allergies"
          />
        </Col>

        <Col md={4}>
          <Form.Label className="CE-form-label">
            Family Physician
            <div className="CE-form-label-button-container">
              {addNew.familyPhysician ? (
                <>
                  <Button
                    className="CE-form-label-button me-2"
                    name="familyPhysician"
                    variant="outline-success"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className="CE-form-label-button"
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
                  className="CE-form-label-button"
                  onClick={addItem}
                >
                  new
                </Button>
              )}
            </div>
          </Form.Label>
          <Form.Select
            {...register("physicianid")}
            name="physicianid"
            aria-label="Select Family Physician"
          >
            <option>Select Physician</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <CEAddContainer
        sectionTitle={
          addNew.sectionTitle
            ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
            : ""
        }
        open={addNew.sectionTitle === "familyPhysician"}
        close={closeItem}
        newForm={addNew.activeForm}
      />
      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label">Pharmacy</Form.Label>
          <Form.Select
            {...register("pharmacy")}
            name="pharmacy"
            aria-label="Select Pharmacy Provider"
          >
            <option>Select Pharmacy Provider</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <h5>Primary Insurance Provider</h5>
        <Col md={5}>
          <Form.Label className="CE-form-label">
            Insurance Carrier
            <div className="CE-form-label-button-container">
              {addNew.insuranceProvider ? (
                <>
                  <Button
                    className="CE-form-label-button me-2"
                    name="insuranceProvider"
                    type="submit"
                    variant="outline-success"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className="CE-form-label-button"
                    name="insuranceProvider"
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
                  name="insuranceProvider"
                  className="CE-form-label-button"
                  onClick={addItem}
                >
                  new
                </Button>
              )}
            </div>
          </Form.Label>
          <Form.Select
            {...register("isn2_carrierid")}
            name="isn2_carrierid"
            aria-label="Select Funding Source"
          >
            <option>Select Insurance Provider</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={5}>
          <Form.Label className="CE-form-label">Policy Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("isn2_policynumber")}
            type="number"
            name="isn2_policynumber"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Date Expires</Form.Label>
          <Controller
            control={control}
            name="isn2_dateexpires"
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
      </Form.Group>
      <CEAddContainer
        sectionTitle={
          addNew.sectionTitle
            ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
            : ""
        }
        open={addNew.sectionTitle === "insuranceProvider"}
        close={closeItem}
        newForm={addNew.activeForm}
      />
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Insurance Plan</Form.Label>
          <Form.Select
            {...register("pharmacy")}
            name="ins1_planid"
            aria-label="Select Funding Source"
          >
            <option>Select Insurance Plan</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ins1_phone")}
            type="number"
            name="ins1_phone"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Funding Source</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ins1_fundingsource")}
            type="number"
            name="ins1_fundingsource"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label">Relationship</Form.Label>
          <Form.Select
            {...register("ins1_relationshipid")}
            name="ins1_relationshipid"
            aria-label="Select Funding Source"
          >
            <option>Select Relationship</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={4} className="mt-4">
          <Form.Check
            {...register("ins1_cardavailableid")}
            name="ins1_cardavailableid"
            type="switch"
            id="custom-switch"
            label="Card Available"
          />
        </Col>
      </Form.Group>
      <Accordion defaultActiveKey="0" alwaysOpen className="mb-3 p-0 second-provider">
        <Accordion.Item eventKey="0">
          <Accordion.Header> + Add Secondary Insurance Provider</Accordion.Header>
          <Accordion.Body className="">
            <Form.Group as={Row}>
              <h5>Secondary Insurance Provider</h5>
              <Col md={5}>
                <Form.Label className="CE-form-label">
                  Insurance Carrier
                  <div className="CE-form-label-button-container">
                    {addNew.insuranceProvider ? (
                      <>
                        <Button
                          className="CE-form-label-button me-2"
                          name="insuranceProvider"
                          type="submit"
                          variant="outline-success"
                          size="sm"
                        >
                          Save
                        </Button>
                        <Button
                          className="CE-form-label-button"
                          name="insuranceProvider"
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
                        name="insuranceProvider"
                        className="CE-form-label-button"
                        onClick={addItem}
                      >
                        new
                      </Button>
                    )}
                  </div>
                </Form.Label>
                <Form.Select
                  {...register("ins1_carrierid")}
                  name="ins1_carrierid"
                  aria-label="Select Funding Source"
                >
                  <option>Select Insurance Provider</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={5}>
                <Form.Label className="CE-form-label">Policy Number</Form.Label>
                <Form.Control
                  className="goal-detail-input"
                  {...register("ins1_policynumber")}
                  type="number"
                  name="ins1_policynumber"
                />
              </Col>
              <Col md={2}>
                <Form.Label className="CE-form-label">Date Expires</Form.Label>
                <Controller
                  control={control}
                  name="ins1_dateexpires"
                  render={({ field }) => (
                    <DatePicker
                      className="datePicker"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                    />
                  )}
                />
              </Col>
            </Form.Group>
            <CEAddContainer
              sectionTitle={
                addNew.sectionTitle
                  ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
                  : ""
              }
              open={addNew.sectionTitle === "insuranceProvider"}
              close={closeItem}
              newForm={addNew.activeForm}
            />
            <Form.Group as={Row}>
              <Col md={4}>
                <Form.Label className="CE-form-label">
                  Insurance Plan
                </Form.Label>
                <Form.Select
                  {...register("isn2_planid")}
                  name="isn2_planid"
                  aria-label="Select Funding Source"
                >
                  <option>Select Insurance Plan</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={4}>
                <Form.Label className="CE-form-label">Phone Number</Form.Label>
                <Form.Control
                  className="goal-detail-input"
                  {...register("isn2_phone")}
                  type="number"
                  name="isn2_phone"
                />
              </Col>
              <Col md={4}>
                <Form.Label className="CE-form-label">
                  Funding Source
                </Form.Label>
                <Form.Control
                  className="goal-detail-input"
                  {...register("isn2_fundingsource")}
                  type="number"
                  name="isn2_fundingsource"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Col md={4} className="mt-4">
                <Form.Check
                  {...register("isn2_cardavailableid")}
                  name="isn2_cardavailableid"
                  type="switch"
                  id="custom-switch"
                  label="Card Available"
                />
              </Col>
              <Col md={4}>
                <Form.Label className="CE-form-label">Relationship</Form.Label>
                <Form.Select
                  {...register("isn2_relationshipid")}
                  name="isn2_relationshipid"
                  aria-label="Select Funding Source"
                >
                  <option>Select Relationship</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default CE2;
