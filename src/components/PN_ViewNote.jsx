import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import {
  Unlock,
  Printer,
  Trash,
  Key,
  Receipt,
  CreditCardFill,
} from "react-bootstrap-icons";
import "./PN_Manager.css";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

function PNViewNote({ data }) {
  const noteRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => noteRef.current,
  });
  const getPageMargins = () => {
    return `@page { margin: 20px 20px 20px 20px !important; }`;
  };

  return (
    <>
      <Row className="h-100">
        <Col md={2} className="pn_note-view-nav">
          <Button className="mb-4">Note History</Button>
          <h5>Note Actions</h5>
          <ListGroup variant="flush">
            <ListGroup.Item action disabled>
              <Unlock className="me-2" />
              Unlock Note
            </ListGroup.Item>
            <ListGroup.Item action onClick={handlePrint}>
              <Printer className="me-2" />
              Print Note
            </ListGroup.Item>
            <ListGroup.Item action disabled>
              <Trash className="me-2" />
              Trash Note
            </ListGroup.Item>
            <ListGroup.Item action disabled>
              <Key className="me-2" />
              Seal Note
            </ListGroup.Item>
            <ListGroup.Item action disabled>
              <CreditCardFill className="me-2" />
              Payment History
            </ListGroup.Item>
            <ListGroup.Item action disabled>
              <Receipt className="me-2" />
              Billing Status History
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={10} ref={noteRef} className="pn_note-view">
          <Row className="align-items-center mb-2">
            <Col md={3}></Col>
            <Col md={6} className="text-center">
              <h5>Graham & Associates, Inc.</h5> 1518 Airport Road Hinesville,
              GA 31313-9439
              <p />
              <h3>Progress Note</h3>
            </Col>
            <Col className="text-end" md={3}>
              SHN RCM CMOs
              <br /> 1518 Airport Road
              <br /> Hinesville, GA
              <br /> 31313-9439
              <br /> LIBERTY County
              <br /> Phone : 912-559-5536
            </Col>
          </Row>
          <Card className="mb-3">
            <style>{getPageMargins()}</style>
            <Card.Body>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>Consumer: </h6> Carl Matthews
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Contact Type: </h6> Carl Matthews
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Setting: </h6> Carl Matthews
                </Col>
              </Row>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>Date of Service: </h6> Carl Matthews
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Units Used: </h6> Carl Matthews
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Policy #: </h6> Carl Matthews
                </Col>
              </Row>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>Start: </h6> Carl Matthews
                </Col>
                <Col className="pn_note-view-item">
                  <h6>End: </h6> Carl Matthews
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Service Code: </h6> Carl Matthews
                </Col>
              </Row>
              <Row>
                <Col className="pn_note-view-item">
                  <h6>Diagnosis: </h6> Carl Matthews
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col className="pn_note-view-item">
                  <h6>Consumer met goal(s) this session: </h6>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>Service Delivered: </h6>{" "}
                </Col>
              </Row>
              <Row>
                <Col className="pn_note-view-item">
                  <h6>Person(s) Involved: </h6>{" "}
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Consumers overall affect: </h6>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col md={3} className="pn_note-view-item">
                  <h6>
                    Relevant Changes in Medical Conditions/Medications since
                    last visit?:{" "}
                  </h6>{" "}
                </Col>
                <Col className="pn_note-view-item">
                  <h6>If yes, please explain: </h6>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Service Plan Objectives/Interventions</Card.Title>
              <Row>
                <Col md={3} className="pn_note-view-item">
                  <h6>Goal: </h6> Ansxieyt
                </Col>
              </Row>
              <Card.Text>Hey theyse are my goals</Card.Text>
              <Row>
                <Col className="pn_note-view-item mb-2">
                  <h6>Objective: </h6>
                </Col>
              </Row>
              <Row>
                <Col className="pn_note-view-item mb-2">
                  <h6>Intervention: </h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="page-break" />

          <Card className="mb-3">
            <Card.Body>
              <Card.Subtitle>Behavior</Card.Subtitle>
              <Card.Text>Hey theyse are my goals</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Subtitle>Intervention</Card.Subtitle>
              <Card.Text>Hey theyse are my goals</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Subtitle>Response</Card.Subtitle>
              <Card.Text>Hey theyse are my goals</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Subtitle>Plan</Card.Subtitle>
              <Card.Text>Hey theyse are my goals</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Subtitle>Strengths</Card.Subtitle>
              <Card.Text>Hey theyse are my goals</Card.Text>
            </Card.Body>
          </Card>
          <hr />

          <div className="page-break" />

          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col className="pn_note-view-item">
                  <h6>Next Appointment: </h6>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col className="pn_note-view-item">
                  <Card.Title>
                    Staff Signature/Position Credentials:{" "}
                  </Card.Title>{" "}
                </Col>
                <Col className="pn_note-view-item font-italic">
                  For Note ID: 01234567 ONLY{" "}
                </Col>
                <Col className="pn_note-view-item font-italics">
                  {new Date().toLocaleString("en-US")}
                </Col>
              </Row>
              <Row>
                <Col md={3}>Alexa Burdok MA/ST Therapist</Col>
                <Col>Signature</Col>
              </Row>
            </Card.Body>
          </Card>

          <Card border="light" className="mb-2">
            <Card.Body>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>Note First Signed By: </h6> Carl Matthews
                </Col>
              </Row>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>Note Last Modified By: </h6> Carl Matthews
                </Col>
              </Row>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>See Change History for Details </h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Note Change History</Card.Title>
              <hr />
              <Card>
                <Card.Body>
                  <Row className="mb-2">
                    <Col className="pn_note-view-item">
                      <h6>Staff: </h6> Carl Matthews
                    </Col>
                    <Col className="pn_note-view-item">
                      <h6>Date: </h6> Carl Matthews
                    </Col>
                    <Col className="pn_note-view-item">
                      <h6>Reason: </h6> Carl Matthews
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col className="pn_note-view-item">
                      <h6>Action: </h6> Carl Matthews
                    </Col>
                    <Col className="pn_note-view-item">
                      <h6>(Signature Goes Here) </h6>
                    </Col>
                    <Col className="pn_note-view-item">
                      <h6>Date Signed: </h6> 09/23/2022
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default PNViewNote;
