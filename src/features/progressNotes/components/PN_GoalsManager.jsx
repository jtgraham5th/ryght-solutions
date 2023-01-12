import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./PN_Manager.css";
import { useClient } from "../../../context/ClientContext";
import {
  parseInterventions,
  parseObjectives,
} from "../../treatmentPlan/utils/parseData";

export function PNGoalsManager({ selectedGoal, setSelectedGoal }) {
  const { activeTreatmentPlan } = useClient();
  const goalSelect = (goal) => {
    if (goal !== selectedGoal.goal) {
      setSelectedGoal({ goal: goal, objective: null, intervention: null });
    }
  };
  const objectiveSelect = (objective) => {
    if (objective !== selectedGoal.objective) {
      setSelectedGoal({
        ...selectedGoal,
        objective: objective,
        intervention: null,
      });
    }
  };
  const interventionSelect = (intervention) => {
    if (intervention !== selectedGoal.intervention) {
      setSelectedGoal({ ...selectedGoal, intervention: intervention });
    }
  };

  return (
    <>
      <Row className="d-flex flex-column justify-content-evenly align-items-center">
        <Card as={Col} md={3} className="w-100 p-0 mb-3">
          <Card.Header className="detail-container-header">
            <h6 className="m-0">Goals</h6>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {activeTreatmentPlan &&
                activeTreatmentPlan.goals.map((goal, index) => (
                  <ListGroupItem
                    className="list-container-item"
                    key={`goal-${index}`}
                    onClick={() => goalSelect(goal)}
                    active={selectedGoal.goal === goal ? true : false}
                    variant={"flush"}
                  >
                    {goal.goalname}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Card.Body>
        </Card>
        <Card as={Col} md={3} className="w-100 p-0 mb-3">
          <Card.Header className="detail-container-header">
            <h6 className="m-0">Objectives</h6>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {selectedGoal.goal &&
                parseObjectives(activeTreatmentPlan, selectedGoal.goal).map(
                  (objective, index) => (
                    <ListGroupItem
                      key={`objective-${index}`}
                      className="list-container-item"
                      onClick={() => objectiveSelect(objective)}
                      active={
                        selectedGoal.objective === objective ? true : false
                      }
                    >
                      {objective.description}
                    </ListGroupItem>
                  )
                )}
            </ListGroup>
          </Card.Body>
        </Card>
        <Card as={Col} md={3} className="w-100 p-0 mb-3">
          <Card.Header className="detail-container-header">
            <h6 className="m-0">Intervention</h6>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {selectedGoal.objective &&
                parseInterventions(
                  activeTreatmentPlan,
                  selectedGoal.objective
                ).map((intervention, index) => (
                  <ListGroupItem
                    key={`intervention-${index}`}
                    className="list-container-item"
                    onClick={() => interventionSelect(intervention)}
                    active={
                      selectedGoal.intervention === intervention ? true : false
                    }
                  >
                    {intervention.description}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}
