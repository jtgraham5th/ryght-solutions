import { useState } from "react";
import { Row, Col, Form, Button, Accordion } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { ClipboardHeartFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import CEAddContainer from "./CE_AddContainer";
import CEFormFamilyPhysician from "./CE_FormFamilyPhysician";
import CEFormInsuranceProvider from "./CE_FormInsuranceProvider";
import CEFormPharmacy from "./CE_FormPharmacy";

function CE2({ register, control, setValue }) {
  const { formData } = useClient();
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    pharmacy: false,
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
      case "pharmacy":
        return CEFormPharmacy;
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
            type="text"
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
      <Form.Group as={Row} className="mb-3">
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
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
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
            {formData["Physicians"] &&
              formData["Physicians"].map((item, i) => {
                return (
                  <option key={i} value={item.contactid}>
                    {item.name}
                  </option>
                );
              })}
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Label className="CE-form-label">
            Pharmacy{" "}
            <div className="CE-form-label-button-container">
              {addNew.pharmacy ? (
                <>
                  <Button
                    className="CE-form-label-button me-2"
                    name="pharmacy"
                    variant="outline-success"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className="CE-form-label-button"
                    name="pharmacy"
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
                  name="pharmacy"
                  className="CE-form-label-button"
                  onClick={addItem}
                >
                  new
                </Button>
              )}
            </div>
          </Form.Label>
          <Form.Select
            {...register("pharmacyproviderid")}
            name="pharmacyproviderid"
            aria-label="Select Pharmacy Provider"
          >
            {formData["Pharmacy"] &&
              formData["Pharmacy"].map((item, i) => {
                return (
                  <option key={i} value={item.contactid}>
                    {item.name}
                  </option>
                );
              })}
          </Form.Select>
        </Col>
      </Form.Group>
      <CEAddContainer
        sectionTitle={
          addNew.sectionTitle
            ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
            : ""
        }
        open={
          addNew.sectionTitle === "familyPhysician" ||
          addNew.sectionTitle === "pharmacy"
        }
        close={closeItem}
        newForm={addNew.activeForm}
        setValue={setValue}
      />

      <Form.Group as={Row}>
        <h5>Primary Insurance Provider</h5>
        <Col md={5}>
          <Form.Label className="CE-form-label">
            Funding Source
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
                  disabled
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
            {...register("ins1_fundingsource")}
            name="ins1_fundingsource"
            aria-label="Select Funding Source"
          >
            {formData["Funding Source "].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={5}>
          <Form.Label className="CE-form-label">Policy Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ins1_policynumber")}
            type="text"
            name="ins1_policynumber"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Date Expires</Form.Label>
          <Controller
            control={control}
            name="ins2_dateexpires"
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
      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label">Relationship</Form.Label>
          <Form.Select
            {...register("ins1_relationshipid")}
            name="ins1_relationshipid"
            aria-label="Select Funding Source"
          >
            {formData["Relationship"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
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
      <Accordion disabled className="mb-3 p-0 second-provider">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            + Add Secondary Insurance Provider
          </Accordion.Header>
          <Accordion.Body className="">
            <Form.Group as={Row}>
              <h5>Secondary Insurance Provider</h5>
              <Col md={5}>
                <Form.Label className="CE-form-label">
                  Funding Source
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
                        disabled
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
                  {...register("ins2_fundingsource")}
                  name="ins2_fundingsource"
                  aria-label="Select Funding Source"
                >
                  {formData["Funding Source "].map((item, i) => {
                    return (
                      <option key={i} value={item.listId}>
                        {item.listItem}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={5}>
                <Form.Label className="CE-form-label">Policy Number</Form.Label>
                <Form.Control
                  className="goal-detail-input"
                  {...register("ins2_policynumber")}
                  type="text"
                  name="ins2_policynumber"
                />
              </Col>
              <Col md={2}>
                <Form.Label className="CE-form-label">Date Expires</Form.Label>
                <Controller
                  control={control}
                  name="ins2_dateexpires"
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
            <Form.Group as={Row} className="mb-4">
              <Col md={4}>
                <Form.Label className="CE-form-label">Relationship</Form.Label>
                <Form.Select
                  {...register("ins2_relationshipid")}
                  name="ins2_relationshipid"
                  aria-label="Select Funding Source"
                >
                  {formData["Relationship"].map((item, i) => {
                    return (
                      <option key={i} value={item.listId}>
                        {item.listItem}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={4} className="mt-4">
                <Form.Check
                  {...register("ins2_cardavailableid")}
                  name="ins2_cardavailableid"
                  type="switch"
                  id="custom-switch"
                  label="Card Available"
                />
              </Col>
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default CE2;
