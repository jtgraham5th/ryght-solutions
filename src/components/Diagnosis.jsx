import { Row, Col, Alert, ListGroup, Form, Button } from "react-bootstrap";
import { personalDataOptions } from "../data/formData";
import styles from "./Diagnosis.module.scss";
import { Hash, At } from "react-bootstrap-icons";
import DXListItem from "./DXListItem";

function Diagnosis() {
  return (
    <Row className={styles.diagnosisContainer}>
      <Form>
        <ListGroup className={styles.dataGroup} variant="flush">
          <Alert className={styles.dataLegend}>
            <div>LEGEND:</div>
            <div>
              <Hash color="turquoise" size={20} />
              <Hash color="turquoise" size={20} /> - Historical Diagnosis
            </div>
            <div>
              <At color="red" size={20} /> - Rule Out Diagnosis
            </div>
          </Alert>
          <ListGroup.Item variant="secondary">
            <Row className={styles.dataHeader}>
              <Col md={4}>Current Diagnoses </Col>
              <Col md="auto">
                <Button variant="outline-primary" size="sm">
                  + Add Diagnosis
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataTableRow}>
            <Row>
              <Col md={6}>
                Diagnosis -
                <small>
                  ICD-10 Code <span>(ICD-9 Code)</span>
                </small>
              </Col>
              <Col md={2}>Date</Col>
              <Col md={2}>Order</Col>
              <Col md={2}>Actions</Col>
            </Row>
          </ListGroup.Item>
          {Array.apply(null, Array(5)).map((type) => (
            <DXListItem type={type} />
          ))}
          <ListGroup.Item className={styles.dataButtons}>
            <Row>
              <Col md={4}>
                <Button size="sm">Remove Selected Diagnosis</Button>{" "}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item variant="secondary" className={styles.dataHeader}>
            <div>Inactive Diagnoses</div>
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataTableRow}>
            <Row>
              <Col md={6}>
                Diagnosis -
                <small>
                  ICD-10 Code <span>(ICD-9 Code)</span>
                </small>
              </Col>
              <Col md={2}>Date</Col>
              <Col md={2}>Order</Col>
              <Col md={2}>Actions</Col>
            </Row>
          </ListGroup.Item>

          {Array.apply(null, Array(2)).map((type) => (
            <DXListItem type={type} disabled={true} />
          ))}
        </ListGroup>
      </Form>
    </Row>
  );
}

export default Diagnosis;
