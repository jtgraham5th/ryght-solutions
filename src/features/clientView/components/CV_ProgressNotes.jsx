import { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { PNList, PNManager, PNNewNote, PNViewNote } from "../../progressNotes";
export function CVProgressNotes() {
  const [show, setShow] = useState(false);
  const [activeNote, setActiveNote] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="mb-3">
        <Col md={4}>
          <PNNewNote />
        </Col>
        <Col md={8}>
          <Card className="h-100">
            <Card.Body>
              <Form.Group>
                <Form.Label className="text-muted mb-2">
                  Check OPTIONAL information to be shown when PRINTED:
                </Form.Label>
                <Row>
                  <Col md={4}>
                    <Form.Check
                      type="checkbox"
                      name="optPrintInfo"
                      value="Case Manager Name"
                      label="Case Manager Name"
                      disabled
                    />
                    <Form.Check
                      type="checkbox"
                      name="optPrintInfo"
                      value="Referral Date"
                      label="Referral Date"
                      disabled
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      type="checkbox"
                      name="optPrintInfo"
                      value="Case Manager Supervisor"
                      label="Case Manager Supervisor"
                      disabled
                    />
                    <Form.Check
                      type="checkbox"
                      name="optPrintInfo"
                      value="Client's Record ID"
                      label="Client's Record ID"
                      disabled
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      type="checkbox"
                      name="optPrintInfo"
                      value="Case Number"
                      label="Case Number"
                      disabled
                    />
                    <Form.Check
                      type="checkbox"
                      name="optPrintInfo"
                      value="Review Comment"
                      label="Review Comment"
                      disabled
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <PNList activeNote={activeNote} setActiveNote={setActiveNote} />
        </Col>
        <Col md={8}>
          <Card className="overflow-auto" style={{ height: "28rem" }}>
            <Card.Body>
              <Row className="border p-2 m-2 mb-4 justify-content-between align-items-center shadow bg-light">
                <Card.Title className="w-25 mb-0">Preview</Card.Title>
                <Button className="text-nowrap w-25" onClick={handleShow} disabled={!activeNote}>
                  Edit Progress Note
                </Button>
              </Row>

              {activeNote ? <PNViewNote data={activeNote} /> : null}
            </Card.Body>
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
