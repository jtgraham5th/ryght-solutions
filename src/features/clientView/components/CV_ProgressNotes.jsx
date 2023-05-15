import { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { ViewerFooter } from "../../../components/ViewerFooter";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { PNList, PNManager, PNNewNote, PNViewNote } from "../../progressNotes";
export function CVProgressNotes() {
  const [activeNote, setActiveNote] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Row className="mb-3">
        <Col md={3}>
          <PNList activeNote={activeNote} setActiveNote={setActiveNote} />
        </Col>
        <Col md={9}>
          <Card className="h-100">
            <ViewerHeader
              edit={edit}
              setEdit={setEdit}
              activeNote={activeNote}
              disabled={!activeNote}
            />
            <Card.Body className="overflow-auto" style={{ height: "28rem" }}>
              {activeNote ? <PNViewNote data={activeNote} /> : null}
            </Card.Body>
            {activeNote ? (
              <ViewerFooter
                activePage={activePage}
                setActivePage={setActivePage}
              />
            ) : null}
          </Card>
        </Col>
        <PNManager
          show={edit}
          setShow={setEdit}
          containerName="B.I.R.P. Progress Note Form"
          data={activeNote}
          edit
        />
      </Row>
    </>
  );
}
