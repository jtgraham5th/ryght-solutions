import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "./ClientDetails.module.scss";
import { useClient } from "../data/ClientContext";

function CDPersonal() {
  const { activeClient } = useClient();

  return (
    // <Row fluid>
    <ListGroup className={styles.dataGroup} variant="flush">
      <ListGroup.Item className="ps-0 pt-0" as="Row">
      <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">{activeClient.pfirstname + " " + activeClient.plastname}</div>
            <div className="fw-bold">Full Name</div>
          </Col>

        </ListGroup.Item>
        <ListGroup.Item>
        {/* <Row className={styles.dataGroupRow}> */}
          {/* <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Comment</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Record ID</div>
          </Col> */}
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">NickName</div>
          </Col>
          {/* <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Sexual Orientation</div>
          </Col> */}
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Gender Expression</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Gender</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">DOB</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">SSN</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Height</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Weight</div>
          </Col>
          {/* <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Eye Color</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Hair Color</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Primary Race</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Secondary Race</div>
          </Col> */}
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Ethnicity</div>
          </Col>
          {/* <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Preferred Language</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Needs Interpreter</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Name of Interpreter</div>
          </Col> */}
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Marital Status</div>
          </Col>
          {/* <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Siblings</div>
          </Col>
          <Col md="auto" className={styles.dataItem}>
            <div className="me-auto">Cras justo odio</div>
            <div className="fw-bold">Payer Client ID</div>
          </Col> */}
          {/* </Row> */}
      </ListGroup.Item>
    </ListGroup>
    // </Row>
  );
}

export default CDPersonal;
