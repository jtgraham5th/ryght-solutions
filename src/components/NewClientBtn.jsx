import { useState } from "react";
import { Button } from "react-bootstrap";
import { CEManager } from "../features/enrollment";
import "../App.css";
import { PersonPlusFill } from "react-bootstrap-icons";
function NewClientBtn() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
       <PersonPlusFill size="20" />
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
