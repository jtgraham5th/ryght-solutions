import { Row, Col, Card } from "react-bootstrap";
import styles from "./InsuranceInfo.module.scss";

function InsCard({ source }) {
  return (
    <Card className={styles.insuranceCard}>
      <Card.Header>{source} Source</Card.Header>
      <Card.Body>
      <Row>
        <Col md={9}>
          <Card.Title>Funding Source</Card.Title>
          <Card.Subtitle>Policy Number</Card.Subtitle>
        </Col>
        <Col className={styles.icCoPay}>
          <div>Co-Pay Amount:</div> $20
        </Col>
      </Row>
      <Row className={styles.icRow}>
        <div>Case Manager:</div>
        <div>John Doe</div>{" "}
      </Row>
      <Row className={styles.icRow}>
        <div>Case Manager Supervisor:</div>
        <div>John Doe</div>{" "}
      </Row>
      <Row className={styles.icComment}>
        <Col md={3}>Client Notes:</Col>
        <Col md={9}>Notes...</Col>{" "}
      </Row>
      </Card.Body>
    </Card>
  );
}

export default InsCard;
