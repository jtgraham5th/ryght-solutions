import { Card, ListGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./DocManager.css";
import { DocItem } from "./DocItem";
import { useClient } from "../../../context/ClientContext";
import { DocNew } from "./DocNew";

export function DocList({ activeDocument, setActiveDocument, resetDocument }) {
  const { activeDocuments } = useClient();
  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <Card.Title className="p-3 w-100 border mb-0">
          Client Documents
        </Card.Title>
        <DocNew />
        <ListGroup style={{ height: "32rem" }} variant="flush">
          <div
            style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
          >
            {activeDocuments
              .filter((item) => item.docid > 3)
              .map((value, i) => {
                return (
                  <DocItem
                    key={i}
                    index={i}
                    data={value}
                    selectDoc={setActiveDocument}
                    active={activeDocument === value}
                    resetDocument={resetDocument}
                  />
                );
              })}
          </div>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
