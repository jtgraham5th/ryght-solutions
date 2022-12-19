import { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import ModalContainer from "../../../components/ModalContainer";
import {GoalsManager} from "../../treatmentPlan";
import { client01 } from "../../../data/formData";

export function GoalList() {
  const [show, setShow] = useState(false);

  return (
    <Card className="h-100 mb-3">
      <Card.Body>
        <Row className="justify-content-between">
          <Col md={3}>
            <h5 className="p-1 m-0">Client Goals</h5>
          </Col>
          <Col md={6}>
            <Row className="justify-content-end">
              <Col md={3} className="p-0">
                <Button variant="link" size="sm" onClick={() => setShow(true)}>
                  Manage Goals
                </Button>
              </Col>
              <Col md={5}>
                <Form.Group className="d-flex flex-row">
                  <Form.Label className="m-0">
                    <Search className="m-2" />
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="search goals"
                    className="pt-0 pb-0 small"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="p-3 mt-2">
          {client01.treatmentPlan.goals.map((goal, index) => (
            <Card key={index}>
              <Card.Body as={Row}>
                <Col md={4}>
                  <Card.Title>{goal.goalName}</Card.Title>
                  <Card.Text>{goal.description}</Card.Text>
                  <Row className="mb-3">
                    <Col md={4}>
                      <h6>Open Date</h6>
                      <Card.Text>{goal.openDate}</Card.Text>
                    </Col>
                    <Col md={4}>
                      <h6>Target Date</h6>
                      <Card.Text>{goal.targetDate}</Card.Text>
                    </Col>
                    <Col md={4}>
                      <h6>Closed Date</h6>
                      <Card.Text>{goal.openDate}</Card.Text>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md="auto">
                      <h6>Current Status</h6>
                      <Card.Text className="font-italics">
                        {goal.status}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <h6>Goal Frequency</h6>
                      <Card.Text>{goal.goalFrequency}</Card.Text>
                    </Col>
                    <Col md={6}>
                      <h6>Measurement Number</h6>
                      <Card.Text>
                        {goal.measurement.number} {goal.measurement.unit}
                      </Card.Text>
                    </Col>
                  </Row>
                </Col>
                <Col md={8}>
                  {goal.objectives.map((objective, i) => (
                    <Card key={i} className="mb-3">
                      <Card.Body>
                        <Card.Title>{objective.objectiveName}</Card.Title>
                        <Card.Text>{objective.description}</Card.Text>
                        <Row className="mb-3">
                          <Col md={4}>
                            <h6>Open Date</h6>
                            <Card.Text>{objective.openDate}</Card.Text>
                          </Col>
                          <Col md={4}>
                            <h6>Start Date</h6>
                            <Card.Text>{objective.targetDate}</Card.Text>
                          </Col>
                          <Col md={4}>
                            <h6>Current Status</h6>
                            <Card.Text>{objective.status}</Card.Text>
                          </Col>
                        </Row>
                        {objective.interventions.map((intervention, x) => (
                          <Card key={x} className="mb-3">
                            <Card.Body>
                              <Card.Subtitle>
                                {intervention.description}
                              </Card.Subtitle>
                              <hr />
                              <Row className="mb-3">
                                <Col md={3}>
                                  <h6>Services</h6>
                                  <Card.Text>{intervention.services}</Card.Text>
                                </Col>
                                <Col md={2}>
                                  <h6>Frequency</h6>
                                  <Card.Text>
                                    {intervention.frequency}
                                  </Card.Text>
                                </Col>
                                <Col md={3}>
                                  <h6>Staff</h6>
                                  <Card.Text>
                                    {intervention.staffType}
                                  </Card.Text>
                                </Col>
                                <Col md={4}>
                                  <h6>Current Status</h6>
                                  <Card.Text>{intervention.status}</Card.Text>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        ))}
                      </Card.Body>
                    </Card>
                  ))}
                </Col>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Card.Body>
      <ModalContainer
        show={show}
        setShow={setShow}
        containerName="Goals Manager"
        component={<GoalsManager data={client01.treatmentPlan.goals} />}
      />
    </Card>
  );
}
