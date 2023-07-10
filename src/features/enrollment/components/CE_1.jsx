import { Row, Col, Form } from "react-bootstrap";
import "./CE_Manager.css";
import { Controller } from "react-hook-form";
import { PersonLinesFill } from "react-bootstrap-icons";
import { useClient } from "../../../context/ClientContext";
import { statesList } from "../../../data/formData";
import {
  DateField,
  SelectField,
  TextField,
} from "../../../components/form/fieldCreator";

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
          <TextField
            register={register}
            labelName="First Name"
            fieldName="pfirstname"
            fieldOptions={{ required: true, maxLength: 40 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.pfirstname && !errors.pfirstname}
            isInvalid={errors.pfirstname}
          />
        </Col>
        <Col md={2}>
          <TextField
            register={register}
            labelName="Initial"
            fieldName="pinitial"
            fieldOptions={{ required: false, maxLength: 1 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.pinitial && !errors.pinitial}
            isInvalid={errors.pinitial}
          />
        </Col>
        <Col md={3}>
          <TextField
            register={register}
            labelName="Last Name"
            fieldName="plastname"
            fieldOptions={{ required: true, maxLength: 40 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.plastname && !errors.plastname}
            isInvalid={errors.plastname}
          />
        </Col>
        <Col md={3}>
          <TextField
            register={register}
            labelName="Preferred Name"
            fieldName="preferredname"
            fieldOptions={{ maxLength: 40 }}
            labelStyle="CE-form-label"
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
          <DateField
            control={control}
            labelName="Date of Birth"
            fieldName="dob"
            labelStyle="CE-form-label"
            fieldStyle="rounded"
          />
        </Col>
        <Col md={6}>
          <TextField
            register={register}
            labelName="Social Security #"
            fieldName="socsec"
            fieldType="password"
            fieldOptions={{ maxLength: 9 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.socsec && !errors.socsec}
            isInvalid={errors.socsec}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <SelectField
            register={register}
            labelName="Sex at birth"
            fieldName="sexatbirthid"
            groupName="Sex At Birth"
            labelStyle="CE-form-label"
            fieldOptions={{ required: true, valueAsNumber: true, maxLength: 2 }}
            isValid={touchedFields.sexatbirthid && !errors.sexatbirthid}
            isInvalid={errors.sexatbirthid}
          />
        </Col>
        <Col md={4}>
          <SelectField
            register={register}
            labelName="Gender"
            fieldName="genderid"
            fieldOptions={{ required: true, valueAsNumber: true, maxLength: 2 }}
            groupName="Gender Identity"
            labelStyle="CE-form-label"
            isValid={touchedFields.genderid && !errors.genderid}
            isInvalid={errors.genderid}
          />
        </Col>
        <Col md={4}>
          <SelectField
            register={register}
            labelName="Preferred Pronouns"
            fieldName="preferredpronounid"
            fieldOptions={{ required: true, valueAsNumber: true, maxLength: 2 }}
            groupName="Preferred Pronouns"
            labelStyle="CE-form-label"
            isValid={
              touchedFields.preferredpronounid && !errors.preferredpronounid
            }
            isInvalid={errors.preferredpronounid}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Col md={4}>
          <SelectField
            register={register}
            labelName="Race"
            fieldName="ethnicityid"
            fieldOptions={{ required: true, valueAsNumber: true, maxLength: 2 }}
            groupName="Ethnicity"
            labelStyle="CE-form-label"
            isValid={touchedFields.ethnicityid && !errors.ethnicityid}
            isInvalid={errors.ethnicityid}
          />
        </Col>

        <Col md={4}>
          <SelectField
            register={register}
            labelName="Religion"
            fieldName="religionid"
            fieldOptions={{ required: true, valueAsNumber: true, maxLength: 2 }}
            groupName="Religion"
            labelStyle="CE-form-label"
            isValid={touchedFields.religionid && !errors.religionid}
            isInvalid={errors.religionid}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <h5>Home Address</h5>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Street Address"
            fieldName="paddress"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.paddress && !errors.paddress}
            isInvalid={errors.paddress}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="City"
            fieldName="pcity"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.pcity && !errors.pcity}
            isInvalid={errors.pcity}
          />
        </Col>
        <Col md={2}>
          <SelectField
            register={register}
            labelName="State"
            fieldName="pstate"
            fieldOptions={{ maxLength: 2 }}
            listData={statesList}
            labelStyle="CE-form-label"
            isValid={touchedFields.pstate && !errors.pstate}
            isInvalid={errors.pstate}
          />
        </Col>
        <Col md={2}>
          <TextField
            register={register}
            labelName="Zip Code"
            fieldName="pZip"
            fieldType="number"
            fieldOptions={{ valueAsNumber: true, maxLength: 15 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.pZip && !errors.pZip}
            isInvalid={errors.pZip}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={2}>
          <TextField
            register={register}
            labelName="Phone 1"
            fieldName="pphone1"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.pphone1 && !errors.pphone1}
            isInvalid={errors.pphone1}
          />
        </Col>
        <Col md={2}>
          <SelectField
            register={register}
            labelName="Phone Type"
            fieldName="pphone1type"
            fieldOptions={{ valueAsNumber: true, maxLength: 2 }}
            groupName="PhoneType"
            labelStyle="CE-form-label"
            isValid={touchedFields.pphone1type && !errors.pphone1type}
            isInvalid={errors.pphone1type}
          />
        </Col>
        <Col md={2}>
          <TextField
            register={register}
            labelName="Phone 2"
            fieldName="pphone2"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.pphone2 && !errors.pphone2}
            isInvalid={errors.pphone2}
          />
        </Col>
        <Col md={2}>
          <SelectField
            register={register}
            labelName="Phone Type"
            fieldName="pphone2type"
            fieldOptions={{ valueAsNumber: true, maxLength: 2 }}
            groupName="PhoneType"
            labelStyle="CE-form-label"
            isValid={touchedFields.pphone2type && !errors.pphone2type}
            isInvalid={errors.pphone2type}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5">
        <Col md={4}>
          <TextField
            register={register}
            labelName="Email Address"
            fieldName="email"
            fieldType="email"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.email && !errors.email}
            isInvalid={errors.email}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <h5>Emergency Contact</h5>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Name"
            fieldName="ecName"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.ecName && !errors.ecName}
            isInvalid={errors.ecName}
          />
        </Col>
        <Col md={4}>
          <SelectField
            register={register}
            labelName="Relationship"
            fieldName="ecRelationship"
            fieldOptions={{ valueAsNumber: true, maxLength: 2 }}
            groupName="Relationship"
            labelStyle="CE-form-label"
            isValid={touchedFields.ecRelationship && !errors.ecRelationship}
            isInvalid={errors.ecRelationship}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Address"
            fieldName="ecAddress"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.ecAddress && !errors.ecAddress}
            isInvalid={errors.ecAddress}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="City"
            fieldName="ecCity"
            fieldOptions={{ maxLength: 100 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.ecCity && !errors.ecCity}
            isInvalid={errors.ecCity}
          />
        </Col>
        <Col md={2}>
          <SelectField
            register={register}
            labelName="State"
            fieldName="ecState"
            fieldOptions={{ maxLength: 2 }}
            listData={statesList}
            labelStyle="CE-form-label"
            isValid={touchedFields.ecState && !errors.ecState}
            isInvalid={errors.ecState}
          />
        </Col>
        <Col md={2}>
          <TextField
            register={register}
            labelName="Zip Code"
            fieldName="ecZip"
            fieldType="number"
            fieldOptions={{ valueAsNumber: true, maxLength: 15 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.ecZip && !errors.ecZip}
            isInvalid={errors.ecZip}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-2">
        <Col md={4}>
          <TextField
            register={register}
            labelName="Phone 1"
            fieldName="ecPhone"
            fieldType="number"
            fieldOptions={{ maxLength: 15 }}
            labelStyle="CE-form-label"
            isValid={touchedFields.ecPhone && !errors.ecPhone}
            isInvalid={errors.ecPhone}
          />
        </Col>
        <Col md={4}>
          <SelectField
            register={register}
            labelName="Phone Type"
            fieldName="ecPhoneType"
            fieldOptions={{ valueAsNumber: true, maxLength: 2 }}
            groupName="PhoneType"
            labelStyle="CE-form-label"
            isValid={touchedFields.ecPhoneType && !errors.ecPhoneType}
            isInvalid={errors.ecPhoneType}
          />
        </Col>
      </Form.Group>
    </>
  );
}
