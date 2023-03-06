import { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { ViewerFooter } from "../../../components/ViewerFooter";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { PNList, PNManager, PNNewNote, PNViewNote } from "../../progressNotes";
export function CVProgressNotes() {
  const [show, setShow] = useState(false);
  const [activeNote, setActiveNote] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="mb-3">
        <Col md={3}>
          <PNList activeNote={activeNote} setActiveNote={setActiveNote} />
        </Col>
        <Col md={9}>
          <Card className="h-100">
            <ViewerHeader edit={handleShow} disabled={!activeNote} activeNote={activeNote}/>
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
          show={show}
          setShow={setShow}
          containerName="B.I.R.P. Progress Note Form"
          data={activeNote}
          edit
        />
      </Row>
    </>
  );
}
