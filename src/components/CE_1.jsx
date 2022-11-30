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
        <Col md={3}>
          <Form.Label className="CE-form-label">First Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pfirstname")}
            type="text"
            name="pfirstname"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Last Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("plastname")}
            type="text"
            name="plastname"
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Last Name</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pinitial")}
            type="text"
            name="pinitial"
          />
        </Col>
        <Col md={3}>
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
        <Col md={6}>
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
        <Col md={6}>
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
      </Form.Group>
      <Form.Group as={Row} >
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
            {...register("genderid")}
            name="genderid"
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
          <Form.Label className="CE-form-label">Preferred Pronouns</Form.Label>
          <Form.Select
            {...register("preferredpronounid")}
            name="preferredpronounid"
            aria-label="Select Pronouns"
          >
            {formData["Preferred Pronouns"].map((item, i) => {
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
            })}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <h5>Home Address</h5>
        <Col md={4}>
          <Form.Label className="CE-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("paddress")}
            type="text"
            name="paddress"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pcity")}
            type="text"
            name="pcity"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
          <Form.Select
            {...register("pstate")}
            name="pstate"
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
            {...register("pzipCode")}
            type="number"
            name="pzipCode"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={2}>
          <Form.Label className="CE-form-label">Phone 1</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pphone1")}
            type="number"
            name="pphone1"
          />
        </Col>
        <Col md={2}>
        <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <Form.Select
            {...register("pphone1type")}
            name="pphone1type"
            aria-label="Select State"
          >
            {formData["PhoneType"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Phone 2</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pphone2")}
            type="number"
            name="pphone2"
          />
        </Col>
        <Col md={2}>
        <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <Form.Select
            {...register("pphone2type")}
            name="pphone2type"
            aria-label="Select State"
          >
            {formData["PhoneType"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Phone 3</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pphone3")}
            type="number"
            name="pphone3"
          />
        </Col>
        <Col md={2}>
        <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <Form.Select
            {...register("pphone3type")}
            name="pphone3type"
            aria-label="Select State"
          >
            {formData["PhoneType"].map((item, i) => {
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
            {...register("ecName")}
            type="text"
            name="ecName"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Relationship</Form.Label>
          <Form.Select
            {...register("ecRelationship")}
            name="ecRelationship"
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
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ecAddress")}
            type="text"
            name="ecAddress"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ecCity")}
            type="text"
            name="ecCity"
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
          <Form.Select
            {...register("ecState")}
            name="ecState"
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
            {...register("ecZip")}
            type="number"
            name="ecZip"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Phone <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ecPhone")}
            type="number"
            name="ecPhone"
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <Form.Select
            {...register("ecPhoneType")}
            name="ecPhoneType"
            aria-label="Select State"
          >
            {formData["PhoneType"].map((item, i) => {
              return (
                <option key={i} value={item.listId}>
                  {item.listItem}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>
    </>
  );
}

export default CE1;
