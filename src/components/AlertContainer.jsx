import { Modal, Button } from "react-bootstrap";
import "./AlertContainer.css";

function AlertContainer({
  show,
  alert,
  setAlert,
  handleConfirm,
  handleCancel,
}) {
  const handleClose = () => {
    handleCancel();
    setAlert({ message: "", data: "", title: "" });
  };

  const handleSave = () => {
    handleConfirm(alert.data);
    setAlert({ message: "", data: "", title: "" });
  };

  return (
    <Modal
      show={show}
      backdrop="static"
      centered
      animation={false}
      onHide={handleClose}
      dialogClassName="alert-width"
    >
      <Modal.Header className="alertHeader" closeButton>
        <h6 className="mb-0">{alert.title}</h6>
      </Modal.Header>
      <Modal.Body className="text-center">{alert.message}</Modal.Body>
      <Modal.Footer className="justify-content-center pt-2 pb-2">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertContainer;
