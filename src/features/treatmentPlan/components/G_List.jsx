import { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import ModalContainer from "../../../components/ModalContainer";
import { GoalsManager } from "../../treatmentPlan";
import { client01 } from "../../../data/formData";
import { useClient } from "../../../context/ClientContext";
import { parseObjectives, parseInterventions } from "../utils/parseData";
import { getFormValue } from "../../clientDetails/utils/formatData";
import { ViewerHeader } from "../../../components/ViewerHeader";

export function GoalList() {
  const [show, setShow] = useState(false);
  const { activeTreatmentPlan, formData } = useClient();
  // const [formValue, setFormValue] = useState({frequency: "", services: "", staff: ""});

  return (
    <Card className="h-100 p-0">
        <ViewerHeader
          edit={show}
          setEdit={setShow}
          title="Client Goals"
        />
      <Card.Body>
        <Row className="p-3 mt-2">
          {activeTreatmentPlan.goals && activeTreatmentPlan.goals.length > 0 ? (
            activeTreatmentPlan.goals.map((goal, index) => (
              <Card key={index} className="shadow mb-2" border="dark">
                <Card.Body as={Row}>
                  <Col md={4}>
                    <h3>{goal.goalname}</h3>
                    <Card.Text>{goal.description}</Card.Text>
                    <Row className="mb-3">
                      <Col md={4}>
                        <h6 className="fw-lighter">Open Date</h6>
                        <Card.Text>{goal.targetdate}</Card.Text>
                      </Col>
                      <Col md={4}>
                        <h6 className="fw-lighter">Closed Date</h6>
                        <Card.Text>{goal.dateclosed}</Card.Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={8}>
                    {parseObjectives(activeTreatmentPlan, goal).length > 0 ? (
                      parseObjectives(activeTreatmentPlan, goal).map(
                        (objective, i) => (
                          <Card
                            key={i}
                            className="mb-3 shadow"
                            border="primary"
                          >
                            <Card.Body>
                              <Row className="mb-3">
                                <Col md={8}>
                                  <Card.Title>
                                    {i + 1 + ". " + objective.description}
                                  </Card.Title>
                                </Col>
                                <Col md={2}>
                                  <h6 className="fw-lighter">Open Date</h6>
                                  <Card.Text>{objective.opendate}</Card.Text>
                                </Col>
                                <Col md={2}>
                                  <h6 className="fw-lighter">Target Date</h6>
                                  <Card.Text>{objective.targetdate}</Card.Text>
                                </Col>
                              </Row>
                              {parseInterventions(
                                activeTreatmentPlan,
                                objective
                              ).map((intervention, x) => {
                                return (
                                  <Card key={x} className="mb-3 bg-light">
                                    <Card.Body as={Row} className="p-3">
                                      <Col md={6}>
                                        <Card.Subtitle className="mb-1">
                                          {intervention.description}
                                        </Card.Subtitle>
                                        <h6 className="fw-lighter fst-italic">
                                          {getFormValue(
                                            "Services",
                                            intervention.services.split(","),
                                            formData
                                          )}
                                        </h6>
                                      </Col>
                                      <Col md={3}>
                                        <h6 className="fw-lighter">
                                          Frequency
                                        </h6>
                                        <Card.Text>
                                          {getFormValue(
                                            "Frequency",
                                            [intervention.frequency],
                                            formData
                                          )}
                                        </Card.Text>
                                      </Col>
                                      <Col md={3}>
                                        <h6 className="fw-lighter">Staff</h6>
                                        <Card.Text>
                                          {getFormValue(
                                            "Staff Title",
                                            intervention.stafftitleid.split(
                                              ","
                                            ),
                                            formData
                                          )}
                                        </Card.Text>
                                      </Col>
                                    </Card.Body>
                                  </Card>
                                );
                              })}
                            </Card.Body>
                          </Card>
                        )
                      )
                    ) : (
                      <Card className="h-100 text-center">
                        <Card.Body className="d-flex flex-column justify-content-center">
                          <h3 className="text-muted">
                            This goal currently has no defined objectives.
                          </h3>
                          <h5 className="fw-lighter">
                            Click the 'Manage Goals' Button to start a new
                            objective.
                          </h5>
                        </Card.Body>
                      </Card>
                    )}
                  </Col>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Card className="text-center">
              <Card.Body className="d-flex flex-column justify-content-center">
                <h3 className="text-muted">
                  Patient currenly has no defined goals.
                </h3>
                <h5 className="fw-lighter">
                  Click the 'Manage Goals' Button to start a new goal.
                </h5>
              </Card.Body>
            </Card>
          )}
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
