import {
  Button,
  Form,
  Col,
  Card,
  ListGroup,
  Collapse,
  ListGroupItem,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Pencil } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import "./G_Manager.css";
import { useClient } from "../../../context/ClientContext";
import { parseIntervention } from "../utils/parseData";
import { SelectField } from "../../../components/form/fieldCreator";

export function InterventionDetail({
  intervention,
  focus,
  setFocus,
  setAlert,
  objectiveid,
}) {
  const {
    activeClient,
    updateClientIntervention,
    addClientIntervention,
    getActiveServices,
  } = useClient();
  const [editIntervention, setEditIntervention] = useState(false);
  const [selectedServices, setSelectedServices] = useState(getActiveServices());

  const { patientid } = activeClient[20];
  const { control, register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (!intervention) {
      const blankIntervention = parseIntervention(
        patientid,
        objectiveid,
        intervention
      );
      reset({ ...blankIntervention[0] });
      // eslint-disable-next-line
    } else reset({ ...intervention });
  }, [intervention]);

  useEffect(() => {
    if (focus.editing === "new-intervention") {
      setEditIntervention(true);
    }
  }, [focus.editing]);

  useEffect(() => {
    setSelectedServices(getActiveServices());
  }, [activeClient]);

  const onSubmit = (data) => {
    const newIntervention = parseIntervention(data, patientid, objectiveid);
    console.log(newIntervention);
    if (focus.editing === "new-intervention") {
      console.log("new intervention");
      addClientIntervention(newIntervention);
    } else if (editIntervention) {
      console.log("updated intervention");
      updateClientIntervention(newIntervention);
    }
    exitEdit();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditIntervention(true);
    setFocus({
      ...focus,
      objectives: false,
      goals: false,
      interventions: true,
      editing: "interventions",
    });
  };

  const exitEdit = () => {
    setEditIntervention(false);
    setFocus({
      ...focus,
      editing: "",
    });
  };

  return (
    <Card
      as={Col}
      className={`detail-container ${focus.interventions ? "cardFocus" : ""}`}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card.Header className="detail-container-header">
          <h6 className="m-0">Interventions</h6>
          {editIntervention ? (
            <div className="detail-header">
              <Button type="submit" variant="outline-success" size="sm">
                Save
              </Button>
              <Button variant="outline-secondary" size="sm" onClick={exitEdit}>
                Cancel
              </Button>
            </div>
          ) : (
            <div>
              <Button
                onClick={handleEdit}
                variant={
                  !intervention || focus.goals || focus.objectives
                    ? "outline-secondary"
                    : "outline-primary"
                }
                size="sm"
                type="button"
                disabled={
                  !intervention || focus.goals || focus.objectives
                    ? true
                    : false
                }
              >
                Edit Intervention
              </Button>
            </div>
          )}
        </Card.Header>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <ListGroup>
            <Collapse
              in={editIntervention && focus.editing !== "new-intervention"}
              timeout={100}
            >
              <ListGroup.Item
                variant="primary"
                className="editingDetail text-center"
              >
                <strong>Editing Intervention</strong>
                <Pencil className="ms-2" />
              </ListGroup.Item>
            </Collapse>
            <Collapse in={focus.editing === "new-intervention"} timeout={100}>
              <ListGroup.Item
                variant="success"
                className="editingDetail text-center"
              >
                <strong>New Intervention</strong>
                <Pencil className="ms-2" />
              </ListGroup.Item>
            </Collapse>

            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <SelectField
                register={register}
                labelName="Assigned Staff"
                groupName="Staff Title"
                fieldName="stafftitleid"
                labelStyle="w-50 m-0 pe-1 small"
                disabled={!intervention ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-center align-items-center small p-1 ps-3 pe-3">
              <SelectField
                register={register}
                labelName="Frequency"
                groupName="Frequency"
                fieldName="frequency"
                labelStyle="w-50 m-0 pe-1 small"
                disabled={!intervention ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-center align-items-center small p-1 ps-3 pe-3">
              <SelectField
                register={register}
                labelName="Services"
                fieldName="services"
                listData={selectedServices}
                itemDetail={["recid", "servicename"]}
                labelStyle="w-50 m-0 pe-1 small"
                disabled={!intervention ? true : false}
              />
            </ListGroupItem>
          </ListGroup>
        </Form.Group>
        <Card.Body className="detail-card-body">
          <Form.Label className="small">Intervention</Form.Label>
          <Form.Control
            className="mb-3 small"
            {...register("description")}
            name="description"
            size="sm"
            as="textarea"
            rows={3}
            readOnly={editIntervention ? false : true}
            disabled={!intervention ? true : false}
          />
        </Card.Body>
      </Form>
    </Card>
  );
}
