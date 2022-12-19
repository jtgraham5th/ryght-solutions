import { Button, Row, Modal } from "react-bootstrap";
import { useState } from "react";
import "./RQ_Manager.css";
import AlertContainer from "../../../components/AlertContainer";
import {
  renderAdultBPS,
  renderAdolescentBPS,
  renderCANS,
  renderANSA,
  requirements
} from "../data/requirements";
import { useForm } from "react-hook-form";

export function RQViewer({ data, show, setShow, containerName }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const { control, register, reset } = useForm();

  const renderRequirement = () => {
    switch (data.doctypeid) {
      case 4:
        return renderAdolescentBPS(activePage, register, control);
      case 5:
        return renderAdultBPS(activePage, register, control);
      case 6:
        return renderCANS(activePage, register, control);
      case 7:
        return renderANSA(activePage, register, control);
      case 8:
        return renderAdultBPS(activePage, register, control);
      case 9:
        return renderAdultBPS(activePage, register, control);
      case 10:
        return renderAdultBPS(activePage, register, control);
      default:
        return renderAdultBPS(activePage, register, control);
    }
  };
  const getAssessmentInfo = () => {
    const assessmentInfo = requirements.filter(
      (requirement) => data.doctypeid === parseInt(requirement.doctypeid)
    );
    if (assessmentInfo.length > 0) {
      return assessmentInfo[0].name;
    } else return "NULL";
  };

  const handleClose = () => {
    setActivePage(0);
    setShow(false);
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
    <Modal show={show} dialogClassName="RQ-width" onHide={handleClose}>
      <Modal.Header className="RQ-header" closeButton>
        <Modal.Title>{getAssessmentInfo()}</Modal.Title>
      </Modal.Header>
      {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
      <Modal.Body>
        <Row className="d-flex justify-content-evenly align-items-center">
          {renderRequirement(activePage, register, control)}
        </Row>
      </Modal.Body>
      <Modal.Footer className="flex-row justify-content-between p-2">
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
          variant={activePage >= 14 ? "outline-success" : "outline-primary"}
          onClick={nextPage}
          type="submit"
        >
          {activePage >= 14 ? "Complete" : "Next"}
        </Button>
      </Modal.Footer>
      {/* </Form> */}
      <AlertContainer
        show={alert.message && alert.data}
        alert={alert}
        setAlert={setAlert}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    </Modal>
  );
}