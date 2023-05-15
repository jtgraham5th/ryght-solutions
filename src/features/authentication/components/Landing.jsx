import { Row, Col, Card, Button } from "react-bootstrap";
import "./Login.css";
import { ArrowRightSquare } from "react-bootstrap-icons";
import familyPhoto from "../../../assets/familytherapy.jpeg";
import { Login } from "./Login";
import { useState } from "react";
import { Register } from "./Register";

export function Landing({ setStatus }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="login-container">
      <Card className="w-75">
        <Row className="pe-3">
          <Col md={6}>
            <img
              src={familyPhoto}
              alt="family in therapy"
              className="login-photo"
            />
          </Col>
          <Col
            md={6}
            className="pb-3 pt-3 d-flex flex-column align-items-center"
          >
            <div className="login-brand-header">
              <ArrowRightSquare size="25" className="me-2" color="#4a235a" />
              <h2 style={{ color: "#4a235a" }}>Ryght Solutions</h2>
            </div>
            {toggle ? <Login /> : <Register />}
            <Button
              className="w-100 mb-2"
              variant="link"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? "Register" : "Login"}
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
