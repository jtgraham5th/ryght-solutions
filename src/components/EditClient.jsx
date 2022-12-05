import { useState } from "react";
import { Button } from "react-bootstrap";
import ClientEnrollmentManager from "./CE_Manager";
import "../App.css";

function EditClient() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="outline-primary"
        style={{ display: "flex", alignItems: "center", height: "max-content", marginLeft: "1rem"}}
        onClick={() => setShow(true)}
      >
        Edit Client
      </Button>
      <ClientEnrollmentManager
        show={show}
        setShow={setShow}
        containerName="Edit Client Info"
        edit={true}
      />
    </>
  );
}

export default EditClient;
