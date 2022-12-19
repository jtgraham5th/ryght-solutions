import { Row, Col, ListGroup, Button } from "react-bootstrap";
import "./PN_Manager.css";

export function PNListItem({ type, disabled, note, showNote, selectNote }) {
  const viewNote = () => {
    selectNote(note);
    showNote(true);
  };

  return (
    <ListGroup.Item
      key={`default-${type}`}
      disabled={disabled}
      className="pl-1"
      style={{ borderLeft: "0px", borderRight: "0px" }}
    >
      <Row className="pn-list-item">
        <Col md={1}>
          <Button
            className="p-1"
            variant="outline-secondary"
            size="sm"
            onClick={viewNote}
          >
            View Note
          </Button>
        </Col>
        <Col>{new Date(note.dateOfService).toLocaleDateString("en-US")}</Col>
        <Col>
          <small>
            {new Date(note.timeStart).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            -
            {new Date(note.timeEnd).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </Col>
        <Col>John Doe</Col>
        <Col>{note.goal}</Col>
        <Col>Locked</Col>
        <Col>Larry Anderson</Col>
        <Col>{new Date().toLocaleDateString("en-US")}</Col>
      </Row>
    </ListGroup.Item>
  );
}
