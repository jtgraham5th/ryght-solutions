import { Button, Row, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./PN_Manager.css";
import AlertContainer from "../../../components/AlertContainer";
import { PN1 } from "./PN_1";
import { PN4 } from "./PN_4";
import { useForm } from "react-hook-form";
import { addNewBillingTx } from "../../documents/services/api";
import { parseBillingTx } from "../../services/utils/parseData";
import {
  parseDefaultProgressNote,
  parseProgressNote,
} from "../utils/parseData";
import { useClient } from "../../../context/ClientContext";
import { useUser } from "../../../context/UserContext";
import { updateBillingTx } from "../../documents/services/api";

export function PNManager({ data, show, setShow, containerName, edit }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const { control, register, handleSubmit, reset, setValue, watch, getValues } =
    useForm();
  const { updateClientProgNote, addClientProgNote, activeClient } = useClient();
  const { user } = useUser();

  const handleClose = () => {
    setActivePage(0);
    setShow(false);
    reset();
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
        data: parseProgressNote(data, activeClient.patientid),
        title: "Save Progress Notes",
      });
    }
  };
  const handleConfirm = async (data) => {

    // Create new billingid if there isnt one
    if (!data[0].billingid || data[0].billingid === 0 || data[0].billingid === 1000) {
      let newBillingTx = parseBillingTx(activeClient, 2, user.userid);
      const tx = await addNewBillingTx();
      if (tx && tx.billingid) {
        tx.lastuserid = newBillingTx[0].lastuserid;
        tx.patientid = newBillingTx[0].patientid;
        tx.doctypeid = newBillingTx[0].doctypeid;
        tx.lastupdate = newBillingTx[0].lastupdate;
        await updateBillingTx(tx);
        data[0].billingid = tx.billingid;
      }
    }

    if (edit) updateClientProgNote(data, activeClient.patientid);
    else addClientProgNote(data, activeClient.patientid);
    handleClose();
    reset();
  };

  useEffect(() => {
    if (edit && data) {
      console.log("initial data", data)
      const updatedProgNote = parseDefaultProgressNote(data);
      console.log("updatedProgNote", updatedProgNote);
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
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
