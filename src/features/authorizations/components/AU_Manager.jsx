import { Button, Row, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import AlertContainer from "../../../components/AlertContainer";
import { AU1 } from "./AU_1";
import { useForm } from "react-hook-form";
import { useClient } from "../../../context/ClientContext";
import {
  newAuthorization,
  parseAuthorization,
  parseAuthService,
  parseDefaultAuthorization,
} from "../../utils/parseData";
import {
  addNewAuthService,
  getAuthServices,
  updateAuthService,
} from "../services/api";

export function AUManager({ data, show, setShow, containerName, edit }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const { activeClient, addClientAuthorization, updateClientAuthorization } =
    useClient();
  const { control, register, handleSubmit, reset, setValue, watch, getValues } =
    useForm({
      defaultValues: newAuthorization(),
    });
  useEffect(() => {
    if (typeof show !== "boolean") {
      const loadDefaultAuthServices = async () => {
        const defaultAuthorization = parseDefaultAuthorization(show);
        const defaultAuthServices = await getAuthServices(
          defaultAuthorization.authrecid
        );
        reset({ ...defaultAuthorization, services: defaultAuthServices });
      };
      loadDefaultAuthServices();
    }
  }, [show]);

  const handleClose = () => {
    setActivePage(0);
    reset({ ...newAuthorization() });
    setShow(false);
  };
  const renderPage = () => {
    return (
      <AU1
        register={register}
        control={control}
        watch={watch}
        setValue={setValue}
      />
    );
  };
  const onSubmit = async (data) => {
    console.log(data);
    const authorization = parseAuthorization(data, activeClient[20].patientid);
    console.log(authorization);
    if (typeof show == "boolean") {
      await addClientAuthorization(authorization).then((authrecid) => {
        data.services.map((authService) => {
          if (authService.authrecid !== authrecid) {
            console.log("add auth service1");
            addNewAuthService(parseAuthService(authService, authrecid));
          } else {
            console.log("update auth service1");
            updateAuthService(
              authService.recid,
              parseAuthService(authService, authrecid)
            );
          }
        });
      });
    } else {
      await updateClientAuthorization(
        authorization[0].authrecid,
        authorization
      ).then((authorization) => {
        data.services.map((authService) => {
          if (authService.authrecid !== authorization[0].authrecid) {
            console.log("add auth service2");
            addNewAuthService(
              parseAuthService(authService, authorization[0].authrecid)
            );
          } else {
            console.log("update auth service2");
            updateAuthService(
              authService.recid,
              parseAuthService(authService, authorization[0].authrecid)
            );
          }
        });
      });
    }
    handleClose();
  };
  const handleConfirm = (data) => {
    console.log(data);
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

        <Modal.Footer className="flex-row justify-content-center p-2">
          <Button className="w-25 p-1" variant="outline-success" type="submit">
            Save
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
