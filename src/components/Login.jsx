import { Row, Col, Form, Card, Button } from "react-bootstrap";
import "./Login.css";
import { useForm } from "react-hook-form";
import { ArrowRightSquare } from "react-bootstrap-icons";
import familyPhoto from "../data/familytherapy.jpeg";
import { Routes, Route, useNavigate } from "react-router-dom";

function Login({ setStatus }) {
  const { control, register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setStatus(true);
    navigate("/");
  };

  return (
    <div className="login-container">
      <Card className="w-75">
        <Row className="pe-3">
          <Col md={6}>
            <img src={familyPhoto} className="login-photo" />
          </Col>
          <Col
            md={6}
            className="pb-3 pt-3 d-flex flex-column align-items-center"
          >
            <div className="login-brand-header">
              <ArrowRightSquare size="25" className="me-2" color="#4a235a" />
              <h2 style={{ color: "#4a235a" }}>Ryght Solutions</h2>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} className="w-75">
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  {...register("username")}
                  type="text"
                  name="username"
                  className="mb-4"
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...register("password")}
                  type="password"
                  name="password"
                  className="mb-4"
                />
              </Form.Group>
              <Button className="w-100 mb-4" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Login;
