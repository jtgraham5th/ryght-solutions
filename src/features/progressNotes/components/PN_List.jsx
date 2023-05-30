import { Card, ListGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./PN_Manager.css";
import { PNListItem } from "./PN_ListItem";
import { useClient } from "../../../context/ClientContext";
import { PNNewNote } from "./PN_NewNote";
import { useEffect } from "react";

export function PNList({ activeNote, setActiveNote }) {
  const { activeProgNotes, activeTreatmentPlan } = useClient();
  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <Card.Title className="p-3 w-100 border mb-0">
          Progress Notes
        </Card.Title>
        <PNNewNote />
        <ListGroup style={{ height: "32rem" }} variant="flush">
          <div
            style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
          >
            {activeTreatmentPlan && activeTreatmentPlan.goals.length > 0 ? (
              activeProgNotes.map((note, index) => (
                <PNListItem
                  type={index}
                  key={index}
                  note={note}
                  selectNote={setActiveNote}
                  active={activeNote === note}
                />
              ))
            ) : (
              <ListGroup.Item className="d-flex flex-column justify-content-center h-100 border-0">
                <h3 className="text-muted text-center">
                  No Goals have been defined for this Client
                </h3>
                <h5 className="fw-lighter text-center">
                  Click the 'Treatment Plan' Tab to add new goals, objectives
                  and interventions.
                </h5>
              </ListGroup.Item>
            )}
          </div>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
