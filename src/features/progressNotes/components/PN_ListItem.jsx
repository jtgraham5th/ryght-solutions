import { Row, Col, ListGroup, Button } from "react-bootstrap";
import "./PN_Manager.css";
import { useClient } from "../../../context/ClientContext";

export function PNListItem({ type, disabled, note, showNote, selectNote, active }) {
  const { activeClient } = useClient();
  const viewNote = () => {
    selectNote(note);
    // showNote(true);
  };

  return (
    <ListGroup.Item key={`default-${type}`} action disabled={disabled} active={active} onClick={viewNote}>
      <Row>
        <Col md={6} className="d-flex flex-column">
          <div>
            <small className="fst-italic">{note.f1}</small>
          </div>
          <h6 className="fw-bold mb-0">
            {activeClient[20].pfirstname + " " + activeClient[20].plastname}
          </h6>
          <div>
            <small className="fw-bold">Goal: </small>
            <small>{note.f13}</small>
          </div>
        </Col>
        <Col md={6} className="d-flex flex-column text-end">
          <small>
            {note.f2} - {note.f3}
          </small>
          <div>
            <small className="text-secondary fw-bold">Units: </small>
            <small>{note.f5}</small>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
