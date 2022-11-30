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

function BPS1({ register, control }) {
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
        <h3>Assessment Information</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="CE-form-label">Client Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pfirstname")}
            type="text"
            name="pfirstname"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Assessment Date</Form.Label>
          <Controller
            control={control}
            name="dob"
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
          <Form.Label className="CE-form-label">Assessor Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pinitial")}
            type="text"
            name="pinitial"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={6}>
          <Form.Label className="CE-form-label">
            Parent/Guardian Name
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("PGName")}
            type="text"
            name="PGName"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Home Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("homePhone")}
            type="number"
            name="homePhone"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Mobile Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("mobilePhone")}
            type="number"
            name="mobilePhone"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("address")}
            type="text"
            name="address"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("city")}
            type="text"
            name="city"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
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
          <Form.Label className="CE-form-label">Zip Code</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("zipCode")}
            type="number"
            name="zipCode"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={3}>
          <Form.Label className="CE-form-label">Date of Birth</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("PGName")}
            type="text"
            name="PGName"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Age</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("PGName")}
            type="text"
            name="PGName"
          />
        </Col>

        <Col md={3}>
          <Form.Label className="CE-form-label">Race</Form.Label>
          <Form.Select
            {...register("ethnicityid")}
            name="ethnicityid"
            aria-label="Select Race"
          >
            <option>Select Race</option>
            {/* {formData["Ethnicity"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })} */}
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label className="CE-form-label">Gender</Form.Label>
          <Form.Select
            {...register("genderid")}
            name="genderid"
            aria-label="Select Gender"
          >
            <option>Select Gender</option>
            {/* {formData["Gender Identity"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })} */}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={6}>
          <Form.Label className="CE-form-label">Social Security #</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("socsec")}
            type="password"
            name="socsec"
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">Current Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("socsec")}
            type="password"
            name="socsec"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Col md={4}>
          <Form.Label className="CE-form-label">Emergency Contact</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("socsec")}
            type="password"
            name="socsec"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Relationship</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("socsec")}
            type="password"
            name="socsec"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Contact Telephone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("socsec")}
            type="password"
            name="socsec"
          />
        </Col>
      </Form.Group>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <h5>Insurance Information</h5>
        <Col md={12}>
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Medicaid Standard"
            label="Medicaid Standard"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Amerigroup"
            label="Amerigroup"
          />
          <Form.Check
            inline
            {...register("maritalStatus")}
            type="radio"
            name="maritalStatus"
            value="Cenpatico"
            label="Cenpatico"
          />
          <Form.Check
            inline
            type="radio"
            {...register("maritalStatus")}
            name="maritalStatus"
            value="None/Fee-for-Services"
            label="None/Fee-for-Services"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default BPS1;
