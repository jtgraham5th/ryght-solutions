import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "../ClientDetails.module.scss";

export function CDPharmacy() {
  return (
    // <Row fluid>
      <ListGroup className={styles.dataGroup} variant="flush">
        <ListGroup.Item className="ps-0 pt-0">
          <Row className={styles.dataGroupRow}>
            <Col md="auto" className={styles.dataItem} >
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Pharmacy</div>
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
                <div className="fw-bold">Fax Number</div>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    // </Row>
  );
}