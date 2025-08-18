import { Row, Col, Card, Button } from "react-bootstrap";
import "./Login.css";
import { ArrowRightSquare } from "react-bootstrap-icons";
import familyPhoto from "../../../assets/familytherapy.jpeg";
import { Login } from "./Login";
import { useState } from "react";
import { Register } from "./Register";
import { useNavigate } from "react-router-dom";

export function Landing({ setStatus }) {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  // Development bypass function
  const handleDevBypass = () => {
    // Set admin user ID and navigate directly
    localStorage.setItem("UserID", "1");
    navigate("/ryght-solutions/home");
  };

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
            <Login />
            
            {/* Development Bypass Button */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-3 text-center">
                <hr className="my-3" />
                <small className="text-muted mb-2 d-block">Development Mode</small>
                <Button 
                  variant="outline-secondary" 
                  size="sm"
                  onClick={handleDevBypass}
                  className="w-100"
                >
                  🚀 Skip Login (Dev Mode)
                </Button>
                <small className="text-muted mt-2 d-block">
                  Automatically logs you in as admin
                </small>
              </div>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
}
