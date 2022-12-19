import { useState } from "react";
import { Button } from "react-bootstrap";
import { CEManager } from "../features/enrollment";
import "../App.css";

function EditClientBtn() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="outline-primary"
        style={{
          display: "flex",
          alignItems: "center",
          height: "max-content",
          marginLeft: "1rem",
        }}
        onClick={() => setShow(true)}
      >
        Edit Client
      </Button>
      <CEManager
        show={show}
        setShow={setShow}
        containerName="Edit Client Info"
        edit={true}
      />
    </>
  );
}

export default EditClientBtn;
