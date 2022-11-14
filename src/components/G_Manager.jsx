import {
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useState } from "react";
import "./G_Manager.css";
import { ArrowDown } from "react-bootstrap-icons";
import GoalsDetail from "./G_GoalsDetail";
import ObjectivesDetail from "./G_ObjectivesDetail";
import InterventionsDetail from "./G_InterventionsDetail";
import AlertContainer from "./AlertContainer";

function GoalsManager({ data }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [goals] = useState(data);
  const [activeGoal, setActiveGoal] = useState();
  const [activeObjective, setActiveObjective] = useState("");
  const [activeIntervention, setActiveIntervention] = useState("");
  const [cardFocus, setCardFocus] = useState({
    goals: false,
    objectives: false,
    interventions: false,
    editing: "",
  });

  const goalSelect = (goal) => {
    setCardFocus({
      ...cardFocus,
      goals: true,
      objectives: false,
      interventions: false,
    });
    if (goal !== activeGoal) {
      setActiveGoal(goal);
      setActiveObjective("");
      setActiveIntervention("");
    }
  };
  const newGoal = () => {
    setActiveGoal({
      goal: "",
      status: "",
      openDate: new Date(),
      targetDate: new Date(),
      addedDate: new Date(),
      frequency: "",
      measurementNumber: "",
      measurementUnit: "",
      description: "",
      comments: "",
      objectives: [],
    });
    setCardFocus({
      ...cardFocus,
      objectives: false,
      goals: true,
      interventions: false,
      editing: "new-goal",
    });
  };
  const newObjective = () => {
    setActiveObjective({
      objective: "",
      parentGoal: "",
      openDate: new Date(),
      targetDate: new Date(),
      status: "",
      description: "",
      interventions: [],
    });
    setCardFocus({
      ...cardFocus,
      objectives: true,
      goals: false,
      interventions: false,
      editing: "new-objective",
    });
  };

  const objectiveSelect = (objective) => {
    setCardFocus({
      ...cardFocus,
      goals: false,
      objectives: true,
      interventions: false,
    });
    if (objective !== activeObjective) {
      setActiveObjective(objective);
      setActiveIntervention("");
    }
  };
  const newIntervention = () => {
    setActiveIntervention({
      parentGoal: "",
      parentObjective: "",
      status: "",
      services: "",
      frequency: "",
      staffType: "",
      description: "",
    });
    setCardFocus({
      ...cardFocus,
      objectives: false,
      goals: false,
      interventions: true,
      editing: "new-intervention",
    });
  };

  const interventionSelect = (intervention) => {
    setCardFocus({
      ...cardFocus,
      goals: false,
      objectives: false,
      interventions: true,
    });
    if (intervention !== activeIntervention) {
      setActiveIntervention(intervention);
    }
  };

  return (
    <>
      <Row className="d-flex justify-content-evenly align-items-center">
        <Card as={Col} md={3} className="detail-container">
          <Card.Header className="detail-container-header">
            <h6 className="m-0">Goals</h6>
            <div>
              <Button
                onClick={newGoal}
                size="sm"
                disabled={cardFocus.editing ? true : false}
                variant={
                  cardFocus.editing ? "outline-secondary" : "outline-success"
                }
              >
                + New Goal
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {goals.map((goal, index) => (
                <ListGroupItem
                  className="list-container-item"
                  key={`goal-${index}`}
                  onClick={() => goalSelect(goal)}
                  active={activeGoal === goal ? true : false}
                  variant={"flush"}
                  disabled={cardFocus.editing ? true : false}
                >
                  {goal.goalName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
        <Card as={Col} md={3} className="detail-container">
          <Card.Header className="detail-container-header">
            <h6 className="m-0">Objectives</h6>
            <div>
              <Button
                size="sm"
                onClick={newObjective}
                disabled={cardFocus.editing ? true : false}
                variant={
                  cardFocus.editing ? "outline-secondary" : "outline-success"
                }
              >
                + New Objective
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {activeGoal &&
                activeGoal.objectives.map((objective, index) => (
                  <ListGroupItem
                    key={`objective-${index}`}
                    className="list-container-item"
                    onClick={() => objectiveSelect(objective)}
                    active={activeObjective === objective ? true : false}
                    disabled={cardFocus.editing ? true : false}
                  >
                    {objective.objectiveName}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Card.Body>
        </Card>
        <Card as={Col} md={3} className="detail-container">
          <Card.Header className="detail-container-header">
            <h6 className="m-0">Intervention</h6>
            <div>
              <Button
                size="sm"
                onClick={newIntervention}
                disabled={cardFocus.editing ? true : false}
                variant={
                  cardFocus.editing ? "outline-secondary" : "outline-success"
                }
              >
                + New Intervention
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {activeObjective &&
                activeObjective.interventions.map((intervention, index) => (
                  <ListGroupItem
                    key={`intervention-${index}`}
                    className="list-container-item"
                    onClick={() => interventionSelect(intervention)}
                    active={activeIntervention === intervention ? true : false}
                    disabled={cardFocus.editing ? true : false}
                  >
                    {intervention.description}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>

      <Row className="justify-content-evenly text-center mb-4">
        <Col md={3}>
          <ArrowDown size={30} />
        </Col>
        <Col md={3}>
          <ArrowDown size={30} />
        </Col>
        <Col md={3}>
          <ArrowDown size={30} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-evenly align-items-start ">
        <GoalsDetail
          goal={activeGoal}
          focus={cardFocus}
          setFocus={setCardFocus}
          setAlert={setAlert}
        />
        <ObjectivesDetail
          objective={activeObjective}
          focus={cardFocus}
          setFocus={setCardFocus}
          setAlert={setAlert}
        />
        <InterventionsDetail
          intervention={activeIntervention}
          focus={cardFocus}
          setFocus={setCardFocus}
          setAlert={setAlert}
        />
      </Row>
      <AlertContainer
        show={alert.message && alert.data}
        alert={alert}
        setAlert={setAlert}
      />
    </>
  );
}

export default GoalsManager;
