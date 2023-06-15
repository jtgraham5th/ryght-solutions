import { useState } from "react";
import { Button } from "react-bootstrap";
import { PNManager } from "./PN_Manager";
import { useClient } from "../../../context/ClientContext";

export function PNNewNote() {
  const [show, setShow] = useState(false);
  const { activeTreatmentPlan } = useClient();
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="ps-4 pe-4 pb-3 pt-3">
        <Button
          className="text-nowrap w-100"
          onClick={handleShow}
          disabled={
            activeTreatmentPlan.goals.length < 1 &&
            activeTreatmentPlan.objectives.length < 1 &&
            activeTreatmentPlan.interventions.length < 1
          }
        >
          Create New Note
        </Button>
      </div>
      <PNManager
        show={show}
        setShow={setShow}
        containerName="B.I.R.P. Progress Note Form"
      />
    </>
  );
}
