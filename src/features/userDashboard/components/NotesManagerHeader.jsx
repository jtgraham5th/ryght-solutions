import { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

export function NotesManagerHeader() {

  return (
    <ListGroup.Item className="p-0">
      <Row className="bg-light">
        <Col md={1} className="small border">
        </Col>
        <Col md={1} className="small border">
          Submitted
        </Col>
        <Col md={2} className="small border">
          Service
        </Col>
        <Col md={1} className="small border">
          Units
        </Col>
        <Col md={1} className="small border">
          Freq
        </Col>
        <Col md={1} className="small border">
          Effective
        </Col>
        <Col md={1} className="small border">
          Lapsed
        </Col>
        <Col md={1} className="small border">
          By
        </Col>
        <Col md={1} className="small border">
          Approved
        </Col>
        <Col md={1} className="small border">
          Comments
        </Col>
        <Col md={1} className="small border">
          Assigned
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
