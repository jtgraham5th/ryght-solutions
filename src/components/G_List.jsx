import { useState } from "react";
import { Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import styles from "./Diagnosis.module.scss";
import GoalListItem from "./GoalListItem";
import { Search } from "react-bootstrap-icons";
import ModalContainer from "./ModalContainer";
import GoalsManager from "./G_Manager";
import { client01 } from "../data/formData";

function GoalList() {
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
      <Row className="pb-3 mt-2">
        <Col>
          <ListGroup >
            <ListGroup.Item className={styles.dataTableRow}>
              <Row>
                <Col md={3}>Goal</Col>
                <Col md={3}>Status</Col>
                <Col md={2}>Open Date</Col>
                <Col md={2}>Target Date</Col>
                <Col md={2}>Addded On</Col>
              </Row>
            </ListGroup.Item>
            <div
              style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
            >
              {client01.treatmentPlan.goals.map((goal, index) => (
                <GoalListItem type={index} key={index} goal={goal} />
              ))}
            </div>
          </ListGroup>
        </Col>
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

export default GoalList;
