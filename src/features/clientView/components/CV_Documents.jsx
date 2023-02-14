import { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { RQList, RQManager, RQNewDoc, RQViewer } from "../../requirements";
import { ViewerFooter } from "../../../components/ViewerFooter";

export function CVDocuments() {
  const [show, setShow] = useState(false);
  const [activeNote, setActiveNote] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="mb-3" >
        <Col md={3} className="pe-0">
          <RQList activeForm={activeNote} setActiveForm={setActiveNote} />
        </Col>
        <Col md={9} >
          <Card style={{ height: "40rem" }}>
            <ViewerHeader/>
            <Card.Body className="overflow-auto">
              {activeNote ? (
                <RQViewer data={activeNote} activePage={activePage} />
              ) : null}
            </Card.Body>
            {activeNote ? (
              <ViewerFooter
                activePage={activePage}
                setActivePage={setActivePage}
              />
            ) : null}
          </Card>
        </Col>
        {/* <PNManager
          show={show}
          setShow={setShow}
          containerName="B.I.R.P. Progress Note Form"
          data={activeNote}
          edit
        /> */}
      </Row>
    </>
  );
}
