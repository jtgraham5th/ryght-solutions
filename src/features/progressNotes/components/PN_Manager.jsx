import { Button, Row, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import "./PN_Manager.css";
import AlertContainer from "../../../components/AlertContainer";
import {PN1} from "./PN_1";
import {PN2} from "./PN_2";
import {PN3} from "./PN_3";
import {PN4} from "./PN_4";
import { useForm } from "react-hook-form";

export function PNManager({ data, show, setShow, containerName }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const { control, register, handleSubmit, reset } = useForm();
  const [progressNoteData, setProgressNoteData] = useState({});

  const handleClose = () => {
    setActivePage(0);
    setShow(false);
  };
  const handleShow = () => setAlert(true);
  const nextPage = () => {
    setActivePage((page) => page + 1);
  };
  const prevPage = () => {
    setActivePage((page) => page - 1);
  };
  const renderPage = () => {
    switch (activePage) {
      case 0:
        return <PN1 register={register} control={control} />;
      case 1:
        return <PN2 register={register} control={control} />;
      case 2:
        return <PN3 register={register} control={control} />;
      case 3:
        return <PN4 register={register} control={control} />;
      default:
        return <PN1 register={register} control={control} />;
    }
  };
  const onSubmit = (data) => {
    setProgressNoteData((prevState) => ({ ...prevState, ...data }));
    if (activePage < 3) {
      setActivePage((page) => page + 1);
    }
    if (activePage === 3) {
      setAlert({
        message: <h6>Are you sure you want to save these changes?</h6>,
        data: progressNoteData,
        title: "Save Progress Notes",
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
    <Modal show={show} dialogClassName="PNM-width" onHide={handleClose}>
      <Modal.Header className="PNM-header" closeButton>
        <Modal.Title>{containerName}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Row className="d-flex justify-content-evenly align-items-center">
            {renderPage()}
          </Row>
        </Modal.Body>

        <Modal.Footer className="flex-row justify-content-between p-2">
          <Button
            className="PNM-nav-button p-1"
            variant="outline-primary"
            disabled={activePage === 0 ? true : false}
            onClick={activePage === 0 ? () => {} : prevPage}
          >
            Previous
          </Button>
          <Button
            className="PNM-nav-button p-1"
            variant={activePage >= 3 ? "outline-success" : "outline-primary"}
            type="submit"
            // onClick={activePage >= 3 ? () => console.log("submit") : nextPage}
          >
            {activePage >= 3 ? "Submit" : "Next"}
          </Button>
        </Modal.Footer>
      </Form>
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
