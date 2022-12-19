import { useState } from "react";
import { Button } from "react-bootstrap";
import { CEManager } from "../features/enrollment";
import { client01 } from "../data/formData";

function NewBillingBtn() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        className="form-label-button"
        variant="outline-success"
        size="sm"
        onClick={() => setShow(true)}
      >
        $ New Billing
      </Button>
      <CEManager
        show={show}
        setShow={setShow}
        containerName="Client Enrollment"
        data={client01.treatmentPlan.goals}
      />
    </>
  );
}

export default NewBillingBtn;
