import { Col, Row, Button, Form } from "react-bootstrap";
import styles from "./Notes.module.scss";

function NSaddNew() {
  return (
    <Row className={styles.addNewNoteRow}>
      <h5 className="text-start">Create New Note</h5>
      <Col className={styles.addNewNote}>
        <div>Note:</div>
        <Form.Select className="fs-6">
          <option>Default select</option>
          <option>service</option>
          <option>Default select</option>
          <option>Default select</option>
        </Form.Select>
        <Button size="sm">Create New Note</Button>
      </Col>
    </Row>
  );
}

export default NSaddNew;
