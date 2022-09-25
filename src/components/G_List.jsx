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
    <Card className="h-100">
      <Form className="p-0">
        <ListGroup className={styles.dataGroup} variant="flush">
          <ListGroup.Item variant="primary">
            <Row className={styles.dataHeader}>
              <Col md={6}>Client Goals <Button variant="link" onClick={()=> setShow(true)}>Manage Goals</Button> </Col>
              <Col md="auto">
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
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataTableRow}>
            <Row>
              <Col md={3}>Goal</Col>
              <Col md={3}>Status</Col>
              <Col md={2}>Open Date</Col>
              <Col md={2}>Target Date</Col>
              <Col md={2}>Addded On</Col>
            </Row>
          </ListGroup.Item>
          <div style={{ height:"100%", overflowY: "auto", overflowX: "hidden"}}>
            {client01.treatmentPlan.goals.map((goal,index) => (
              <GoalListItem type={index} key={index} goal={goal} />
            ))}
          </div>
        </ListGroup>
      </Form>
      <ModalContainer
        show={show}
        setShow={setShow}
        containerName="Goals Manager"
        component={<GoalsManager data={client01.treatmentPlan.goals}/>}
      />
    </Card>
  );
}

export default GoalList;
