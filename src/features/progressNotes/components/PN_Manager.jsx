import { Button, Row, Modal, Form, Popover, OverlayTrigger } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./PN_Manager.css";
import AlertContainer from "../../../components/AlertContainer";
import { PN1 } from "./PN_1";
import { PN4 } from "./PN_4";
import { useForm } from "react-hook-form";

import {
  parseDefaultProgressNote,
  parseProgressNote,
} from "../utils/parseData";
import { useClient } from "../../../context/ClientContext";

export function PNManager({ data, show, setShow, containerName, edit }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const { control, register, handleSubmit, reset, setValue, watch, getValues } =
    useForm();
  const { updateClientProgNote, addClientProgNote, activeClient } = useClient();

  const handleClose = () => {
    setActivePage(0);
    setShow(false);
    reset();
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
        return (
          <PN1
            register={register}
            control={control}
            setValue={setValue}
            watch={watch}
            getValues={getValues}
            data={data}
          />
        );
      case 1:
        return (
          <PN4
            register={register}
            control={control}
            setValue={setValue}
            getValues={getValues}
          />
        );
      default:
        return (
          <PN1
            register={register}
            control={control}
            setValue={setValue}
            watch={watch}
            getValues={getValues}
          />
        );
    }
  };
  const onSubmit = (data) => {
    console.log(data);

    if (activePage < 1) {
      setActivePage((page) => page + 1);
    }
    if (activePage === 1) {
      setAlert({
        message: <h6>Are you sure you want to save these changes?</h6>,
        data: parseProgressNote(data, activeClient[20].patientid),
        title: "Save Progress Notes",
      });
    }
  };
  const handleConfirm = (data) => {
    console.log(data);
    if (edit) updateClientProgNote(data, activeClient[20].patientid);
    else addClientProgNote(data, activeClient[20].patientid);
    handleClose();
    reset();
  };

  useEffect(() => {
    if (edit && data) {
      const updatedProgNote = parseDefaultProgressNote(data);
      console.log("updatedProgNote",updatedProgNote)
      reset({ ...updatedProgNote });
    }
    // eslint-disable-next-line
  }, [data]);
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
