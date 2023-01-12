import { Row } from "react-bootstrap";
import { GoalList } from "../../treatmentPlan";
import { TreatmentPlanDetail } from "../../treatmentPlan";

export function CVTreatmentPlan() {
  return (
    <Row>
      <TreatmentPlanDetail />
      <GoalList />
    </Row>
  );
}
