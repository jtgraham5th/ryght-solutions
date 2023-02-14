import { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

export function AUListHeader() {
  const [show, setShow] = useState(false);
  const [activeNote, setActiveNote] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const handleShow = () => setShow(true);

  return (
    <ListGroup.Item className="p-0">
      <Row className="bg-light">
        <Col md={1} className="fs-6 border">
        </Col>
        <Col md={1} className="fs-6 border">
          Submitted
        </Col>
        <Col md={2} className="fs-6 border">
          Service
        </Col>
        <Col md={1} className="fs-6 border">
          Units
        </Col>
        <Col md={1} className="fs-6 border">
          Freq
        </Col>
        <Col md={1} className="fs-6 border">
          Effective
        </Col>
        <Col md={1} className="fs-6 border">
          Lapsed
        </Col>
        <Col md={1} className="fs-6 border">
          By
        </Col>
        <Col md={1} className="fs-6 border">
          Approved
        </Col>
        <Col md={1} className="fs-6 border">
          Comments
        </Col>
        <Col md={1} className="fs-6 border">
          Assigned
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
