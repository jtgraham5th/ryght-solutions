import { Row, Card, ButtonGroup, ToggleButton } from "react-bootstrap";
import { GoalList } from "../../treatmentPlan";
import { TreatmentPlanDetail } from "../../treatmentPlan";
import { ViewerHeader } from "../../../components/ViewerHeader";
import { ViewerFooter } from "../../../components/ViewerFooter";
import { useState } from "react";

export function CVTreatmentPlan() {
  const [screenValue, setScreenValue] = useState(1);

  const screens = [
    { name: "Treatment Plan", value: 1 },
    { name: "Client Goals", value: 2 },
  ];

  return (
    <Row className="justify-content-center p-3">
      <ButtonGroup className="w-50 mt-2 mb-4 text-center">
        {screens.map((screen, idx) => (
          <ToggleButton
            key={idx}
            id={`screen-${idx}`}
            type="radio"
            variant={
              screen.value === screenValue ? "primary" : "outline-primary"
            }
            name="screen"
            value={screen.value}
            // checked={screenValue === screen.value}
            onChange={(e) => setScreenValue(screen.value)}
          >
            {screen.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {screenValue === 1 ? <TreatmentPlanDetail /> : <GoalList />}
    </Row>
  );
}
