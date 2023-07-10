import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import AlertContainer from "./AlertContainer";
import { useForm } from "react-hook-form";
import { documents } from "../features/documents/data/documents";

export function ViewerFooter({
  activePage,
  setActivePage,
  activeDocument,
  onSubmit,
}) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const { reset } = useForm();
  const [maxPages, setMaxPages] = useState(
    activeDocument
      ? (
          documents.find((doc) => doc.doctypeid === activeDocument.docid) || {
            pages: 0,
          }
        ).pages
      : 0
  );

  const handleClose = () => {
    setActivePage(0);
  };

  const handleConfirm = (data) => {
    handleClose();
    reset();
  };
  const handleCancel = (data) => {};

  return (
    <Card.Footer className="d-flex flex-row justify-content-between p-2">
      <Button
        className="RQ-nav-button p-1"
        id="footer-previous"
        variant="outline-primary"
        disabled={activePage === 1 ? true : false || !activePage}
        // onClick={activePage === 0 ? () => {} : prevPage}
        type="submit"
      >
        Previous
      </Button>

      <Button
        className="RQ-nav-button p-1"
        variant={activePage >= maxPages ? "outline-success" : "outline-primary"}
        id="footer-next"
        // onClick={nextPage}
        disabled={activePage === false}
        type="submit"
      >
        {activePage >= maxPages ? "Complete" : "Next"}
      </Button>
      <AlertContainer
        show={alert.message && alert.data}
        alert={alert}
        setAlert={setAlert}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    </Card.Footer>
  );
}
