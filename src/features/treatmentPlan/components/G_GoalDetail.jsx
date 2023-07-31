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
import { useClient } from "../../../context/ClientContext";
import "./G_Manager.css";
import { parseDefaultGoal, parseGoal } from "../utils/parseData";

export function GoalDetail({ goal, setGoal, focus, setFocus, setAlert }) {
  const [editGoal, setEditGoal] = useState(false);
  const { activeClient, updateClientGoal, addClientGoal } = useClient();
  const { patientid } = activeClient;

  const { control, register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset({ ...goal });
    // eslint-disable-next-line
  }, [goal]);

  useEffect(() => {
    if (focus.editing === "new-goal") {
      setEditGoal(true);
    }
  }, [focus.editing]);

  const onSubmit = async (data) => {
    const newGoal = parseGoal(data, patientid);
    console.log(newGoal);
    if (focus.editing === "new-goal") {
      console.log("new goal");
      await addClientGoal().then(async (goalid) => {
        newGoal[0].goalid = goalid
        await updateClientGoal(newGoal).then((updatedGoal) => {
          console.log(updatedGoal)
          setGoal(parseDefaultGoal(true, patientid, newGoal, updatedGoal));
        });
      });
    } else if (editGoal) {
      console.log("updated goal");
      updateClientGoal(newGoal);
    }
    exitEdit();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditGoal(true);
    setFocus({
      ...focus,
      objectives: false,
      goals: true,
      interventions: false,
      editing: "goals",
    });
  };

  const exitEdit = () => {
    setEditGoal(false);
    setFocus({
      ...focus,
      editing: "",
    });
  };
  return (
    <Card
      as={Col}
      md={3}
      className={`detail-container ${focus.goals ? "cardFocus" : ""}`}
    >
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Card.Header className="detail-container-header">
          <h6 className="m-0">Goals</h6>

          {editGoal ? (
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
                  !goal || focus.objectives || focus.interventions
                    ? "outline-secondary"
                    : "outline-primary"
                }
                size="sm"
                type="button"
                disabled={
                  !goal || focus.objectives || focus.interventions
                    ? true
                    : false
                }
              >
                Edit Goal
              </Button>
            </div>
          )}
        </Card.Header>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <ListGroup>
            <Collapse
              in={editGoal && focus.editing !== "new-goal"}
              timeout={100}
            >
              <ListGroup.Item
                variant="primary"
                className="editingDetail text-center"
              >
                <strong>Editing Goal</strong>
                <Pencil className="ms-2" />
              </ListGroup.Item>
            </Collapse>
            <Collapse in={focus.editing === "new-goal"} timeout={100}>
              <ListGroup.Item
                variant="success"
                className="editingDetail text-center"
              >
                <strong>New Goal</strong>
                <Pencil className="ms-2" />
              </ListGroup.Item>
            </Collapse>
            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">Goal Name</Form.Label>
              <Form.Control
                autoComplete="off"
                className="goal-detail-input"
                {...register("goalname")}
                type="text"
                name="goalname"
                readOnly={editGoal ? false : true}
                disabled={!goal ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-center align-items-center small p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">Open Date</Form.Label>

              <Controller
                control={control}
                name="targetdate"
                render={({ field }) => (
                  <DatePicker
                    className="datePicker rounded"
                    selected={field.value}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    readOnly={editGoal ? false : true}
                    disabled={!goal ? true : false}
                  />
                )}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-center align-items-center small p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">
                Closed Date
              </Form.Label>
              <Controller
                control={control}
                name="dateclosed"
                defaultValue=""
                render={({ field }) => (
                  <DatePicker
                    className="datePicker rounded"
                    selected={field.value}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    readOnly={editGoal ? false : true}
                    disabled={!goal ? true : false}
                  />
                )}
              />
            </ListGroupItem>

            {/* <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">
                Goal Frequency
              </Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("frequency")}
                type="text"
                name="frequency"
                readOnly={editGoal ? false : true}
                disabled={!goal ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">
                Measurement Number{" "}
              </Form.Label>
              <InputGroup>
                <Form.Control
                  className="goal-detail-input"
                  {...register("measurement.number")}
                  type="text"
                  readOnly={editGoal ? false : true}
                  disabled={!goal ? true : false}
                />
                <Form.Control
                  className="goal-detail-input"
                  {...register("measurement.unit")}
                  type="text"
                  readOnly={editGoal ? false : true}
                  disabled={!goal ? true : false}
                />
              </InputGroup>
            </ListGroupItem> */}
          </ListGroup>
        </Form.Group>
        <Card.Body className="detail-card-body">
          <Form.Label className="small">Full Goal / Purpose</Form.Label>
          <Form.Control
            autoComplete="off"
            size="sm"
            as="textarea"
            rows={3}
            readOnly={editGoal ? false : true}
            {...register("description")}
            name="description"
            disabled={!goal ? true : false}
          />
          <Form.Label className="small">Comments:</Form.Label>
          <Form.Control
            autoComplete="off"
            className="mb-3"
            size="sm"
            as="textarea"
            rows={3}
            readOnly={editGoal ? false : true}
            {...register("comment")}
            name="comment"
            disabled={!goal ? true : false}
          />
        </Card.Body>
      </Form>
    </Card>
  );
}
