import { Row } from "react-bootstrap";
import InsCard from "./InsCard";
import styles from "./InsuranceInfo.module.scss";

function InsuranceInfo() {
  return (
    <Row className={styles.insuranceInfo}>
      <InsCard source="Primary"/>
      <InsCard source="Secondary"/>
    </Row>
  );
}

export default InsuranceInfo;
