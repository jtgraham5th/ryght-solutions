import { useState } from "react";
import { Button } from "react-bootstrap";
import { DocManager } from "./DocManager";

export function DocNew() {
  const [showManager, setShowManager] = useState(false);

  const handleShow = () => setShowManager(true);

  return (
    <div className="ps-4 pe-4 pb-3 pt-3">
      <Button className="text-nowrap w-100" onClick={handleShow}>
        Add New Documents
      </Button>
      <DocManager
        show={showManager}
        setShow={setShowManager}
        containerName="Add New Documents"
      />
    </div>
  );
}
