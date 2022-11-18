import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ClientEnrollmentManager from "./CE_Manager";
import { client01 } from "../data/formData";
import { useClient } from "../data/ClientContext";
import "../App.css"

function EditClient() {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <Button
      className="form-label-button"
        variant="outline-primary"
        size="sm"
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
