import { useState } from "react";
import { Button } from "react-bootstrap";
import ClientEnrollmentManager from "./CE_Manager";
import { client01 } from "../data/formData";
import "../App.css"

function NewClient() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
      className="form-label-button"
        variant="outline-primary"
        size="sm"
        onClick={() => setShow(true)}
      >
        + New Client
      </Button>
      <ClientEnrollmentManager
        show={show}
        setShow={setShow}
        containerName="Client Enrollment"
        data={client01.treatmentPlan.goals}
      />
    </>
  );
}

export default NewClient;
