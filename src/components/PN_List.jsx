import { Row, Col, Card, Form, ListGroup } from "react-bootstrap";
import styles from "./Notes.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import ProgresNotesListItem from "./ProgressNotesListItem";
import { Search } from "react-bootstrap-icons";
import { client01 } from "../data/formData";
import "./PN_Manager.css";
import { useState } from "react";
import ModalContainer from "./ModalContainer";
import PNViewNote from "./PN_ViewNote";

function ProgressNotesList() {
  const [show, setShow] = useState(false);
  const [activeNote, setActiveNote] = useState(false);

  return (
    <Card className="h-100">
      <ListGroup className={styles.dataGroup} variant="flush">
        <ListGroup.Item variant="primary">
          <Row className={styles.dataHeader}>
            <Col>B.I.R.P Notes</Col>
            <Col md="auto">
              <Form className="p-0">
                <Form.Group className="d-flex flex-row">
                  <Form.Label className="m-0">
                    <Search className="m-2" />
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="search goals"
                    className="pt-0 pb-0 small"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item className="dataTableRow">
          <Row>
            <Col md={1}></Col>
            <Col>Service Date</Col>
            <Col>Time</Col>
            <Col>Consumer</Col>
            <Col>Goal</Col>
            <Col>Status</Col>
            <Col>By</Col>
            <Col>Submitted</Col>
          </Row>
        </ListGroup.Item>
        <div style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}>
          {client01.progressNotes.map((note, index) => (
            <ProgresNotesListItem
              type={index}
              key={index}
              note={note}
              showNote={setShow}
              selectNote={setActiveNote}
            />
          ))}
        </div>
      </ListGroup>
      <ModalContainer
        show={show}
        setShow={setShow}
        containerName="View Progress Note"
        component={<PNViewNote data={activeNote} />}
      />
    </Card>
  );
}

export default ProgressNotesList;
