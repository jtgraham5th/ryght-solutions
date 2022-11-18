import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./PN_Manager.css";
import AlertContainer from "./AlertContainer";
import CE1 from "./CE_1";
import CE2 from "./CE_2";
import CE3 from "./CE_3";
import CE4 from "./CE_4";
import { useForm } from "react-hook-form";
import { useClient } from "../data/ClientContext";

function ClientEnrollmentManager({ show, setShow, containerName, edit }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const { control, register, handleSubmit, reset } = useForm({});
  const [clientData, setClientData] = useState({});
  const { activeClient, addClient, enrollClient, updateClient } = useClient();

  const formatDate = (newDate) => {
    console.log(activeClient);
    return Date(newDate.split("/").reverse().join("-")).toString();
  };
  const defaultValues = {
    firstname:
      Object.keys(activeClient).length !== 0 ? activeClient.firstname : "",
    lastname:
      Object.keys(activeClient).length !== 0 ? activeClient.lastname : "",
    preferredname:
      Object.keys(activeClient).length !== 0 ? activeClient.preferredname : "",
    dob:
      Object.keys(activeClient).length !== 0
        ? Date.now()
        : Date.now(),
    maritalstatusid:
      Object.keys(activeClient).length !== 0
        ? activeClient.maritalstatusid
        : null,
    socsec: Object.keys(activeClient).length !== 0 ? activeClient.socsec : "",
    ethicityid:
      Object.keys(activeClient).length !== 0 ? activeClient.ethicityid : "",
    sexatbirthid:
      Object.keys(activeClient).length !== 0 ? activeClient.sexatbirthid : "",
    genderidentityid:
      Object.keys(activeClient).length !== 0
        ? activeClient.genderidentiyid
        : "",
    religionid:
      Object.keys(activeClient).length !== 0 ? activeClient.religionid : "",
    weight: Object.keys(activeClient).length !== 0 ? activeClient.weight : "",
    height: Object.keys(activeClient).length !== 0 ? activeClient.height : "",
  };
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
        return <CE1 register={register} control={control} />;
      case 1:
        return <CE2 register={register} control={control} />;
      case 2:
        return <CE3 register={register} control={control} />;
      default:
        return <CE1 register={register} control={control} />;
    }
  };
  const onSubmit = (data) => {
    setClientData((prevState) => ({ ...prevState, ...data }));
    if (activePage < 2) {
      setActivePage((page) => page + 1);
    }
    if (activePage === 2) {
      setAlert({
        message: <h6>Are you sure you want to save these changes?</h6>,
        data: clientData,
        title: "Add New Client",
      });
    }
  };
  const handleConfirm = (data) => {
    console.log(data);
    const newClient = {
      firstname: data.firstname,
      lastname: data.lastname,
      initial: "",
      preferredname: data.preferredname,
      dob: data.dob.toString(),
      maritalstatusid: data.maritalstatusid,
      socsec: data.socsec,
      ethicityid: data.ethicityid,
      sexatbirthid: data.sexatbirthid,
      sexid: data.sexatbirthid,
      genderidentiyid: data.genderidentiyid,
      religionid: data.religionid,
      weight: data.weight,
      height: data.height,
      sharenoteid: "000",
      isactive: "1",
      allergies: "none",
    };
    const enrollNewClient = {
      dateofadmission: Date.now().toString(),
      dxcodes: "",
      dxdate: "1/20/2022",
      outcomestatusid: 9,
      enrollstatusid: 1,
      referralsourceid: 0,
      firstapptdate: 0,
      firstpsydate: "1/20/2022",
      patientid: "000",
      pharmacyproviderid: 0,
      familyphysicianid: 0,
    };
    if (edit) {
      newClient.patientid = activeClient.patientid;
      console.log(newClient);
      updateClient(newClient);
    } else {
      console.log(newClient);
      addClient(newClient).then((response) => console.log(response));
      enrollClient(enrollNewClient)

    }
    handleClose();
    reset();
  };

  const handleCancel = (data) => {};

  useEffect(() => {
    console.log("reset");
    reset({ ...defaultValues });
  }, [activeClient]);

  useEffect(() => {
    console.log("reset");
    reset({ ...defaultValues });
  }, [activeClient]);

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
            variant={activePage >= 2 ? "outline-success" : "outline-primary"}
            type="submit"
            // onClick={activePage >= 2 ? () => console.log("Add New Client") : nextPage}
          >
            {activePage >= 2 ? "Add New Client" : "Next"}
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

export default ClientEnrollmentManager;
