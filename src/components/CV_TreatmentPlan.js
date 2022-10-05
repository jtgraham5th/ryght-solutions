import { useState, useRef } from "react";
import { Row, Col, Form, Button, Alert, Collapse } from "react-bootstrap";
import GoalList from "./G_List";
import TreatmentPlanDetails from "./TreatmentPlanDetails";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import { Pencil, Printer } from "react-bootstrap-icons";
import { useReactToPrint } from "react-to-print";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

function CVTreatmentPlan({ sidebar }) {
  const [editTreatmentPlan, setEditTreatmentPlan] = useState(false);
  const { control, register, handleSubmit, setValue } = useForm();

  const treatmentPlanRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => treatmentPlanRef.current,
  });
  const getPageMargins = () => {
    return `@page { margin: 20px 20px 20px 20px !important; }`;
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditTreatmentPlan(true);
  };
  const exitEdit = () => {
    setEditTreatmentPlan(false);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Row >
      <Form ref={treatmentPlanRef} onSubmit={handleSubmit(onSubmit)}>
        <style>{getPageMargins()}</style>
        <div className="d-flex justify-content-between align-items-center">
          <h3 >Treatment Plan Information</h3>
          {editTreatmentPlan ? (
            <div className="TP-form-label-button-container">
              <Button
                className="TP-form-label-button"
                type="submit"
                variant="outline-success"
                size="sm"
              >
                Save
              </Button>
              <Button
                className="TP-form-label-button"
                variant="outline-secondary"
                size="sm"
                onClick={exitEdit}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div className="w-25 d-flex justify-content-evenly">
              <Button
                className="form-label-button"
                onClick={handleEdit}
                variant={"outline-primary"}
                size="sm"
                type="button"
              >
                Edit Treatment Plan
              </Button>
              <Button
                className="form-label-button"
                onClick={handlePrint}
                variant={"outline-dark"}
                size="sm"
                type="button"
              >
                <Printer className="me-1" /> Print
              </Button>
            </div>
          )}
        </div>
        <Alert
          show={editTreatmentPlan}
          variant="primary"
          className="editingDetail text-center"
        >
          <strong>Editing Treatment Plan</strong>
          <Pencil className="ms-2" />
        </Alert>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <TreatmentPlanDetails />
          <GoalList />
          <Form.Label className="fs-5">Projected Family Involvement</Form.Label>
          <Form.Control
            {...register("familyInvolvement")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">Client Strengths</Form.Label>
          <Form.Control
            {...register("clientStrengths")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">Client Needs</Form.Label>
          <Form.Control
            {...register("clientNeeds")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">Client Abilities</Form.Label>
          <Form.Control
            {...register("clientAbilities")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">Client Preferences</Form.Label>
          <Form.Control
            {...register("clientPref")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">Crisis Criteria Planning</Form.Label>
          <Form.Control
            {...register("ccPlanning")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">Discharge Criteria Planning</Form.Label>
          <Form.Control
            {...register("dcPlanning")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">Step Down Service</Form.Label>
          <Form.Control
            {...register("sdService")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex flex-row align-items-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="w-100">Anticipated Step Down Date</Form.Label>
          <Controller
            control={control}
            name="sdDate"
            defaultValue=""
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => {
                  field.onChange(date);
                }}
                readOnly={editTreatmentPlan ? false : true}
              />
            )}
          />
          <Form.Label className="w-100">Anticipated Discharge Date</Form.Label>
          <Controller
            control={control}
            name="dischargeDate"
            defaultValue=""
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => {
                  field.onChange(date);
                }}
                readOnly={editTreatmentPlan ? false : true}
              />
            )}
          />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">
            Other Physicians/Agencies working with this client
          </Form.Label>
          <Form.Control
            {...register("otherPhysAgen")}
            as="textarea"
            rows={3}
            readOnly={editTreatmentPlan ? false : true}
          />
        </Form.Group>
      </Form>
    </Row>
  );
}

export default CVTreatmentPlan;
