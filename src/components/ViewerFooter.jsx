import { Button, Row, Modal, Card } from "react-bootstrap";
import { useState } from "react";
import AlertContainer from "./AlertContainer";
import { useForm } from "react-hook-form";

export function ViewerFooter({ activePage, setActivePage }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const { control, register, reset } = useForm();

  const handleClose = () => {
    setActivePage(0);
  };

  const nextPage = () => {
    if (activePage < 14) {
      setActivePage((page) => page + 1);
    }
  };
  const prevPage = () => {
    setActivePage((page) => page - 1);
  };

  const onSubmit = (data) => {
    if (activePage < 14) {
      setActivePage((page) => page + 1);
    }
    if (activePage === 14) {
      setAlert({
        message: <h6>Are you sure you want to save these changes?</h6>,
        data: data,
        title: "Add New Client",
      });
    }
  };
  const handleConfirm = (data) => {
    console.log(data);
    handleClose();
    reset();
  };
  const handleCancel = (data) => {};

  return (
    <Card.Footer className="d-flex flex-row justify-content-between p-2">
      <Button
        className="RQ-nav-button p-1"
        variant="outline-primary"
        disabled={activePage === 0 ? true : false}
        onClick={activePage === 0 ? () => {} : prevPage}
      >
        Previous
      </Button>
      <Button
        className="RQ-nav-button p-1"
        variant={
          activePage >= 14 ? "outline-success" : "outline-primary"
        }
        onClick={nextPage}
        type="submit"
      >
        {activePage >= 14 ? "Complete" : "Next"}
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
