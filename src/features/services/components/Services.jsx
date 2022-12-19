import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "../Services.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { SVaddByGroup } from "./SVaddByGroup";
import { SVaddInd } from "./SVaddInd";

export function Services() {
  return (
    <>
      <Row className="p-2 align-items-center">
        <div>
          Select the services the client may recieve. Only those selected
          services will be available for this client when submitting Notes,
          Assessments and Authorizations.
        </div>
        <Col md={6}>
          <SVaddByGroup />
        </Col>
        <Col md={6} className={styles.ContactLogBtns}>
          <SVaddInd />
        </Col>
        <Col className="text-start fs-6">Client's Current Services:</Col>
      </Row>
      <Row className="justify-content-center">
        <ListGroup className={styles.dataGroup} variant="flush">
          <ListGroup.Item className={styles.dataItem}>
            Service #1
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataItem}>
            Service #4
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataItem}>
            Service #3
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataItem}>
            Service #4
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </>
  );
}
