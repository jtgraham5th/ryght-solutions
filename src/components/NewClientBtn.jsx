import { useState } from "react";
import { Button } from "react-bootstrap";
import { CEManager } from "../features/enrollment";
import "../App.css";

function NewClientBtn() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        className="form-label-button"
        variant="outline-light"
        size="sm"
        onClick={() => setShow(true)}
      >
        + New Client
      </Button>
      <CEManager
        show={show}
        setShow={setShow}
        containerName="Client Enrollment"
        edit={false}
      />
    </>
  );
}

export default NewClientBtn;
