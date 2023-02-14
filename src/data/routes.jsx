import { Routes, Route, useParams } from "react-router-dom";

import { CVProfile } from "../features/clientView";
import { CVProgressNotes } from "../features/clientView";
import { CVTreatmentPlan } from "../features/clientView";
import { CVDocuments } from "../features/clientView/components/CV_Documents";
import { CVAuthorizations } from "../features/clientView/components/CV_Authorizations";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<CVProfile />} />
      <Route path="progress-notes" element={<CVProgressNotes />} />
      <Route path="treatment-plan" element={<CVTreatmentPlan />} />
      <Route path="documents" element={<CVDocuments />} />
      <Route path="authorizations" element={<CVAuthorizations />} />
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
      {/* <Route exact path="/pharmacy" element={CDPharmacy} /> */}
      <Route>
        <h2> 404- dashboard sub route not found</h2>
      </Route>
    </Routes>
  );
};

export { ClientRoutes, UserRoutes };
