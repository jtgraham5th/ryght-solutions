import {
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import styles from "../Services.module.scss";

export function SVaddByGroup() {
  return (
    <Card>
      <Card.Header className={styles.cardHeader}>
        Add Services By Group
      </Card.Header>
      <Card.Body className="p-2">
          <Form.Select className="fs-6">
            <option>Default select</option>
            <option>service</option>
            <option>Default select</option>
            <option>Default select</option>
          </Form.Select>
        <Col className={styles.addByGroup}>
          <Button size="sm">Add Services in Group</Button>
          <Button size="sm" variant="outline-primary">Services Manager</Button>
        </Col>
      </Card.Body>
    </Card>
  );
}
