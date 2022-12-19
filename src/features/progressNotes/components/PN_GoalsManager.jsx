import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useState } from "react";
import "./PN_Manager.css";

export function PNGoalsManager({ data, selectedGoal, setSelectedGoal }) {

  const [goals] = useState(data);

  const goalSelect = (goal) => {
    if (goal !== selectedGoal.goal) {
      setSelectedGoal({goal: goal, objective: null, intervention: null });
    }
  };
  const objectiveSelect = (objective) => {
    if (objective !== selectedGoal.objective) {
      setSelectedGoal({...selectedGoal, objective: objective, intervention: null });
    }
  };
  const interventionSelect = (intervention) => {
    if (intervention !== selectedGoal.intervention) {
      setSelectedGoal({...selectedGoal, intervention: intervention });
    }
  };

  return (
    <>
      <Row className="d-flex justify-content-evenly align-items-center">
        <Card as={Col} md={3} className="detail-container">
          <Card.Header className="detail-container-header">
            <h6 className="m-0">Goals</h6>
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {goals.map((goal, index) => (
                <ListGroupItem
                  className="list-container-item"
                  key={`goal-${index}`}
                  onClick={() => goalSelect(goal)}
                  active={selectedGoal.goal === goal ? true : false}
                  variant={"flush"}
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
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {selectedGoal.goal &&
                selectedGoal.goal.objectives.map((objective, index) => (
                  <ListGroupItem
                    key={`objective-${index}`}
                    className="list-container-item"
                    onClick={() => objectiveSelect(objective)}
                    active={selectedGoal.objective === objective ? true : false}
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
          </Card.Header>
          <Card.Body className="p-0">
            <ListGroup className="list-container">
              {selectedGoal.objective &&
                selectedGoal.objective.interventions.map((intervention, index) => (
                  <ListGroupItem
                    key={`intervention-${index}`}
                    className="list-container-item"
                    onClick={() => interventionSelect(intervention)}
                    active={selectedGoal.intervention === intervention ? true : false}
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
