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
import { useUser } from "../../../context/UserContext";
import {
  parseDefaultGoal,
  parseDefaultObjective,
  parseDefaultIntervention,
  parseInterventions,
  parseObjectives,
} from "../utils/parseData";

export function GoalsManager({ data }) {
  const { user } = useUser();
  const {
    activeTreatmentPlan,
    activeClient,
    removeClientGoal,
    removeClientObjective,
    removeClientIntervention,
  } = useClient();
  const { patientid } = activeClient;
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
  console.log(activeTreatmentPlan.objectives);

  useEffect(() => {}, [activeTreatmentPlan]);

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
  const removeGOI = (data) => {
    if ("interventionid" in data) {
      return removeIntervention(data);
    } else if ("objectiveid" in data && "goalid" in data) {
      return removeObjective(data);
    } else if ("goalid" in data) {
      return removeGoal(data);
    } else {
      return;
    }
  };
  const removeGoal = (goal) => {
    removeClientGoal(goal, user.userid);
    parseObjectives(activeTreatmentPlan, goal).map((obj) => {
      removeClientObjective(obj, user.userid);
      parseInterventions(activeTreatmentPlan, obj).map((int) => {
        removeClientIntervention(int, user.userid);
      });
    });
  };

  const removeObjective = (objective) => {
    removeClientObjective(objective, user.userid);
    parseInterventions(activeTreatmentPlan, objective).map((int) => {
      removeClientIntervention(int, user.userid);
    });
  };

  const removeIntervention = (intervention) => {
    removeClientIntervention(intervention, user.userid);
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
            <ListGroup className="list-container">
              {activeTreatmentPlan &&
                activeTreatmentPlan.goals.map((goal, index) => {
                  return (
                    <ListGroupItem
                      className="list-container-item d-flex justify-content-between align-items-center"
                      key={`goal-${index}`}
                      onClick={() => goalSelect(goal)}
                      active={activeGoal.goalid === goal.goalid ? true : false}
                      variant={"flush"}
                      disabled={cardFocus.editing ? true : false}
                    >
                      <div className="div-overflow">
                        {index + 1 + ". "}
                        {goal.goalname}
                      </div>
                      <div style={{ width: "10%" }} className="text-center">
                        <Button
                          onClick={() =>
                            setAlert({
                              message:
                                "Are you sure you want to remove this goal? All accompanying objectives and interventions will also be removed. This action cannot be undone.",
                              data: goal,
                            })
                          }
                          size="sm"
                          className="btn-circle"
                          variant="outline-secondary"
                        >
                          x
                        </Button>
                      </div>
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
                disabled={
                  cardFocus.editing ||
                  (!cardFocus.goals && !cardFocus.objectives)
                    ? true
                    : false
                }
                variant={
                  cardFocus.editing ||
                  (!cardFocus.goals && !cardFocus.objectives)
                    ? "outline-secondary"
                    : "outline-success"
                }
              >
                + New Objective
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {activeGoal &&
                parseObjectives(activeTreatmentPlan, activeGoal).map(
                  (objective, index) => (
                    <ListGroupItem
                      key={`objective-${index}`}
                      className="list-container-item  d-flex justify-content-between align-items-center"
                      onClick={() => objectiveSelect(objective)}
                      active={
                        activeObjective.objectiveid === objective.objectiveid
                          ? true
                          : false
                      }
                      disabled={cardFocus.editing ? true : false}
                    >
                      <div className="div-overflow">
                        {index + 1 + ". "}
                        {objective.description}
                      </div>
                      <div style={{ width: "10%" }} className="text-center">
                        <Button
                          onClick={() =>
                            setAlert({
                              message:
                                "Are you sure you want to remove this objective? All accompanying interventions will also be removed. This action cannot be undone.",
                              data: objective,
                            })
                          }
                          size="sm"
                          className="btn-circle"
                          variant="outline-secondary"
                        >
                          x
                        </Button>
                      </div>
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
                  (!cardFocus.objectives && !cardFocus.interventions)
                }
                variant={
                  cardFocus.editing ||
                  (!cardFocus.objectives && !cardFocus.interventions)
                    ? "outline-secondary"
                    : "outline-success"
                }
              >
                + New Intervention
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {activeObjective &&
                parseInterventions(activeTreatmentPlan, activeObjective).map(
                  (intervention, index) => (
                    <ListGroupItem
                      key={`intervention-${index}`}
                      className="list-container-item  d-flex justify-content-between align-items-center"
                      onClick={() => interventionSelect(intervention)}
                      active={
                        activeIntervention.interventionid ===
                        intervention.interventionid
                          ? true
                          : false
                      }
                      disabled={cardFocus.editing ? true : false}
                    >
                      <div className="div-overflow">
                        {index + 1 + ". "}
                        {intervention.description}
                      </div>
                      <div style={{ width: "10%" }} className="text-center">
                        <Button
                          onClick={() =>
                            setAlert({
                              message:
                                "Are you sure you want to remove this intervention? This action cannot be undone.",
                              data: intervention,
                            })
                          }
                          size="sm"
                          className="btn-circle"
                          variant="outline-secondary"
                        >
                          x
                        </Button>
                      </div>
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
          setGoal={setActiveGoal}
          focus={cardFocus}
          setFocus={setCardFocus}
          setAlert={setAlert}
        />
        <ObjectiveDetail
          objective={activeObjective}
          setObjective={setActiveObjective}
          focus={cardFocus}
          setFocus={setCardFocus}
          setAlert={setAlert}
          goalid={activeGoal ? activeGoal.goalid : 0}
        />
        <InterventionDetail
          intervention={activeIntervention}
          setIntervention={setActiveIntervention}
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
        handleConfirm={removeGOI}
      />
    </>
  );
}
