import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../data/ClientContext";
import { statesList } from "../data/formData";

function CE1({ register, control }) {
  const { formData } = useClient();

  return (
    <>
      <div className="CE-section-title">
        <PersonLinesFill size={30} className="me-3" />
        <h3>Demographics</h3>
      </div>
      <hr />
      <Form.Group as={Row} className="mb-2">
        <h5>Personal Information</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">First Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("firstname")}
            type="text"
            name="firstname"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Last Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("lastname")}
            type="text"
            name="lastname"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Preferred Name <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("preferredname")}
            type="text"
            name="preferredname"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="CE-form-label mb-2">Marital Status</Form.Label>
        <div>
          {formData["Marital Status"].map((item, i) => {
            return (
              <Form.Check
                inline
                {...register("maritalstatusid")}
                type="radio"
                name="maritalstatusid"
                value={item.listId}
                label={item.listItem}
              />
            );
          })}
        </div>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="CE-form-label">Date of Birth</Form.Label>
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
          <Form.Label className="CE-form-label">
            Social Security # <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("socsec")}
            type="password"
            name="socsec"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Race</Form.Label>
          <Form.Select
            {...register("ethnicityid")}
            name="ethnicityid"
            aria-label="Select Race"
          >
            <option>Select Race</option>
            {formData["Ethnicity"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Col md={4}>
          <Form.Label className="CE-form-label">Sex at birth</Form.Label>
          <Form.Select
            {...register("sexatbirthid")}
            name="sexatbirthid"
            aria-label="Select Sex"
          >
            {formData["Sex At Birth"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Gender</Form.Label>
          <Form.Select
            {...register("genderidentityid")}
            name="genderidentityid"
            aria-label="Select Gender"
          >
            <option>Select Gender</option>
            {formData["Gender Identity"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Religion</Form.Label>
          <Form.Select
            {...register("religionid")}
            name="religionid"
            aria-label="Select Religion"
          >
          <option>Select Religion</option>
          {formData["Religion"].map((item, i) => {
            return (
              <option key={i} value={item.listId}>
                {item.listItem}
              </option>
            );
          })}</Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <h5>Home Address</h5>
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
            {statesList.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
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
      <Form.Group as={Row} className="mb-5">
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("phone")}
            type="number"
            name="phone"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <Form.Select
            {...register("phoneType")}
            name="phoneType"
            aria-label="Select Phone Type"
          >
            {formData["PhoneType"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
          </Form.Select>{" "}
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Email Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("email")}
            type="email"
            name="email"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <h5>Emergency Contact</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Name <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("emergencyContact")}
            type="text"
            name="emergencyContact"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Phone <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("emergencyPhone")}
            type="number"
            name="emergencyPhone"
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default CE1;
