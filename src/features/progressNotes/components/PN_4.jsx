import { Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./PN_Manager.css";
import { PNGoalsManager } from "./PN_GoalsManager";
import { TextAreaField } from "../../../components/form/fieldCreator";
import { useClient } from "../../../context/ClientContext";
import { parseGOI } from "../utils/parseData";

export function PN4({ register, control, setValue, getValues }) {
  const [selectedGoal, setSelectedGoal] = useState({
    goal: null,
    objective: null,
    intervention: null,
  });
  const { activeTreatmentPlan } = useClient();

  useEffect(() => {
    const pnGoal = getValues("f13");
    const pnObjective = getValues("f14");
    const pnIntervention = getValues("f15");
    async function setGOIValues() {
       parseGOI(
        activeTreatmentPlan,
        setSelectedGoal,
        pnGoal,
        pnObjective,
        pnIntervention
      );
    }
    setGOIValues();
  }, []);
  useEffect(() => {
    console.log(selectedGoal);
  }, [selectedGoal]);

  useEffect(() => {
    if (selectedGoal.goal) setValue("f13", selectedGoal.goal.description);
    if (selectedGoal.objective)
      setValue("f14", selectedGoal.objective.description);
    if (selectedGoal.intervention)
      setValue("f15", selectedGoal.intervention.description);
  }, [selectedGoal]);

  return (
    <>
      <Row>
        <h3 className="text-primary">Progress Note</h3>

        <Col md={4} className="pe-4 ps-4 pt-2 border-end bg-light">
          <Form.Label>
            Select a goal, objective and intervention to use for this progress
            note.
          </Form.Label>
          <PNGoalsManager
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
          />
        </Col>
        <Col md={8}>
          <Form.Group className="">
            <TextAreaField
              register={register}
              labelName="Behavior"
              fieldName="f63"
            />
            <TextAreaField
              register={register}
              labelName="Intervention"
              fieldName="f64"
            />
            <TextAreaField
              register={register}
              labelName="Response"
              fieldName="f65"
            />
            <TextAreaField
              register={register}
              labelName="Plan"
              fieldName="f66"
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}
