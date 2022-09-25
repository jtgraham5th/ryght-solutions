import { useState } from "react";
import { Button } from "react-bootstrap";
import ClientEnrollmentManager from "./CE_Manager";
import { client01 } from "../data/formData";

function NewClient() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="outline-primary"
        size="sm"
        className="p-1"
        onClick={() => setShow(true)}
      >
        + Add New Client
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
