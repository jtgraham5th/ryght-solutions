import { useState, useEffect } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { RQList, RQViewer } from "../../requirements";
import { ViewerFooter } from "../../../components/ViewerFooter";

export function CVDocuments() {
  const [show, setShow] = useState(false);
  const [activeNote, setActiveNote] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [edit, setEdit] = useState(false);

  const handleShow = () => setShow(true);
  const onSubmit = () => {
    console.log("submit")
    setEdit(false);
  }
  useEffect(() => {
    setEdit(false);
  },[activeNote])
  return (
    <>
      <Row className="mb-3">
        <Col md={3} className="pe-0">
          <RQList activeForm={activeNote} setActiveForm={setActiveNote} />
        </Col>
        <Col md={9}>
          <Card style={{ height: "40rem" }}>
            <ViewerHeader edit={edit} setEdit={setEdit} activeNote={activeNote} onSubmit={onSubmit}/>
            <Card.Body className="overflow-auto">
              {activeNote ? (
                <RQViewer data={activeNote} activePage={activePage} edit={edit} />
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
