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
  password.current = watch("password", "");
  const { signup, updateUser } = useUser();
  const { formData } = useClient();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let newUser = { ...data };
    delete newUser.passwordconfirm;
    setSignupStatus(true);
    const signupComplete = await signup(newUser).then(async (user) => {
      if (user && user.userid) {
        user.firstname = data.firstname;
        user.lastname = data.lastname;
        user.password = data.password;
        user.title = data.title;
        user.email = data.email;
        user.username = data.email;
        const userFields = getUserFields(user);
        const updatedUser = await updateUser(user, userFields);
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
            fieldName="firstname"
            fieldOptions={{ required: true, maxLength: 40 }}
            fieldStyle="mb-4"
            isValid={touchedFields.firstname && !errors.firstname}
            isInvalid={errors.firstname}
          />
        </Col>
        <Col md={6}>
          <TextField
            register={register}
            labelName="Last Name"
            fieldName="lastname"
            fieldOptions={{ required: true, maxLength: 40 }}
            fieldStyle="mb-4"
            isValid={touchedFields.lastname && !errors.lastname}
            isInvalid={errors.lastname}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <TextField
            register={register}
            labelName="Email"
            fieldName="email"
            fieldType="email"
            fieldOptions={{ required: true }}
            fieldStyle="mb-4"
            isValid={touchedFields.email && !errors.email}
            isInvalid={errors.email}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col md={12}>
          <SelectField
            register={register}
            labelName="Staff Title"
            groupName="Staff Title"
            fieldName="title"
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
          />
        </Col>
        <Col md={6}>
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
          />
        </Col>
      </Form.Group>
      <Button className="w-100 mb-2" type="submit" disabled={!formData}>
        Register
      </Button>
    </Form>
  );
}
