import { Modal, Button } from "react-bootstrap";
import styles from "./Services.module.scss";

function ModalContainer({show, setShow, containerName, fullscreen, component}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose} fullscreen>
    <Modal.Header closeButton>
      <Modal.Title>{containerName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{component}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  );
}

export default ModalContainer;
