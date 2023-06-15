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
  clientHasDoctype,
  hasSCDXFieldsChanged,
} from "../utils/formhelper";
import {
  addNewBillingTx,
  addNewDocument,
  getDocumentbyType,
  updateDocument,
} from "../../documents/services/api";
import { parseBillingTx } from "../../services/utils/parseData";
import {
  parseDefaultOrderOfService,
  parseOrderOfService,
} from "../../documents/services/parseData";
import { parseTreatmentPlan } from "../../treatmentPlan/utils/parseData";
export function CEManager({ show, setShow, containerName, edit }) {
  const [activePage, setActivePage] = useState(0);
  const [tempID, setTempID] = useState();
  const [editing, setEditing] = useState(edit);

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState,
    watch,
    getValues,
  } = useForm({ mode: "onBlur" });
  const {
    activeClient,
    activeContacts,
    addActiveClient,
    updateActiveClient,
    addClientContact,
    updateClientContact,
    resetClient,
    loading,
    activeBillingTx,
    toggleUpdate,
    setToggleUpdate,
  } = useClient();
  const { isDirty, isValid, dirtyFields, errors } = formState;

  const closeUpdate = () => {
    setToggleUpdate((prevState) => ({ ...prevState, show: false }));
  };

  const handleClose = () => {
    setActivePage(0);
    setEditing(edit);
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
            await updateActiveClient(t21, activeClient.patientid, 21);
            setToggleUpdate({
              status: "Success",
              message: "Client data has been successfully updated.",
              show: true,
            });
            setActivePage((page) => page - 1);
            resetClient(!tempID ? activeClient.patientid : tempID);
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
            await updateActiveClient(t22, activeClient.patientid, 22);
            setToggleUpdate({
              status: "Success",
              message: "Client data has been successfully updated.",
              show: true,
            });
            setActivePage((page) => page - 1);
            resetClient(!tempID ? activeClient.patientid : tempID);
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

  const onSubmit = async (data) => {
    console.log(data);
    if (isDirty || hasSCDXFieldsChanged(getValues, editing, activeClient)) {
      const { patientData, patientContact, emergencyContact } = parseFormData(
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
              await updateActiveClient(patientData, activeClient.patientid);
              console.log("Client updated successfully");
              setToggleUpdate({
                status: "Success",
                message: "Client data has been successfully updated.",
                show: true,
              });
            } else {
              const result = await addActiveClient(patientData);
              console.log(result);
              newPatientId = result[0].patientid;
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
                console.log(emergencyContact, activeContacts);

                await updateClientContact(
                  patientContact,
                  activeContacts.patient[0].contactid
                );
                console.log("Client PC updated successfully");
              } else {
                await addClientContact(patientContact, 20);
                console.log("Client PC added successfully");
              }
            }

            if (hasECFieldsChanged(dirtyFields, defaultEC)) {
              if (
                activeContacts.emergency &&
                activeContacts.emergency.length > 0
              ) {
                console.log(emergencyContact, activeContacts);
                await updateClientContact(
                  emergencyContact,
                  activeContacts.emergency[0].contactid
                );
                console.log("Client EC updated successfully");
              } else {
                await addClientContact(emergencyContact, 20);
                console.log("Client EC added successfully");
              }
            }
            resetClient(!newPatientId ? activeClient.patientid : newPatientId);
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
            await updateActiveClient(patientData, activeClient.patientid);
            setToggleUpdate({
              status: "Success",
              message: "Client data has been successfully updated.",
              show: true,
            });
            resetClient(activeClient.patientid);
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
            await updateActiveClient(patientData, activeClient.patientid);
            setToggleUpdate({
              status: "Success",
              message: "Client data has been successfully updated.",
              show: true,
            });
            resetClient(activeClient.patientid);
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
        case 3:
          try {
            if (!clientHasDoctype(10, activeBillingTx)) {
              console.log("starting new order of service");
              let osBillingId = parseBillingTx(activeClient, 10);

              await addNewBillingTx(osBillingId).then(async (tx) => {
                await addNewDocument(
                  parseOrderOfService(data, activeClient, tx.billingid)
                );
              });

              let tPlanBillingId = parseBillingTx(activeClient, 1);
              let newTPlan = {};
              newTPlan.f11 = data.f7;
              console.log(newTPlan);

              await addNewBillingTx(tPlanBillingId).then(async (tx) => {
                newTPlan.billingid = tx.billingid;
                await addNewDocument(
                  parseTreatmentPlan(newTPlan, activeClient.patientid)
                );
              });
            } else {
              console.log("order of service already exists");
              await updateDocument(parseOrderOfService(data, activeClient));
            }
            setToggleUpdate({
              status: "Success",
              message: "Order of Service form has been created",
              show: true,
            });
            resetClient(activeClient.patientid);
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
    } else if (activePage === 3) {
      handleClose();
    } else {
      nextPage();
    }
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
        const patientContact = parseDefaultPC(
          editing,
          activeContacts,
          setValue
        );
        defaultValues = { ...defaultValues, ...patientContact };
      }
      if (activeContacts.emergency && activeContacts.emergency.length > 0) {
        const emergencyContact = parseDefaultEC(
          editing,
          activeContacts,
          setValue
        );
        defaultValues = { ...defaultValues, ...emergencyContact };
      }
      if (clientHasDoctype(10, activeBillingTx)) {
        console.log("has order of service");
        async function getDocument() {
          try {
            if (clientHasDoctype(10, activeBillingTx)) {
              let document = await getDocumentbyType(
                10,
                activeClient.patientid
              );
              document = parseDefaultOrderOfService(document[0]);
              defaultValues = { ...defaultValues, ...document[0] };
            }
            reset({ ...defaultValues });
          } catch (error) {
            console.error(error);
          }
        }
        getDocument();
      }
      reset({ ...defaultValues });
    }
    // eslint-disable-next-line
  }, [activeClient, activeContacts]);

  return (
    <Modal show={show} dialogClassName="CE-width" onHide={handleClose}>
      <Modal.Header className="PNM-header" closeButton>
        <Modal.Title>{containerName}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Row className="d-flex justify-content-evenly align-items-center">
            {renderPage(activePage, register, control, formState, setValue)}
          </Row>
        </Modal.Body>
        <Modal.Footer className="flex-row justify-content-between p-2">
          <Button
            className="PNM-nav-button p-1"
            variant="outline-primary"
            disabled={activePage === 0 || isValid }
            onClick={activePage === 0 ? () => {} : prevPage}
          >
            {loading ? <Spinner animation="border" size="sm" /> : ""}
            Save & Go Back
          </Button>
          <FormUpdate
            data={toggleUpdate}
            client={activeClient}
            show={toggleUpdate.show}
            toggleShow={closeUpdate}
          />

          <Button
            className="PNM-nav-button p-1"
            variant={activePage >= 3 ? "outline-success" : "outline-primary"}
            type="submit"
            // disabled={!isValid}
          >
            {loading ? <Spinner animation="border" size="sm" /> : ""}

            {activePage >= 3 ? " Save & Exit" : " Save and Continue"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
