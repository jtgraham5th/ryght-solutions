import {
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import "./G_Manager.css";
import { ArrowDown } from "react-bootstrap-icons";
import { GoalDetail } from "./G_GoalDetail";
import { ObjectiveDetail } from "./G_ObjectiveDetail";
import { InterventionDetail } from "./G_InterventionDetail";
import AlertContainer from "../../../components/AlertContainer";
import { useClient } from "../../../context/ClientContext";
import {
  parseDefaultGoal,
  parseDefaultObjective,
  parseDefaultIntervention,
  parseInterventions,
  parseObjectives,
} from "../utils/parseData";

export function GoalsManager({ data }) {
  const { activeTreatmentPlan, activeClient } = useClient();
  const { patientid } = activeClient[20];
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activeGoal, setActiveGoal] = useState({});
  const [activeObjective, setActiveObjective] = useState("");
  const [activeIntervention, setActiveIntervention] = useState("");
  const [cardFocus, setCardFocus] = useState({
    goals: false,
    objectives: false,
    interventions: false,
    editing: false,
  });

  const goalSelect = (goal) => {
    setCardFocus({
      ...cardFocus,
      goals: true,
      objectives: false,
      interventions: false,
    });
    if (goal !== activeGoal) {
      setActiveGoal(parseDefaultGoal(true, patientid, goal));
      setActiveObjective("");
      setActiveIntervention("");
    }
  };
  const newGoal = () => {
    setActiveGoal(parseDefaultGoal(false, patientid));
    setCardFocus({
      ...cardFocus,
      objectives: false,
      goals: true,
      interventions: false,
      editing: "new-goal",
    });
  };
  const newObjective = () => {
    setActiveObjective(
      parseDefaultObjective(false, patientid, activeGoal.goalid)
    );
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
      setActiveObjective(
        parseDefaultObjective(true, patientid, activeGoal.goalid, objective)
      );
      setActiveIntervention("");
    }
  };
  const newIntervention = () => {
    setActiveIntervention(
      parseDefaultIntervention(false, patientid, activeObjective.objectiveid)
    );
    setCardFocus({
      ...cardFocus,
      objectives: false,
      goals: false,
      interventions: true,
      editing: "",
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
      setActiveIntervention(
        parseDefaultIntervention(
          true,
          patientid,
          activeObjective.objectiveid,
          intervention
        )
      );
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
            <ListGroup numbered className="list-container">
              {activeTreatmentPlan &&
                activeTreatmentPlan.goals.map((goal, index) => {
                  return (
                    <ListGroupItem
                      className="list-container-item"
                      key={`goal-${index}`}
                      onClick={() => goalSelect(goal)}
                      active={activeGoal.goalid === goal.goalid ? true : false}
                      variant={"flush"}
                      disabled={cardFocus.editing ? true : false}
                    >
                      {goal.goalname}
                    </ListGroupItem>
                  );
                })}
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
                disabled={cardFocus.editing || !cardFocus.goals ? true : false}
                variant={
                  cardFocus.editing || !cardFocus.goals
                    ? "outline-secondary"
                    : "outline-success"
                }
              >
                + New Objective
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup numbered className="list-container">
              {activeGoal &&
                parseObjectives(activeTreatmentPlan, activeGoal).map(
                  (objective, index) => (
                    <ListGroupItem
                      key={`objective-${index}`}
                      className="list-container-item"
                      onClick={() => objectiveSelect(objective)}
                      active={
                        activeObjective.objectiveid === objective.objectiveid
                          ? true
                          : false
                      }
                      disabled={cardFocus.editing ? true : false}
                    >
                      {objective.description}
                    </ListGroupItem>
                  )
                )}
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
                disabled={
                  cardFocus.editing ||
                  !cardFocus.objectives &&
                  !cardFocus.interventions
                }
                variant={
                  cardFocus.editing ||
                  !cardFocus.objectives &&
                  !cardFocus.interventions
                    ? "outline-secondary"
                    : "outline-success"
                }
              >
                + New Intervention
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup numbered className="list-container">
              {activeObjective &&
                parseInterventions(activeTreatmentPlan, activeObjective).map(
                  (intervention, index) => (
                    <ListGroupItem
                      key={`intervention-${index}`}
                      className="list-container-item"
                      onClick={() => interventionSelect(intervention)}
                      active={
                        activeIntervention.interventionid ===
                        intervention.interventionid
                          ? true
                          : false
                      }
                      disabled={cardFocus.editing ? true : false}
                    >
                      {intervention.description}
                    </ListGroupItem>
                  )
                )}
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
        <GoalDetail
          goal={activeGoal}
          focus={cardFocus}
          setFocus={setCardFocus}
          setAlert={setAlert}
        />
        <ObjectiveDetail
          objective={activeObjective}
          focus={cardFocus}
          setFocus={setCardFocus}
          setAlert={setAlert}
          goalid={activeGoal ? activeGoal.goalid : 0}
        />
        <InterventionDetail
          intervention={activeIntervention}
          focus={cardFocus}
          setFocus={setCardFocus}
          setAlert={setAlert}
          objectiveid={activeObjective ? activeObjective.objectiveid : 0}
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
