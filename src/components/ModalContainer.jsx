import { Modal } from "react-bootstrap";
import "./ModalContainer.css";

function ModalContainer({
  show,
  setShow,
  containerName,
  fullscreen,
  component,
}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} dialogClassName="modal-width" onHide={handleClose}>
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title>{containerName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{component}</Modal.Body>
      {/*<Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
       </Modal.Footer> */}
    </Modal>
  );
}

export default ModalContainer;
