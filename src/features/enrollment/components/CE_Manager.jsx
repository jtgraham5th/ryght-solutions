import { Button, Row, Modal, Form, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./CE_Manager.css";
import { CE1 } from "./CE_1";
import { CE2 } from "./CE_2";
import { CE3 } from "./CE_3";
import { useForm } from "react-hook-form";
import { useClient } from "../../../context/ClientContext";
import {
  parseFormData20,
  parseFormData21,
  parseFormData22,
  parsePatientContact,
  parseEmergencyContact,
  parseDefaultPC,
  parseDefaultEC,
  parseDefaultValues,
} from "../utils/parseData";
import FormUpdate from "../../../components/FormUpdate";

export function CEManager({ show, setShow, containerName, edit }) {
  const [activePage, setActivePage] = useState(0);
  const [tempID, setTempID] = useState();
  const [toggleUpdate, setToggleUpdate] = useState({
    status: "",
    message: "",
    show: false,
  });

  const { control, register, handleSubmit, reset, setValue, formState } =
    useForm({ mode: "onChange" });
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
  const { isDirty, isValid } = formState;

  const handleClose = () => {
    setActivePage(0);
    setShow(false);
    reset();
  };
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
          <CE1 register={register} control={control} formState={formState} />
        );
      case 1:
        return (
          <CE2
            register={register}
            control={control}
            setValue={setValue}
            formState={formState}
          />
        );
      case 2:
        return (
          <CE3 register={register} control={control} formState={formState} />
        );
      default:
        return (
          <CE1 register={register} control={control} formState={formState} />
        );
    }
  };

  const onSubmit = async (data) => {
    if (isDirty) {
      const t20 = parseFormData20(data, edit, tempID, activeClient);
      const t21 = parseFormData21(data, edit, tempID, activeClient);
      const t22 = parseFormData22(data, edit, tempID, activeClient);
      const patientContact = parsePatientContact(data, edit, activeContacts);
      const emergencyContact = parseEmergencyContact(
        data,
        edit,
        activeContacts
      );

      if (activePage === 0) {
        if (edit || tempID) {
          updateClient(t20, 20).then((res) => {
            if (res.name === "Error") {
              setToggleUpdate({
                status: res.name,
                message: "There was an error saving client. Please try again",
                show: true,
              });
              return;
            } else {
              setToggleUpdate({
                status: res.name,
                message: "Client data has been successfully updated.",
                show: true,
              });
              if (activeContacts.patient.length > 0) {
                updateContact(
                  patientContact,
                  activeContacts.patient[0].contactid
                ).then((res) => {
                  if (res.name === "Error") {
                    setToggleUpdate({
                      status: res.name,
                      message: "There was an error saving patient contact. Please try again",
                      show: true,
                    });
                    return;
                  }
                });
              } else {
                addContact(patientContact, 20).then((res) => {
                  if (res.name === "Error") {
                    setToggleUpdate({
                      status: res.name,
                      message: "There was an error adding patient contact. Please try again",
                      show: true,
                    });
                    return;
                  }
                });
              }
              if (activeContacts.emergency.length > 0) {
                updateContact(
                  emergencyContact,
                  activeContacts.emergency[0].contactid
                ).then((res) => {
                  if (res.name === "Error") {
                    setToggleUpdate({
                      status: res.name,
                      message: "There was an error saving emergency contact. Please try again",
                      show: true,
                    });
                    return;
                  }
                });
              } else {
                addContact(emergencyContact, 20).then((res) => {
                  if (res.name === "Error") {
                    setToggleUpdate({
                      status: res.name,
                      message: "There was an error adding emergency contact. Please try again",
                      show: true,
                    });
                    return;
                  }
                });
              }
              resetClient(activeClient[20].patientid);
              nextPage();
            }
          });
        } else {
          await addClient(t20).then((res) => {
            if (res.name === "Error") {
              setToggleUpdate({
                status: res.name,
                message: "There was an error adding new client. Please try again",
                show: true,
              });
              return;
            } else {
              let newPatientId = res;
              resetClient(newPatientId);
              patientContact[0].patientid = newPatientId;
              emergencyContact[0].patientid = newPatientId;
              addContact(patientContact, 20).then((res) => {
                if (res.name === "Error") {
                  setToggleUpdate({
                    status: res.name,
                    message: "There was an error adding patient contact. Please try again",
                    show: true,
                  });
                  return;
                }
              });
              addContact(emergencyContact, 20).then((res) => {
                if (res.name === "Error") {
                  setToggleUpdate({
                    status: res.name,
                    message: "There was an error adding emergency contact. Please try again",
                    show: true,
                  });
                  return;
                }
              });
              setTempID(newPatientId);
              setToggleUpdate({
                status: res.name,
                message: "New Patient Created.",
                show: true,
              });
              edit = true;
              nextPage();
            }
          });
        }
      }
      if (activePage === 1) {
        updateClient(t21, 21).then((res) => {
          if (res.name === "Error") {
            setToggleUpdate({
              status: res.name,
              message: "There was an error saving client. Please try again",
              show: true,
            });
            return;
          } else {
            setToggleUpdate({
              status: res.name,
              message: "Client data has been successfully updated.",
              show: true,
            });
            resetClient(activeClient[20].patientid);
            nextPage();
          }
        });
      }
      if (activePage === 2) {
        updateClient(t22, 22).then((res) => {
          if (res.name === "Error") {
            setToggleUpdate({
              status: res.name,
              message: "There was an error saving client. Please try again",
              show: true,
            });
            return;
          } else {
            setToggleUpdate({
              status: res.name,
              message: "Client data has been successfully updated.",
              show: true,
            });
            resetClient(activeClient[20].patientid);
            handleClose();
          }
        });
        reset();
      }
    } else if (activePage === 2) {
      handleClose();
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
    console.log("activeclient has changed!");
    if (Object.keys(activeClient).length !== 0) {
      let defaultValues = parseDefaultValues(edit, activeClient);
      if (activeContacts.patient && activeContacts.patient.length > 0) {
        const patientContact = parseDefaultPC(edit, activeContacts);
        defaultValues = { ...defaultValues, ...patientContact };
      }
      if (activeContacts.emergency && activeContacts.emergency.length > 0) {
        const emergencyContact = parseDefaultEC(edit, activeContacts);
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

            {activePage >= 2
              ? edit
                ? "Save & Exit"
                : "Save and Continue"
              : "Next"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
