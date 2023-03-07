import { Row, Card } from "react-bootstrap";
import InsCard from "./InsCard";
import styles from "./InsuranceInfo.module.scss";

function InsuranceInfo() {
  return (
    <Card as={Row} className={styles.insuranceInfo}>
      <Card.Header className="text-primary">Insurance Information</Card.Header>
      <Card.Body>
        <InsCard source="Primary" />
        <InsCard source="Secondary" />
      </Card.Body>
    </Card>
  );
}

export default InsuranceInfo;
