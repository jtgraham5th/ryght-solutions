import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "../ClientDetails.module.scss";

export function CDPCCP() {
  return (
      <ListGroup className={styles.dataGroup} variant="flush">
                <ListGroup.Item className="ps-0 pt-0">
          <Row className={styles.dataGroupRow}>
            <Col md="auto" className={styles.dataItem}>
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Home Telephone Number</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Work Telephone Number</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Written Communication</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">E-Mail Communication</div>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
  );
}