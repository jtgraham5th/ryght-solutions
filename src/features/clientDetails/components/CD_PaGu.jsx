import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "../ClientDetails.module.scss";

export function CDPaGu() {
  return (
      <ListGroup className={styles.dataGroup} variant="flush">
        <ListGroup.Item className="ps-0 pt-0">
          <Row className={styles.dataGroupRow}>
            <Col md="auto" className={styles.dataItem}>
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Parent/Guardian Name</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Phone</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Address</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Comments</div>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
  );
}
