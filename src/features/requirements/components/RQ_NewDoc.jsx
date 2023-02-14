import { useState } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";
import { RQManager } from "./RQ_Manager";

export function RQNewDoc() {
  const [showManager, setShowManager] = useState(false);

  const handleShow = () => setShowManager(true);

  return (
    // <Card className="shadow">
    //   <Card.Header className="fs-5">Create New Note</Card.Header>
    //   <Card.Body className="d-flex flex-column justify-content-center">
    //     <Row className="p-1 flex-row">
    //       <Col md="auto">
    <div className="ps-4 pe-4 pb-3 pt-3" >
    <Button className="text-nowrap w-100"  onClick={handleShow}>
        Add New Documents
      </Button>
      <RQManager
        show={showManager}
        setShow={setShowManager}
        containerName="Requirements Manager"
      />
    </div>
    //       </Col>
    //     </Row>
    //   </Card.Body>
    // </Card>
  );
}
