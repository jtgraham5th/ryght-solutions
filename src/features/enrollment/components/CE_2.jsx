import { useState } from "react";
import { Row, Col, Form, Button, Accordion } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { ClipboardHeartFill } from "react-bootstrap-icons";
import { useClient } from "../../../context/ClientContext";
import { FormAddContainer } from "../../../components/form/Form_AddContainer";
import { FormFamilyPhysician } from "../../../components/form/Form_FamilyPhysician";
import { FormInsuranceProvider } from "../../../components/form/Form_InsuranceProvider";
import { CEFormPharmacy } from "./CE_FormPharmacy";

export function CE2({ register, control, setValue, formState }) {
  const [addNew, setAddNew] = useState({
    sectionTitle: "",
    pharmacy: false,
    familyPhysician: false,
    insuranceProvider: false,
    activeForm: () => {},
  });
  const { formData, activeContacts } = useClient();
  const { touchedFields, errors } = formState;
  
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
      case "pharmacy":
        return CEFormPharmacy;
      case "insuranceProvider":
        return FormInsuranceProvider;
      default:
        return FormFamilyPhysician;
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
            {...register("employer", { maxLength: 40 })}
            type="text"
            name="employer"
            isValid={touchedFields.employer && !errors.employer}
            isInvalid={errors.employer}
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">Phone Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("employerphone", { maxLength: 15 })}
            type="number"
            name="employerphone"
            isValid={touchedFields.employerphone && !errors.employerphone}
            isInvalid={errors.employerphone}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <h5>Medical Information</h5>
        <Col md={2}>
          <Form.Label className="CE-form-label">Height</Form.Label>
          <Form.Control
            disabled
            className="goal-detail-input"
            // {...register("height")}
            type="text"
            name="height"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Weight</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("weight", { maxLength: 3 })}
            type="number"
            name="weight"
            isValid={touchedFields.weight && !errors.weight}
            isInvalid={errors.weight}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Allergies</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("allergies", { maxLength: 40 })}
            type="text"
            name="allergies"
            isValid={touchedFields.allergies && !errors.allergies}
            isInvalid={errors.allergies}
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
            isValid={touchedFields.physicianid && !errors.physicianid}
            isInvalid={errors.physicianid}
          >
            {formData["Physician"] &&
              formData["Physician"].map((item, i) => {
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
            Pharmacy
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
            isValid={
              touchedFields.pharmacyproviderid && !errors.pharmacyproviderid
            }
            isInvalid={errors.pharmacyproviderid}
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
      <FormAddContainer
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
            isValid={
              touchedFields.ins1_fundingsource && !errors.ins1_fundingsource
            }
            isInvalid={errors.ins1_fundingsource}
          >
            {formData["Funding Source "].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
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
            isValid={
              touchedFields.ins1_policynumber && !errors.ins1_policynumber
            }
            isInvalid={errors.ins1_policynumber}
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
      <FormAddContainer
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
        {/* <Col md={4}>
          <Form.Label className="CE-form-label">Relationship</Form.Label>
          <Form.Select
            {...register("ins1_relationshipid")}
            name="ins1_relationshipid"
            aria-label="Select Funding Source"
          >
            {formData["Relationship"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col> */}
        <Col md={4} className="mt-4">
          <Form.Check
            {...register("ins1_cardavailableid")}
            name="ins1_cardavailableid"
            type="switch"
            id="custom-switch"
            label="Card Available"
            isValid={
              touchedFields.ins1_cardavailableid && !errors.ins1_cardavailableid
            }
            isInvalid={errors.ins1_cardavailableid}
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
                  isValid={
                    touchedFields.ins2_fundingsource &&
                    !errors.ins2_fundingsource
                  }
                  isInvalid={errors.ins2_fundingsource}
                >
                  {formData["Funding Source "].map((item, i) => {
                    return (
                      <option key={i} value={item.grouplistid}>
                        {item.groupvalue}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col md={5}>
                <Form.Label className="CE-form-label">Policy Number</Form.Label>
                <Form.Control
                  className="goal-detail-input"
                  {...register("ins2_policynumber", { maxLength: 15 })}
                  type="text"
                  name="ins2_policynumber"
                  isValid={
                    touchedFields.ins2_policynumber && !errors.ins2_policynumber
                  }
                  isInvalid={errors.ins2_policynumber}
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
            <FormAddContainer
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
                  isValid={
                    touchedFields.ins2_relationshipid &&
                    !errors.ins2_relationshipid
                  }
                  isInvalid={errors.ins2_relationshipid}
                >
                  {formData["Relationship"].map((item, i) => {
                    return (
                      <option key={i} value={item.grouplistid}>
                        {item.groupvalue}
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
                  label="Card Available"
                  isValid={
                    touchedFields.ins2_cardavailableid &&
                    !errors.ins2_cardavailableid
                  }
                  isInvalid={errors.ins2_cardavailableid}
                />
              </Col>
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
