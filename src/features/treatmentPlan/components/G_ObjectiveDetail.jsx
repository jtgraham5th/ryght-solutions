import {
  Button,
  Form,
  Col,
  Card,
  ListGroup,
  Collapse,
  ListGroupItem,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Pencil } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import "./G_Manager.css";
import { useClient } from "../../../context/ClientContext";
import { parseObjective, parseDefaultObjective } from "../utils/parseData";

export function ObjectiveDetail({
  objective,
  setObjective,
  focus,
  setFocus,
  goalid,
}) {
  const [editObjective, setEditObjective] = useState(false);
  const { activeClient, updateClientObjective, addClientObjective } =
    useClient();
  const { patientid } = activeClient;

  const { control, register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (!objective) {
      const blankObjective = parseObjective(patientid, goalid, objective);
      reset({ ...blankObjective[0] });
    } else {
      reset({ ...objective });
    }
    // eslint-disable-next-line
  }, [objective]);

  useEffect(() => {
    if (focus.editing === "new-objective") {
      setEditObjective(true);
    }
  }, [focus.editing]);

  const onSubmit = async (data) => {
    const newObjective = parseObjective(patientid, goalid, data);
    console.log(newObjective);
    if (focus.editing === "new-objective") {
      console.log("new objective");
      await addClientObjective().then(async (objectiveid) => {
        newObjective[0].objectiveid = objectiveid;
        await updateClientObjective(newObjective).then((updatedObjective) => {
          setObjective(
            parseDefaultObjective(true, patientid, goalid, updatedObjective)
          );
          console.log(updatedObjective);
        });
      });
    } else if (editObjective) {
      console.log("updated objective");
      updateClientObjective(newObjective);
    }
    setFocus({
      ...focus,
      objectives: false,
    });
    exitEdit();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditObjective(true);
    setFocus({
      ...focus,
      objectives: true,
      goals: false,
      interventions: false,
      editing: "objectives",
    });
  };

  const exitEdit = () => {
    setEditObjective(false);
    setFocus({
      ...focus,
      editing: "",
    });
  };
  return (
    <Card
      as={Col}
      className={`detail-container ${focus.objectives ? "cardFocus" : ""}`}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card.Header className="detail-container-header">
          <h6 className="m-0">Objectives</h6>
          {editObjective ? (
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
                  !objective || focus.goals || focus.interventions
                    ? "outline-secondary"
                    : "outline-primary"
                }
                size="sm"
                type="button"
                disabled={
                  !objective || focus.goals || focus.interventions
                    ? true
                    : false
                }
              >
                Edit Objective
              </Button>
            </div>
          )}
        </Card.Header>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <ListGroup>
            <Collapse
              in={editObjective && focus.editing !== "new-objective"}
              timeout={100}
            >
              <ListGroup.Item
                variant="primary"
                className="editingDetail text-center"
              >
                <strong>Editing Objective</strong>
                <Pencil className="ms-2" />
              </ListGroup.Item>
            </Collapse>
            <Collapse in={focus.editing === "new-objective"} timeout={100}>
              <ListGroup.Item
                variant="success"
                className="editingDetail text-center"
              >
                <strong>New Objective</strong>
                <Pencil className="ms-2" />
              </ListGroup.Item>
            </Collapse>
            <ListGroupItem className="d-flex justify-content-center align-items-center small p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">
                Target Date
              </Form.Label>
              <Controller
                control={control}
                name="targetdate"
                defaultValue=""
                render={({ field }) => (
                  <DatePicker
                    className="datePicker rounded"
                    selected={field.value}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    readOnly={editObjective ? false : true}
                    disabled={!objective ? true : false}
                  />
                )}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-center align-items-center small p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">Open Date</Form.Label>
              <Controller
                control={control}
                name="opendate"
                defaultValue=""
                render={({ field }) => (
                  <DatePicker
                    className="datePicker rounded"
                    selected={field.value}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    readOnly={editObjective ? false : true}
                    disabled={!objective ? true : false}
                  />
                )}
              />
            </ListGroupItem>
          </ListGroup>
        </Form.Group>
        <Card.Body>
          <Form.Label className="w-50 m-0 pe-1 small">Objective</Form.Label>
          <Form.Control
            className="mb-2 small"
            {...register("description")}
            as="textarea"
            size="sm"
            rows={3}
            readOnly={editObjective ? false : true}
            disabled={!objective ? true : false}
          />
        </Card.Body>
      </Form>
    </Card>
  );
}
