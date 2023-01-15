import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../../../context/ClientContext";
import { statesList } from "../../../data/formData";

export function CE1({ register, control, formState }) {
  const { formData } = useClient();
  const { touchedFields, errors } = formState;

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
          <Form.Label className="CE-form-label">First Name *</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pfirstname", { required: true, maxLength: 40 })}
            type="text"
            name="pfirstname"
            isValid={touchedFields.pfirstname && !errors.pfirstname}
            isInvalid={errors.pfirstname}
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Inital</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pinitial", { required: false, maxLength: 1 })}
            type="text"
            name="pinitial"
            isValid={touchedFields.pinitial && !errors.pinitial}
            isInvalid={errors.pinitial}
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">Last Name *</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("plastname", { required: true, maxLength: 40 })}
            type="text"
            name="plastname"
            isValid={touchedFields.plastname && !errors.plastname}
            isInvalid={errors.plastname}
          />
        </Col>
        <Col md={3}>
          <Form.Label className="CE-form-label">
            Preferred Name <small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("preferredname", { maxLength: 40 })}
            type="text"
            name="preferredname"
            isValid={touchedFields.preferredname && !errors.preferredname}
            isInvalid={errors.preferredname}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Form.Label className="CE-form-label mb-2">Marital Status *</Form.Label>
        <div>
          {formData["Marital Status"].map((item, i) => {
            return (
              <Controller
                key={item + i}
                control={control}
                name="maritalstatusid"
                rules={{ valueAsNumber: true }}
                render={({ field, fieldState, formState }) => {
                  return (
                    <Form.Check
                      type="radio"
                      inline
                      {...field}
                      defaultChecked={
                        parseInt(field.value) === parseInt(item.grouplistid)
                      }
                      value={parseInt(item.grouplistid)}
                      onChange={(e) => {
                        return field.onChange(parseInt(item.grouplistid));
                      }}
                      label={item.groupvalue}
                      isValid={fieldState.isTouched && !fieldState.error}
                      isInvalid={fieldState.error}
                    />
                  );
                }}
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
                className="datePicker rounded"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </Col>
        <Col md={6}>
          <Form.Label className="CE-form-label">
            Social Security # *<small>(optional)</small>
          </Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("socsec", { maxLength: 9 })}
            type="password"
            name="socsec"
            isValid={touchedFields.socsec && !errors.socsec}
            isInvalid={errors.socsec}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Sex at birth *</Form.Label>
          <Form.Select
            {...register("sexatbirthid", {
              required: true,
              valueAsNumber: true,
              maxLength: 2,
            })}
            name="sexatbirthid"
            aria-label="Select Sex"
            isValid={touchedFields.sexatbirthid && !errors.sexatbirthid}
            isInvalid={errors.sexatbirthid}
          >
            {formData["Sex At Birth"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Gender *</Form.Label>
          <Form.Select
            {...register("genderid", {
              required: true,
              valueAsNumber: true,
              maxLength: 2,
            })}
            name="genderid"
            aria-label="Select Gender"
            isValid={touchedFields.genderid && !errors.genderid}
            isInvalid={errors.genderid}
          >
            <option>Select Gender</option>
            {formData["Gender Identity"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">
            Preferred Pronouns *
          </Form.Label>
          <Form.Select
            {...register("preferredpronounid", {
              required: true,
              valueAsNumber: true,
              maxLength: 2,
            })}
            name="preferredpronounid"
            aria-label="Select Pronouns"
            isValid={
              touchedFields.preferredpronounid && !errors.preferredpronounid
            }
            isInvalid={errors.preferredpronounid}
          >
            {formData["Preferred Pronouns"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Col md={4}>
          <Form.Label className="CE-form-label">Race *</Form.Label>
          <Form.Select
            {...register("ethnicityid", {
              required: true,
              valueAsNumber: true,
              maxLength: 2,
            })}
            name="ethnicityid"
            aria-label="Select Race"
            isValid={touchedFields.ethnicityid && !errors.ethnicityid}
            isInvalid={errors.ethnicityid}
          >
            <option>Select Race</option>
            {formData["Ethnicity"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Label className="CE-form-label">Religion *</Form.Label>
          <Form.Select
            {...register("religionid", {
              required: true,
              valueAsNumber: true,
              maxLength: 2,
            })}
            name="religionid"
            aria-label="Select Religion"
            isValid={touchedFields.religionid && !errors.religionid}
            isInvalid={errors.religionid}
          >
            <option>Select Religion</option>
            {formData["Religion"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
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
            {...register("paddress", { maxLength: 100 })}
            type="text"
            name="paddress"
            isValid={touchedFields.paddress && !errors.paddress}
            isInvalid={errors.paddress}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pcity", { maxLength: 100 })}
            type="text"
            name="pcity"
            isValid={touchedFields.pcity && !errors.pcity}
            isInvalid={errors.pcity}
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
          <Form.Select
            {...register("pstate", { maxLength: 2 })}
            name="pstate"
            aria-label="Select State"
            isValid={touchedFields.pstate && !errors.pstate}
            isInvalid={errors.pstate}
          >
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
            {...register("pZip", { valueAsNumber: true, maxLength: 15 })}
            type="number"
            name="pZip"
            isValid={touchedFields.pZip && !errors.pZip}
            isInvalid={errors.pZip}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={2}>
          <Form.Label className="CE-form-label">Phone 1</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pphone1", { maxLength: 15 })}
            type="number"
            name="pphone1"
            isValid={touchedFields.pphone1 && !errors.pphone1}
            isInvalid={errors.pphone1}
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <Form.Select
            {...register("pphone1type", { valueAsNumber: true, maxLength: 2 })}
            name="pphone1type"
            aria-label="Select State"
            isValid={touchedFields.pphone1type && !errors.pphone1type}
            isInvalid={errors.pphone1type}
          >
            {formData["PhoneType"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Phone 2</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("pphone2", { valueAsNumber: true, maxLength: 15 })}
            type="number"
            name="pphone2"
            isValid={touchedFields.pphone2 && !errors.pphone2}
            isInvalid={errors.pphone2}
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <Form.Select
            {...register("pphone2type", { valueAsNumber: true, maxLength: 2 })}
            name="pphone2type"
            aria-label="Select State"
            isValid={touchedFields.pphone2type && !errors.pphone2type}
            isInvalid={errors.pphone2type}
          >
            {formData["PhoneType"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
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
            {...register("email", { maxLength: 100 })}
            type="email"
            name="email"
            isValid={touchedFields.email && !errors.email}
            isInvalid={errors.email}
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
            {...register("ecName", { maxLength: 100 })}
            type="text"
            name="ecName"
            isValid={touchedFields.ecName && !errors.ecName}
            isInvalid={errors.ecName}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Relationship</Form.Label>
          <Form.Select
            {...register("ecRelationship", {
              valueAsNumber: true,
              maxLength: 2,
            })}
            name="ecRelationship"
            aria-label="Select Relationship"
            isValid={touchedFields.ecRelationship && !errors.ecRelationship}
            isInvalid={errors.ecRelationship}
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
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <Form.Label className="CE-form-label">Street Address</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ecAddress", { maxLength: 100 })}
            type="text"
            name="ecAddress"
            isValid={touchedFields.ecAddress && !errors.ecAddress}
            isInvalid={errors.ecAddress}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">City</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ecCity", { maxLength: 100 })}
            type="text"
            name="ecCity"
            isValid={touchedFields.ecCity && !errors.ecCity}
            isInvalid={errors.ecCity}
          />
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">State</Form.Label>
          <Form.Select
            {...register("ecState", { maxLength: 2 })}
            name="ecState"
            aria-label="Select State"
            isValid={touchedFields.ecState && !errors.ecState}
            isInvalid={errors.ecState}
          >
            {statesList.map((state, index) => {
              return (
                <option key={index} value={state}>
                  {state}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label className="CE-form-label">Zip Code</Form.Label>
          <Form.Control
            className="goal-detail-input"
            {...register("ecZip", { valueAsNumber: true, maxLength: 15 })}
            type="number"
            name="ecZip"
            isValid={touchedFields.ecZip && !errors.ecZip}
            isInvalid={errors.ecZip}
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
            {...register("ecPhone", { maxLength: 15 })}
            type="number"
            name="ecPhone"
            isValid={touchedFields.ecPhone && !errors.ecPhone}
            isInvalid={errors.ecPhone}
          />
        </Col>
        <Col md={4}>
          <Form.Label className="CE-form-label">Phone Type</Form.Label>
          <Form.Select
            {...register("ecPhoneType", { valueAsNumber: true, maxLength: 2 })}
            name="ecPhoneType"
            aria-label="Select State"
            isValid={touchedFields.ecPhoneType && !errors.ecPhoneType}
            isInvalid={errors.ecPhoneType}
          >
            {formData["PhoneType"].map((item, i) => {
              return (
                <option key={i} value={item.grouplistid}>
                  {item.groupvalue}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>
    </>
  );
}
