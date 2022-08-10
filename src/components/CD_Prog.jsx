import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "./ClientDetails.module.scss";

function CDProg() {
  return (
    // <Row fluid>
    <ListGroup className={styles.dataGroup} variant="flush">
      <ListGroup.Item className="ps-0 pt-0">
        <Row className={styles.dataGroupRow}>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Client Status</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Program</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Case Number</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Date of First Contact</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Referral Source</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Referral Date</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Reason for Referral</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Referral Info</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Referring Provider</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Referring Date</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Reason for Referring</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Referring Info</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Ordering/Prescribing Provider</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Date Assessed</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Intake Date</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Begin Services Date</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">First Appointment Date</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Program Start Date</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Frequency</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Duration</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Current Location</div>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
    // </Row>
  );
}

export default CDProg;
