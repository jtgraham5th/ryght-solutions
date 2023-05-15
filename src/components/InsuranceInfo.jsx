import { Row, Card } from "react-bootstrap";
import InsCard from "./InsCard";
import styles from "./InsuranceInfo.module.scss";

function InsuranceInfo() {
  return (
    <Card as={Row} className={styles.insuranceInfo}>
      {/* <Card.Header className="text-primary">Insurance Information</Card.Header> */}
      <Card.Body className="d-flex p-0">
        <InsCard source="Primary Insurance" />
        <InsCard source="Secondary Insurance" />
      </Card.Body>
    </Card>
  );
}

export default InsuranceInfo;
