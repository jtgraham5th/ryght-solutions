import { Button, Row, Modal, Form, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./CE_Manager.css";
import { useForm } from "react-hook-form";
import { useClient } from "../../../context/ClientContext";
import {
  parseFormData,
  parseDefaultPC,
  parseDefaultEC,
  parseDefaultValues,
  defaultEC,
  defaultPC,
} from "../utils/parseData";
import FormUpdate from "../../../components/FormUpdate";
import {
  hasECFieldsChanged,
  hasPCFieldsChanged,
  renderPage,
} from "../utils/formhelper";

export function CEManager({ show, setShow, containerName, edit }) {
  const [activePage, setActivePage] = useState(0);
  const [tempID, setTempID] = useState();
  const [toggleUpdate, setToggleUpdate] = useState({
    status: "",
    message: "",
    show: false,
  });
  const [editing, setEditing] = useState(edit);

  const { control, register, handleSubmit, reset, setValue, formState, watch } =
    useForm({ mode: "onBlur" });
  const {
    activeClient,
    activeContacts,
    addClient,
    updateClient,
    addContact,
    updateContact,
    resetClient,
    loading,
  } = useClient();
  const { isDirty, isValid, dirtyFields } = formState;

  const handleClose = () => {
    setActivePage(0);
    setEditing(false);
    reset();
    setShow(false);
  };
  const nextPage = () => {
    setActivePage((page) => page + 1);
  };
  const prevPage = async () => {
    const data = watch();
    const { t21, t22 } = parseFormData(
      data,
      editing,
      tempID,
      activeClient,
      activeContacts
    );
    if (isDirty) {
      switch (activePage) {
        case 1:
          try {
            await updateClient(t21, 21);
            setToggleUpdate({
              status: "Success",
              message: "Client data has been successfully updated.",
              show: true,
            });
            setActivePage((page) => page - 1);
            resetClient(!tempID ? activeClient[20].patientid : tempID);
          } catch (error) {
            setToggleUpdate({
              status: "Error",
              message: "There was an error saving the data. Please try again.",
              show: true,
            });
          }
          break;
        case 2:
          try {
            await updateClient(t22, 22);
            setToggleUpdate({
              status: "Success",
              message: "Client data has been successfully updated.",
              show: true,
            });
            setActivePage((page) => page - 1);
            resetClient(!tempID ? activeClient[20].patientid : tempID);
          } catch (error) {
            setToggleUpdate({
              status: "Error",
              message: "There was an error saving the data. Please try again.",
              show: true,
            });
          }
          break;
        default:
          setActivePage((page) => page - 1);
          break;
      }
    } else {
      setActivePage((page) => page - 1);
    }
  };

  useEffect(() => {
    console.log("Editing is :", editing);
  }, [editing]);

  const onSubmit = async (data) => {
    console.log("Editing is :", editing);
    console.log(activePage);
    if (isDirty) {
      const { t20, t21, t22, patientContact, emergencyContact } = parseFormData(
        data,
        editing,
        tempID,
        activeClient,
        activeContacts
      );
      let newPatientId = false;

      switch (activePage) {
        case 0:
          try {
            if (editing || tempID) {
              await updateClient(t20, 20);
              console.log("Client updated successfully");
              setToggleUpdate({
                status: "Success",
                message: "Client data has been successfully updated.",
                show: true,
              });
            } else {
              const result = await addClient(t20);
              newPatientId = result;
              if (result instanceof Error) {
                console.log("error adding client");
                setToggleUpdate({
                  status: result.name,
                  message:
                    "There was an error adding the client. Please try again.",
                  show: true,
                });
                return;
              }
              setTempID(newPatientId);
              console.log("Client added successfully");
              setToggleUpdate({
                status: "Success",
                message: "Client has been successfully added.",
                show: true,
              });
              setEditing(true);
            }

            if (hasPCFieldsChanged(dirtyFields, defaultPC)) {
              if (activeContacts.patient && activeContacts.patient.length > 0) {
                await updateContact(
                  patientContact,
                  activeContacts.patient[0].contactid
                );
              } else {
                await addContact(patientContact, 20);
              }
            }

            if (hasECFieldsChanged(dirtyFields, defaultEC)) {
              if (
                activeContacts.emergency &&
                activeContacts.emergency.length > 0
              ) {
                await updateContact(
                  emergencyContact,
                  activeContacts.emergency[0].contactid
                );
              } else {
                await addContact(emergencyContact, 20);
              }
            }
            resetClient(
              !newPatientId ? activeClient[20].patientid : newPatientId
            );
            nextPage();
          } catch (error) {
            console.log("there was an error", error);
            setToggleUpdate({
              status: "Error",
              message: "There was an error saving the data. Please try again.",
              show: true,
            });
          }
          break;
        case 1:
          try {
            await updateClient(t21, 21);
            setToggleUpdate({
              status: "Success",
              message: "Client data has been successfully updated.",
              show: true,
            });
            resetClient(activeClient[21].patientid);
            nextPage();
          } catch (error) {
            setToggleUpdate({
              status: "Error",
              message:
                "There was an error saving the contact data. Please try again.",
              show: true,
            });
          }
          break;
        case 2:
          try {
            await updateClient(t22, 22);
            setToggleUpdate({
              status: "Success",
              message: "Client data has been successfully updated.",
              show: true,
            });
            resetClient(activeClient[22].patientid);
            setEditing(false);
            handleClose();
          } catch (error) {
            setToggleUpdate({
              status: "Error",
              message:
                "There was an error saving the contact data. Please try again.",
              show: true,
            });
          }
          break;
        default:
          break;
      }
    } else if (activePage === 2) {
      handleClose();
      setEditing(false);
    } else {
      nextPage();
    }
  };
  const closeUpdate = () => {
    setToggleUpdate((prevState) => ({ ...prevState, show: false }));
  };

  useEffect(() => {
    return function cleanup() {
      setTempID();
    };
  }, []);

  useEffect(() => {
    if (Object.keys(activeClient).length !== 0) {
      let defaultValues = parseDefaultValues(editing, activeClient);
      if (activeContacts.patient && activeContacts.patient.length > 0) {
        const patientContact = parseDefaultPC(editing, activeContacts);
        defaultValues = { ...defaultValues, ...patientContact };
      }
      if (activeContacts.emergency && activeContacts.emergency.length > 0) {
        const emergencyContact = parseDefaultEC(editing, activeContacts);
        defaultValues = { ...defaultValues, ...emergencyContact };
      }
      reset({ ...defaultValues });
    }
    // eslint-disable-next-line
  }, [activeClient, activeContacts]);

  return (
    <Modal show={show} dialogClassName="PNM-width" onHide={handleClose}>
      <Modal.Header className="PNM-header" closeButton>
        <Modal.Title>{containerName}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Row className="d-flex justify-content-evenly align-items-center">
            {
              (renderPage =
                (activePage, register, control, formState, setValue))
            }
          </Row>
        </Modal.Body>
        <Modal.Footer className="flex-row justify-content-between p-2">
          <Button
            className="PNM-nav-button p-1"
            variant="outline-primary"
            disabled={activePage === 0 || !isValid ? true : false}
            onClick={activePage === 0 ? () => {} : prevPage}
          >
            {loading ? <Spinner animation="border" size="sm" /> : ""}
            Save & Go Back
          </Button>
          <FormUpdate
            data={toggleUpdate}
            client={activeClient[20]}
            show={toggleUpdate.show}
            toggleShow={closeUpdate}
          />
          <Button
            className="PNM-nav-button p-1"
            variant={activePage >= 2 ? "outline-success" : "outline-primary"}
            type="submit"
            disabled={!isValid}
          >
            {loading ? <Spinner animation="border" size="sm" /> : ""}

            {activePage >= 2 ? " Save & Exit" : " Save and Continue"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
