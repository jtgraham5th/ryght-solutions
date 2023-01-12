import { useState } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";
import { PNManager } from "./PN_Manager";

export function PNNewNote() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <Card className="shadow">
      <Card.Header className="fs-5">Create New Note</Card.Header>
      <Card.Body className="d-flex flex-column justify-content-center">
        <Row className="p-1 flex-row">
          <Form.Label as={Col} md={2}>
            Note:
          </Form.Label>
          <Col md={5}>
            <Form.Select className="fs-6">
              <option>Default select</option>
              <option>service</option>
              <option>Default select</option>
              <option>Default select</option>
            </Form.Select>
          </Col>
          <Col md={5}>
            <Button className="text-nowrap" onClick={handleShow}>
              Create New Note
            </Button>
          </Col>
        </Row>
      </Card.Body>
      <PNManager
        show={show}
        setShow={setShow}
        containerName="B.I.R.P. Progress Note Form"
      />
    </Card>
  );
}
