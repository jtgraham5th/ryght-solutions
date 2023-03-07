import { Card, ListGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./RQ_Manager.css";
import { RQAssessmentItem } from "./RQAssessmentItem";
import { useClient } from "../../../context/ClientContext";
import { RQNewDoc } from "./RQ_NewDoc";

export function RQList({ activeForm, setActiveForm }) {
  const { activeBillingTx } = useClient();

  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <Card.Title className="p-3 w-100 border mb-0">
          Client Documents
        </Card.Title>
        <RQNewDoc />
        <ListGroup style={{ height: "32rem" }} variant="flush">
          <div
            style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
          >
            {activeBillingTx
              .filter((item) => item.doctypeid !== 1)
              .map((value, i) => {
                return (
                  <RQAssessmentItem
                    key={i}
                    index={i}
                    data={value}
                    selectDoc={setActiveForm}
                    active={activeForm === value}
                  />
                );
              })}
          </div>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
