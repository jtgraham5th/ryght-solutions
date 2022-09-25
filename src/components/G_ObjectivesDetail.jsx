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

function ObjectivesDetail({ objective, focus, setFocus, setAlert }) {
  const [editObjective, setEditObjective] = useState(false);

  const { control, register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (objective) {
      setValue("objectiveName", objective.objectiveName);
      setValue("targetDate", new Date(objective.targetDate));
      setValue("openDate", new Date(objective.openDate));
      setValue("parentGoal", objective.parentGoal);
      setValue("status", objective.status);
      setValue("description", objective.description);
    }
  }, [objective]);

  useEffect(() => {
    if (focus.editing === "new-objective") {
      setEditObjective(true);
    }
  }, [focus.editing]);

  const onSubmit = (data) => {
    console.log(data);
    // const dataObject = {};
    // const data = new FormData(e.target);
    // for (const entry of data.entries()) {
    //   dataObject[`${entry[0]}`] = entry[1];
    // }
    // if (focus.editing === "new-objective") console.log("--new goal created--");
    // console.log(dataObject);
    // setAlert({
    //   message: (
    //     <h6>
    //       Are you sure you want to save:
    //       <br /> <strong>{dataObject.objectiveName}</strong>?
    //     </h6>
    //   ),
    //   data: dataObject,
    //   title: `${
    //     focus.editing === "new-objective" ? "Save New " : "Update "
    //   } Objective?`,
    // });
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
            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">Objective</Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("objectiveName")}
                type="text"
                readOnly={editObjective ? false : true}
                disabled={!objective ? true : false}
              />
            </ListGroupItem>
            <ListGroupItem className="d-flex justify-content-center align-items-center small p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">
                Target Date
              </Form.Label>
              <Controller
                control={control}
                name="targetDate"
                defaultValue=""
                render={({ field }) => (
                  <DatePicker
                    className="datePicker"
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
                name="openDate"
                defaultValue=""
                render={({ field }) => (
                  <DatePicker
                    className="datePicker"
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
            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">Goal</Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("parentGoal")}
                type="text"
                name="parentGoal"
                readOnly={editObjective ? false : true}
                disabled={!objective ? true : false}
              />
            </ListGroupItem>

            <ListGroupItem className="small d-flex justify-content-between align-items-center p-1 ps-3 pe-3">
              <Form.Label className="w-50 m-0 pe-1 small">
                Current Status
              </Form.Label>
              <Form.Control
                className="goal-detail-input"
                {...register("status")}
                type="text"
                name="status"
                readOnly={editObjective ? false : true}
                disabled={!objective ? true : false}
              />
            </ListGroupItem>
          </ListGroup>
        </Form.Group>
        <Card.Body className="detail-card-body">
          <Form.Label className="small">Objective</Form.Label>
          <Form.Control
            className="mb-3 small"
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

export default ObjectivesDetail;
