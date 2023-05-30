import { useState, useRef } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { SelectField, TextField } from "../../../components/form/fieldCreator";
import { getUserFields } from "../utils/parseData";
import { useClient } from "../../../context/ClientContext";

export function Register() {
  const { register, handleSubmit, formState, watch } = useForm({
    mode: "onBlur",
  });
  const [signupStatus, setSignupStatus] = useState(true);
  const { touchedFields, errors } = formState;

  const password = useRef({});
  password.current = watch("Password", "");
  const { signup, updateUser } = useUser();
  const { formData } = useClient();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    let newUser = { ...data };
    delete newUser.PasswordConfirm;
    console.log(newUser);
    setSignupStatus(true);
    const signupComplete = await signup(newUser).then(async (user) => {
      if (user && user.UseriD) {
        user.FirstName = data.FirstName;
        user.LastName = data.LastName;
        user.Password = data.Password;
        user.Title = data.Title;
        user.Email = data.Email;
        console.log(user);
        const userFields = getUserFields(user);
        const updatedUser = await updateUser(user, userFields);
        console.log("updated User", updatedUser);
        if (updatedUser) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    });
    if (signupComplete) {
      navigate("/ryght-solutions/home");
    } else {
      setSignupStatus(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
      {!signupStatus ? (
        <Alert variant="danger">Login Failed, Please try again.</Alert>
      ) : null}
      <Form.Group as={Row}>
        <Col md={6}>
          <TextField
            register={register}
            labelName="First Name"
            fieldName="FirstName"
            fieldOptions={{ required: true, maxLength: 40 }}
            fieldStyle="mb-4"
            isValid={touchedFields.FirstName && !errors.FirstName}
            isInvalid={errors.FirstName}
          />
        </Col>
        <Col md={6}>
          <TextField
            register={register}
            labelName="Last Name"
            fieldName="LastName"
            fieldOptions={{ required: true, maxLength: 40 }}
            fieldStyle="mb-4"
            isValid={touchedFields.LastName && !errors.LastName}
            isInvalid={errors.LastName}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <TextField
            register={register}
            labelName="Email"
            fieldName="Email"
            fieldType="email"
            fieldOptions={{ required: true }}
            fieldStyle="mb-4"
            isValid={touchedFields.Email && !errors.Email}
            isInvalid={errors.Email}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <SelectField
            register={register}
            labelName="Staff Title"
            groupName="Staff Title"
            fieldName="Title"
            fieldStyle="mb-4"
            labelStyle="w-50 m-0 pe-1 small"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={6}>
          <TextField
            register={register}
            labelName="Password"
            fieldName="Password"
            fieldType="password"
            fieldOptions={{
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            fieldStyle="mb-4"
            isValid={touchedFields.Password && !errors.Password}
            isInvalid={errors.Password}
          />
        </Col>
        <Col md={6}>
          <TextField
            register={register}
            labelName="Confirm Password"
            fieldName="PasswordConfirm"
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
            isValid={touchedFields.PasswordConfirm && !errors.PasswordConfirm}
            isInvalid={errors.PasswordConfirm}
          />
        </Col>
      </Form.Group>
      <Button className="w-100 mb-2" type="submit" disabled={!formData}>
        Register
      </Button>
    </Form>
  );
}
