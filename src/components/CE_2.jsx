import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
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
    }
  };

  return (
    <>
      <div className="CE-section-title">
        <ClipboardHeartFill size={30} className="me-3" />
        <h3>Program & Insurance Information</h3>
      </div>
      <hr />
      <Form.Group as={Row}>
        <h5>Program Information</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">Program</Form.Label>
          <Form.Select
            {...register("program")}
            name="program"
            aria-label="Select Program"
          >
            <option>Select Program</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Start Date</Form.Label>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Service Requested <small>(optional)</small>
          </Form.Label>
          <Form.Select
            {...register("serviceRequested")}
            name="serviceRequested"
            aria-label="Select Requested"
          >
            <option>Select Service</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Record ID # <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("recordID")}
            type="number"
            name="recordID"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <h5>Insurance Information</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">Allergies</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("allergies")}
            type="number"
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
            {...register("familyPhysician")}
            name="familyPhysician"
            aria-label="Select Family Physician"
          >
            <option>Select Physician</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
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
      <Form.Group as={Row}>
        <Col md={6}>
          <Form.Label className="CE-form-label">Insurance Provider <div className="CE-form-label-button-container">
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
            </div></Form.Label>
          <Form.Select
            {...register("insuranceProvider")}
            name="insuranceProvider"
            aria-label="Select Insurance Provider"
          >
            <option>Select Insurance Provider</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">Policy Number</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("policyNumber")}
            type="number"
            name="policyNumber"
          />
        </Col>
      </Form.Group>
      <CEAddContainer
        sectionTitle={
          addNew.sectionTitle
            ? addNew.sectionTitle.split(/(?=[A-Z])/).join(" ")
            : ""
        }
        open={addNew.sectionTitle === "insuranceProvider" }
        close={closeItem}
        newForm={addNew.activeForm}
      />

      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label">Effective Date</Form.Label>
          <Controller
            control={control}
            name="effectiveDate"
            render={({ field }) => (
              <DatePicker
                className="datePicker"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Expiration Date</Form.Label>
          <Controller
            control={control}
            name="expirationDate"
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
      <Form.Group as={Row}>
        <Col md={5}>
          <Form.Check
            {...register("diffClient")}
            type="switch"
            inline
            name="diffClient"
            label="Subscriber is different from client"
          />{" "}
        </Col>
      </Form.Group>
    </>
  );
}

export default CE2;
