import { Row, Col, Card } from "react-bootstrap";
import styles from "./InsuranceInfo.module.scss";
import { useClient } from "../context/ClientContext";
import { getFormValue } from "../features/clientDetails/utils/formatData";

function InsCard({ source }) {
  const { activeClient, formData } = useClient();
  const { ins1_fundingsource, ins1_policynumber, ins1_dateexpires } =
    activeClient;

  return (
    <Card className={styles.insuranceCard} border="primary fc-white">
      <Card.Header className="bg-primary text-white">{source} Source</Card.Header>
      <Card.Body className="pt-1">
        <Row>
          <Col md={9}>
            <Card.Title>
              {getFormValue("Funding Source ", ins1_fundingsource, formData)}
            </Card.Title>
            <Card.Subtitle>{ins1_policynumber}</Card.Subtitle>
            <Card.Text className="d-flex small mt-1 mb-2">
              <div>Expiration Date:</div>
              <div>{ins1_dateexpires}</div>
            </Card.Text>
          </Col>
          <Col className={styles.icCoPay}>
            <div>Co-Pay Amount:</div> $20
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default InsCard;
