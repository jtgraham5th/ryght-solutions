import { Card, ListGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./PN_Manager.css";
import { PNListItem } from "./PN_ListItem";
import { useClient } from "../../../context/ClientContext";
import { PNNewNote } from "./PN_NewNote";

export function PNList({ activeNote, setActiveNote }) {
  // const [show, setShow] = useState(false);
  const { activeProgNotes } = useClient();

  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <Card.Title className="p-3 w-100 border mb-0">Progress Notes</Card.Title>
        <PNNewNote />
        <ListGroup style={{ height: "32rem" }} variant="flush">
          <div
            style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
          >
            {activeProgNotes.map((note, index) => (
              <PNListItem
                type={index}
                key={index}
                note={note}
                selectNote={setActiveNote}
                active={activeNote === note}
              />
            ))}
          </div>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
