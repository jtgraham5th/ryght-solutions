import { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import styles from "./Notes.module.scss";
import { client01 } from "../data/formData";
import ProgressNotesManager from "./PN_Manager";

function PNNewNote() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

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
        <Button size="sm" onClick={handleShow}>Create New Note</Button>
      </Col>
      <ProgressNotesManager
        show={show}
        setShow={setShow}
        data={client01.treatmentPlan.goals}
        containerName="B.I.R.P. Progress Note Form"
      />
    </Row>
  );
}

export default PNNewNote;
