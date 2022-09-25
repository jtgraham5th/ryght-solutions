import { Button, Row, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import "./PN_Manager.css";
import AlertContainer from "./AlertContainer";
import CE1 from "./CE_1";
import CE2 from "./CE_2";
import CE3 from "./CE_3";
import CE4 from "./CE_4";
import { useForm } from "react-hook-form";

function ClientEnrollmentManager({ data, show, setShow, containerName }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const { control, register, handleSubmit, reset } = useForm();
  const [clientData, setClientData] = useState({});

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
      case 3:
        return <CE4 register={register} control={control} />;
      default:
        return <CE1 register={register} control={control} />;
    }
  };
  const onSubmit = (data) => {
    setClientData((prevState) => ({ ...prevState, ...data }));
    if (activePage < 3) {
      setActivePage((page) => page + 1);
    }
    if (activePage === 3) {
      setAlert({
        message: <h6>Are you sure you want to save these changes?</h6>,
        data: clientData,
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
            // onClick={activePage >= 3 ? () => console.log("Add New Client") : nextPage}
          >
            {activePage >= 3 ? "Add New Client" : "Next"}
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
