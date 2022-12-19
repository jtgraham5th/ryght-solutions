import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { Files, PencilSquare, XSquare } from "react-bootstrap-icons";
import styles from "../FileManager.module.scss";

export function FileCard() {
  return (
    <ListGroup.Item className={styles.fileListItem}>
      <Card className={styles.fileCard}>
        <Row>
          <Col md={8} className={styles.fileName}>
            <Card.Title>File Name</Card.Title>
            <Card.Subtitle>01/01/2022</Card.Subtitle>
            <span>pdf | 12345 bytes</span>
          </Col>
          <Col md={4} className={styles.fileButtons}>
            <div>01/01/2022 04:00 PM</div>
            <div>
              <Button variant="outline-primary" size="sm">
                <PencilSquare />
              </Button>
              <Button variant="outline-secondary" size="sm">
                <Files />
              </Button>
              <Button variant="outline-danger" size="sm">
                <XSquare />
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </ListGroup.Item>
  );
}
