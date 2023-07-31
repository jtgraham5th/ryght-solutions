import { useState, useRef, useEffect } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { SelectField, TextField } from "../../../components/form/fieldCreator";
import { getUserFields, parseDefaultSignUpData } from "../utils/parseData";
import { useClient } from "../../../context/ClientContext";
import { formatPhoneNumber } from "../../enrollment/utils/formhelper";
import { statesList } from "../../../data/formData";

export function Register({
  userData,
  onSubmit,
  register,
  control,
  formState,
  reset,
  watch,
  edit,
}) {
  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      reset(parseDefaultSignUpData(true, userData));
    } else {
      console.log(parseDefaultSignUpData(false));
      reset(parseDefaultSignUpData(false));
    }
  }, [userData]);

  const [signupStatus, setSignupStatus] = useState(true);
  const { touchedFields, errors } = formState;

  const password = useRef({});
  password.current = watch("password", "");
  const { signup, updateCurrentUser } = useUser();
  const { formData } = useClient();
  const navigate = useNavigate();

  return (
    <div className="w-100">
      {!signupStatus ? (
        <Alert variant="danger">Login Failed, Please try again.</Alert>
      ) : null}
      <Form.Group as={Row}>
        <Col md={4}>
          <TextField
            register={register}
            labelName="First Name"
            fieldName="firstname"
            fieldOptions={{ required: true, maxLength: 40 }}
            fieldStyle="mb-4"
            isValid={touchedFields.firstname && !errors.firstname}
            isInvalid={errors.firstname}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Last Name"
            fieldName="lastname"
            fieldOptions={{ required: true, maxLength: 40 }}
            fieldStyle="mb-4"
            isValid={touchedFields.lastname && !errors.lastname}
            isInvalid={errors.lastname}
            readOnly={!edit}
          />
        </Col>
        <Col md={3}>
          <TextField
            register={register}
            labelName="Company ID"
            fieldName="companyid"
            isValid={touchedFields.companyid && !errors.companyid}
            isInvalid={errors.companyid}
            disabled={true}
            readOnly={!edit}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Email"
            fieldName="email"
            fieldType="email"
            fieldOptions={{ required: true }}
            fieldStyle="mb-4"
            isValid={touchedFields.email && !errors.email}
            isInvalid={errors.email}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Credentials"
            fieldName="credentials"
            fieldOptions={{ required: true, maxLength: 40 }}
            isValid={touchedFields.Credentials && !errors.Credentials}
            isInvalid={errors.Credentials}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <SelectField
            register={register}
            labelName="Staff Title"
            groupName="Staff Title"
            fieldName="title"
            fieldStyle="mb-4"
            labelStyle="w-50 m-0 pe-1 small"
            readOnly={!edit}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Password"
            fieldName="password"
            fieldType="password"
            fieldOptions={{
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            fieldStyle="mb-4"
            isValid={touchedFields.password && !errors.password}
            isInvalid={errors.password}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Confirm Password"
            fieldName="passwordconfirm"
            fieldType="password"
            fieldOptions={{
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: (value, formValues) =>
                password.current === value || "Passwords do not Match",
            }}
            fieldStyle="mb-4"
            isValid={touchedFields.passwordconfirm && !errors.passwordconfirm}
            isInvalid={errors.passwordconfirm}
            readOnly={!edit}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <h5>Home Address</h5>
        <Col md={4}>
          <TextField
            register={register}
            labelName="Street Address"
            fieldName="street1"
            fieldOptions={{ maxLength: 100 }}
            isValid={touchedFields.Street1 && !errors.Street1}
            isInvalid={errors.Street1}
            readOnly={!edit}
          />
        </Col>
        <Col md={4}>
          <TextField
            register={register}
            labelName="City"
            fieldName="city"
            fieldOptions={{ maxLength: 100 }}
            isValid={touchedFields.City && !errors.City}
            isInvalid={errors.City}
            readOnly={!edit}
          />
        </Col>
        <Col md={2}>
          <SelectField
            register={register}
            labelName="State"
            fieldName="state"
            fieldOptions={{ maxLength: 2 }}
            listData={statesList}
            isValid={touchedFields.State && !errors.State}
            isInvalid={errors.State}
            readOnly={!edit}
          />
        </Col>
        <Col md={2}>
          <TextField
            register={register}
            labelName="Zip Code"
            fieldName="zip"
            fieldType="number"
            fieldOptions={{ valueAsNumber: true, maxLength: 15 }}
            isValid={touchedFields.Zip && !errors.Zip}
            isInvalid={errors.Zip}
            readOnly={!edit}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col md={4}>
          <Controller
            control={control}
            name="phone1"
            rules={{ minLength: 10 }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  labelName="Phone 1"
                  maxLength="13"
                  isValid={touchedFields.phone1 && !errors.phone1}
                  isInvalid={errors.phone1}
                  onBlur={(e) => {
                    e.target.value = formatPhoneNumber(e.target.value);
                    field.onBlur(e);
                    field.onChange(e);
                  }}
                  readOnly={!edit}
                />
              );
            }}
          />
        </Col>
        <Col md={4}>
          <Controller
            control={control}
            name="phone2"
            rules={{ minLength: 10 }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  labelName="Phone 2"
                  maxLength="13"
                  isValid={touchedFields.phone2 && !errors.phone2}
                  isInvalid={errors.phone2}
                  onBlur={(e) => {
                    e.target.value = formatPhoneNumber(e.target.value);
                    field.onBlur(e);
                    field.onChange(e);
                  }}
                  readOnly={!edit}
                />
              );
            }}
          />
        </Col>
      </Form.Group>
    </div>
  );
}
