import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { TextField } from "../../../components/form/fieldCreator";
import { useState } from "react";

export function Login() {
  const { register, handleSubmit, formState } = useForm({ mode: "onBlur" });
  const [loginStatus, setloginStatus] = useState(true);
  const { touchedFields, errors } = formState;

  const { login } = useUser();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setloginStatus(true);
    const loggedIn = await login(data);
    console.log(loggedIn)
    if (loggedIn) {
      navigate("/ryght-solutions/home");
    } else {
      setloginStatus(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-75">
      {!loginStatus ? (
        <Alert variant="danger">Login Failed, Please try again.</Alert>
      ) : null}
      <Form.Group>
        <TextField
          register={register}
          labelName="Username"
          fieldName="username"
          fieldOptions={{ required: "Username required" }}
          fieldStyle="mb-4"
          isValid={touchedFields.username && !errors.username}
          isInvalid={errors.username}
        />
        <TextField
          register={register}
          labelName="Password"
          fieldName="password"
          type="password"
          fieldOptions={{ required: "Password required" }}
          fieldStyle="mb-4"
          isValid={touchedFields.password && !errors.password}
          isInvalid={errors.password}
        />
      </Form.Group>
      <Button className="w-100 mb-2" type="submit">
        Login
      </Button>
    </Form>
  );
}
