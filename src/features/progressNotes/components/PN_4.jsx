import { Form } from "react-bootstrap";
import { useState } from "react";
import "./PN_Manager.css";
import {PNGoalsManager} from "./PN_GoalsManager";
import { client01 } from "../data/ProgressNotes";

export function PN4({ register, control }) {
  const [selectedGoal, setSelectedGoal] = useState({
    goal: null,
    objective: null,
    intervention: null,
  });
  return (
    <>
      <Form.Group>
        <Form.Label className="PNM-form-label mb-2">Add New Goals</Form.Label>
        <PNMGoalsManager
          selectedGoal={selectedGoal}
          setSelectedGoal={setSelectedGoal}
          data={client01.treatmentPlan.goals}
        />
      </Form.Group>
      <Form.Group
        className="PNM-form-label w-100 mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Behavior</Form.Label>
        <Form.Control {...register("progBehavior")} as="textarea" rows={3} />
      </Form.Group>
      <Form.Group
        className="PNM-form-label w-100 mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Intervention</Form.Label>
        <Form.Control
          {...register("progIntervention")}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Form.Group
        className="PNM-form-label w-100 mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Resopnse</Form.Label>
        <Form.Control {...register("progResponse")} as="textarea" rows={3} />
      </Form.Group>
      <Form.Group
        className="PNM-form-label w-100 mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Plan</Form.Label>
        <Form.Control {...register("progPlan")} as="textarea" rows={3} />
      </Form.Group>
    </>
  );
}
