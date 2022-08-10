import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "./ClientDetails.module.scss";

function CDContact() {
  return (
    // <Row fluid>
      <ListGroup className={styles.dataGroup} variant="flush">
        <ListGroup.Item className="ps-0 pt-0">
          <Row className={styles.dataGroupRow}>
            <Col md="auto" className={styles.dataItem} >
              <div className="me-auto">
                Cras justo odio
              </div>
                <div className="fw-bold">Home Address</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Home Phone</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Physical Address</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div cl>
                Cras justo odio
              </div>
                <div className="fw-bold">Physical Phone</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Mobile Phone</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Mobile Carrier</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Recieve SMS</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Recieve Calls</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Work Phone</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Email</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Eye Color</div>
            </Col>
            <Col md="auto" className={styles.dataItem}>
              <div >
                Cras justo odio
              </div>
                <div className="fw-bold">Hair Color</div>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    // </Row>
  );
}

export default CDContact;
