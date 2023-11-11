import { Modal, Button } from "react-bootstrap";
import "./AlertContainer.css";

function AlertContainer({
  show,
  alert,
  setAlert,
  handleConfirm,
  handleCancel,
  component,
  alertStyle,
}) {
  const handleClose = () => {
    if (handleCancel) handleCancel();
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
      className="shadow"
      animation={false}
      onHide={handleClose}
      dialogClassName={alertStyle ? alertStyle : "alert-width"}
    >
      <Modal.Header className="alertHeader" closeButton>
        <h6 className="mb-0">{alert.title}</h6>
      </Modal.Header>

      <Modal.Body className={component ? "" : "text-center"}>
        {component ? component : alert.message}
      </Modal.Body>
      {component ? null : (
        <Modal.Footer className="justify-content-center pt-2 pb-2">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default AlertContainer;
