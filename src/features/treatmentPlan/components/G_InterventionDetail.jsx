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
import { useForm } from "react-hook-form";
import "./G_Manager.css";

export function InterventionDetail({ intervention, focus, setFocus, setAlert }) {
  const [editIntervention, setEditIntervention] = useState(false);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
      setValue("parentGoal", intervention.parentGoal);
      setValue("parentObjective", intervention.parentObjective);
      setValue("status", intervention.status);
      setValue("services", intervention.services);
      setValue("frequency", intervention.frequency);
      setValue("staffType", intervention.staffType);
      setValue("description", intervention.description);
  }, [intervention]);

  useEffect(() => {
    if (focus.editing === "new-intervention") {
      setEditIntervention(true);
    }
  }, [focus.editing]);

  const onSubmit = (data) => {
    console.log(data)
    // e.preventDefault();
    // const dataObject = {};
    // const data = new FormData(e.target);
    // for (const entry of data.entries()) {
    //   dataObject[`${entry[0]}`] = entry[1];
    // }
    // if (focus.editing === "new-intervention")
    //   console.log("--new goal created--");
    // console.log(dataObject);
    // setAlert({
    //   message: (
    //     <h6>
    //       Are you sure you want to save:
    //       <br /> <strong>{dataObject.description}</strong>?
    //     </h6>
    //   ),
    //   data: dataObject,
    //   title: `${
    //     focus.editing === "new-interventino" ? "Save New " : "Update "
    //   } Intervention?`,
    // });
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
              <Form.Label className="w-50 m-0 pe-1 small">Goal</Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("parentGoal")}
                name="parentGoal"
                type="text"
                readOnly={editIntervention ? false : true}
                disabled={!intervention ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">Objective</Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("parentObjective")}
                name="parentObjective"
                type="text"
                readOnly={editIntervention ? false : true}
                disabled={!intervention ? true : false}
              />
            </ListGroupItem>

            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">
                Current Status
              </Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("status")}
                name="status"
                type="text"
                readOnly={editIntervention ? false : true}
                disabled={!intervention ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">Services</Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("services")}
                name="services"
                type="text"
                readOnly={editIntervention ? false : true}
                disabled={!intervention ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">Frequency</Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("frequency")}
                name="frequency"
                type="text"
                readOnly={editIntervention ? false : true}
                disabled={!intervention ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">
                Staff Type
              </Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("staffType")}
                name="staffType"
                type="text"
                readOnly={editIntervention ? false : true}
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
