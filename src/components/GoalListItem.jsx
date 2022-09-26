import { Row, Col, ListGroup } from "react-bootstrap";

function GoalListItem({ type, disabled, goal }) {
  return (
    <ListGroup.Item
    key={`default-${type}`}
      disabled={disabled}
    >
      <Row className="w-100">
        <Col md={3}>{goal.goalName}</Col>
        <Col md={3}>{goal.status}</Col>
        <Col md={2}>{goal.openDate}</Col>
        <Col md={2}>{goal.targetDate}</Col>
        <Col md={2}>{goal.addedDate}</Col>
      </Row>
    </ListGroup.Item>
  );
}

export default GoalListItem;
