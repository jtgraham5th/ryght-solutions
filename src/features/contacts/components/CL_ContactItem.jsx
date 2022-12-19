import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import styles from "../ContactLog.module.scss";
import { Files, PencilSquare, XSquare } from "react-bootstrap-icons";

export function CLContactItem() {
  return (
    <Card>
      <Card.Header className={styles.contactItemHeader}>
        <Col className="flex-row">07/30/2022 1:30:00 PM </Col>
        <Col className="text-end">
          <Button variant="outline-secondary" size="sm">
            <PencilSquare />
          </Button>
          <Button variant="outline-secondary" size="sm">
            <Files />
          </Button>
          <Button variant="outline-secondary" size="sm">
            <XSquare />
          </Button>
        </Col>
      </Card.Header>
      <Card.Body className="p-2">
        <Row className={styles.contactItem}>
          <Col xs={5}>
            <Card.Title>Dr. Carl Lewis</Card.Title>
            <Card.Subtitle>Therapist </Card.Subtitle>
            <Badge bg="secondary">Phone / Inbound Call</Badge>
          </Col>
          <Col className={styles.contactComments} xs={6}>
            <Card.Text className="fw-bold mb-0">Comments: <span className="fw-normal">Cras justo odio</span></Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}