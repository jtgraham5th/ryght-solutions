import { Button } from "react-bootstrap";
import { useClient } from "../../../context/ClientContext";

export function AuthorizationsHeader({setShow}) {
  const { activeClient } = useClient();  
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h3>
        Authorizations for {activeClient.pfirstname}{" "}
        {activeClient.plastname}
      </h3>
      <Button
        className="me-2"
        onClick={handleShow}
        variant={"primary"}
        type="button"
      >
        New Authorization
      </Button>
    </div>
  );
}
