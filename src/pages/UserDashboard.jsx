import React, { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";
import DatePicker from "react-datepicker";
import ClientSelectDropdown from "../components/ClientSelectDropdown";

function UserDashboard(props) {
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Card className="mt-3 card-shadow">
            <Card.Header>
              <h3>Welcome back, Mrs. Graham</h3>
              <Card.Title>No Notifcations</Card.Title>
            </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Card className="card-shadow">
                <Card.Header>Schedule</Card.Header>
                <Card.Body>
                  <DatePicker
                    classname="w-100"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    inline
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4 card-shadow">
                <Card.Header>Next Visit</Card.Header>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <Card>
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                          alt="Client Name"
                        />
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card.Title>Samuel Johnson</Card.Title>
                      <Card.Subtitle>Evaluation</Card.Subtitle>
                    </Col>
                    <Col md={3} className="text-end">
                      <Card.Subtitle>Starts in ...</Card.Subtitle>
                      <Card.Title>3 hours</Card.Title>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-4 card-shadow">
                <Card.Header className="justify-content-between">
                  <Row className="align-items-center">
                    <Col>Recent Clients</Col>
                    <Col md={6}>
                      <Form.Group as={Row} className="justify-content-end">
                        <Col md={8} className="dropdown-container">
                          <ClientSelectDropdown />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <div className="recent-clients">
                    {Array.apply(null, Array(8)).map((type, index) => (
                      <Card
                        key={index}
                        onClick={() => navigate("/client/overview")}
                      >
                        <img
                          className="clientImg"
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                          alt="Client Name"
                        />
                        <Card.Footer className="p-1 text-center">
                          John Doe
                        </Card.Footer>
                      </Card>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserDashboard;
