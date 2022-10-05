
import { Routes, Route } from "react-router-dom";

import CVProfile from "../components/CV_Profile";
import CDPharmacy from "../components/CD_Pharmacy";
import CVProgressNotes from "../components/CV_ProgressNotes";
import CVTreatmentPlan from "../components/CV_TreatmentPlan";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="overview" element={<CVProfile />} />
      <Route path="progress-notes" element={<CVProgressNotes />} />
      <Route path="treatment-plan" element={<CVTreatmentPlan />} />
      {/* <Route path="/program-info" element={Settings} /> */}
      <Route path="pharmacy" element={<CDPharmacy />} />
    </Routes>
  );
};
const UserRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={CVProfile} />
      <Route exact path="/progress-notes" element={CVProgressNotes} />
      <Route exact path={`/treatement-plan`} element={CVTreatmentPlan} />
      {/* <Route exact path="/program-info" element={Settings} /> */}
      <Route exact path="/pharmacy" element={CDPharmacy} />
      <Route>
        <h2> 404- dashboard sub route not found</h2>
      </Route>
    </Routes>
  );
};

export { ClientRoutes, UserRoutes };
