import { Form, Button, Alert } from "react-bootstrap";
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
    let loginData = [
      {
        userid: 760,
        UserName: data.email,
        StringValue: data.password,
        PCheckTypeID: 3,
        PinValue: ""
      },
    ];
    setloginStatus(true);
    const loggedIn = await login(loginData);
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
          labelName="Email"
          fieldName="email"
          fieldOptions={{ required: "Email required" }}
          fieldStyle="mb-4"
          isValid={touchedFields.email && !errors.email}
          isInvalid={errors.email}
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
