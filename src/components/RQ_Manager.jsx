import {
  Button,
  Col,
  Row,
  Modal,
  Form,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { useState } from "react";
import "./RQ_Manager.css";
import AlertContainer from "./AlertContainer";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { requirements } from "../data/formData";
import { useClient } from "../data/ClientContext";
import RQPreview from "./RQ_Preview";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function RequirementsManager({ show, setShow, containerName }) {
  const [alert, setAlert] = useState({ message: "", data: "" });
  const [activePage, setActivePage] = useState(0);
  const [activeItem, setActiveItem] = useState({});
  const [newRequirements, setNewRequirements] = useState([]);
  const activeForms = ["Adolescent BPS", "Adult BPS", "Legal Document"];
  const [fullscreen, toggleFullScreen] = useState(false);

  const { control, register, handleSubmit, reset } = useForm();
  const { activeClient, addClientRequirements, clientRequirements } =
    useClient();

  const prevPage = () => {
    setActivePage((page) => page - 1);
  };
  const handleClose = () => {
    setActivePage(0);
    setShow(false);
  };
  const handleCancel = (data) => {};

  const nextPage = () => {
    console.log(activeItem);
    if (activeItem && activePage < activeItem.pages) {
      setActivePage((page) => page + 1);
    }
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

  const addRequirement = (form) => {
    if (
      !clientRequirements.some(
        (value) => parseInt(value.doctypeid) === parseInt(form.doctypeid)
      )
    ) {
      if (newRequirements.some((value) => value.name === form.name)) {
        setNewRequirements((prevState) =>
          prevState.filter((value) => value.name !== form.name)
        );
      } else {
        setNewRequirements((prevState) => [...prevState, form]);
      }
    }
  };

  const previewForm = (form) => {
    setActiveItem(form);
    toggleFullScreen(true);
  };

  const createRequirements = () => {
    console.log(newRequirements);
    addClientRequirements(newRequirements);
    handleClose();
  };

  const getAssessmentInfo = (data) => {
    const assessmentInfo = requirements.filter(
      (requirement) => data.doctypeid === parseInt(requirement.doctypeid)
    );
    // console.log(assessmentInfo);
    if (assessmentInfo.length > 0) {
      return assessmentInfo[0].name;
    } else return "NULL";
  };

  return (
    <Modal show={show} dialogClassName="RQ-width" onHide={handleClose}>
      <Modal.Header className="RQ-header" closeButton>
        <Modal.Title>{containerName}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className="RQ-modal-body">
          <Row
            className={`${
              fullscreen ? "RQ-list-container-fs" : "RQ-list-container"
            } mb-2`}
          >
            <Col md={8}>
              <h3 className="RQ-section-header mb-2">Requirements</h3>
              <ListGroup className="RQ-list ">
                {requirements.map((form, index) => (
                  <ListGroup.Item
                    variant={
                      clientRequirements.some(
                        (value) =>
                          parseInt(value.doctypeid) === parseInt(form.doctypeid)
                      )
                        ? "primary"
                        : ""
                    }
                    className="d-flex"
                    key={form.doctypeid + index}
                  >
                    <Col
                      md={1}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Form.Check
                        style={{ fontSize: "1.5rem" }}
                        onClick={() => addRequirement(form)}
                        inline
                        {...register(form.doctypeid)}
                        type="checkbox"
                        name={form.doctypeid}
                        value={form.doctypeid}
                        checked={clientRequirements.some(
                          (value) =>
                            parseInt(value.doctypeid) ===
                            parseInt(form.doctypeid)
                        )}
                      />
                    </Col>
                    <Col md={8}>
                      <div>{form.name}</div>
                      <Badge>{form.type}</Badge>
                    </Col>
                    <Col md={2}>
                      <Form.Label className="CE-form-label">
                        Set Due Date
                      </Form.Label>
                      <Controller
                        control={control}
                        name={`f${index + 1}`}
                        render={({ field }) => (
                          <DatePicker
                            className="datePicker"
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                          />
                        )}
                      />
                    </Col>
                    <Col
                      md={1}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => previewForm(form)}
                      >
                        {fullscreen ? (
                          <EyeSlash size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </Button>
                    </Col>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={4} className="d-flex flex-column justify-content-between">
              <div>
                <h3 className="RQ-section-header">Selected Requirements</h3>
                <ListGroup className="RQ-list-active">
                  {clientRequirements.map((requirement, index) => {
                    // console.log(requirement);
                    return (
                      <ListGroup.Item variant="secondary" key={index}>
                        <div>{getAssessmentInfo(requirement)}</div>
                        <Badge>{requirement.type}</Badge>
                      </ListGroup.Item>
                    );
                  })}
                  {newRequirements.map((requirement, index) => {
                    return (
                      <ListGroup.Item key={index}>
                        <div>{requirement.name}</div>
                        <Badge>{requirement.type}</Badge>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </div>
              <Button
                className="mb-3"
                disabled={newRequirements.length < 1}
                onClick={createRequirements}
              >
                Save {newRequirements.length} Client Requirements for{" "}
                {activeClient[20].pfirstname + " " + activeClient[20].plastname}{" "}
              </Button>
            </Col>
          </Row>
          <RQPreview
            data={activeItem}
            activePage={activePage}
            fullscreen={fullscreen}
            toggleFullScreen={toggleFullScreen}
          />
        </Modal.Body>
        <Modal.Footer
          className={
            fullscreen ? "flex-row justify-content-between p-2" : "d-none"
          }
        >
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
            variant={
              activeItem && activePage >= activeItem.pages
                ? "outline-secondary"
                : "outline-primary"
            }
            onClick={nextPage}
          >
            {activeItem && activePage >= activeItem.pages ? "End" : "Next"}
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

export default RequirementsManager;
