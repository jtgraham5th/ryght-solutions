import { useState } from "react";
import { Card } from "react-bootstrap";
import "../App.css";
import "./ClientView.css";
import CVHeader from "../components/CV_Header";
import CVProfile from "../components/CV_Profile";
import CDPharmacy from "../components/CD_Pharmacy";
import CVProgressNotes from "../components/CV_ProgressNotes";
import CVTreatmentPlan from "../components/CV_TreatmentPlan";

function ClientView({ sidebar }) {
  const [activeTab, setActiveTab] = useState("#overview");

  const renderTab = () => {
    console.log("redner CV TABS")
    switch (activeTab) {
      case "#overview":
        return <CVProfile />;
      case "#progress_notes":
        return <CVProgressNotes />;
      case "#treatment":
        return <CVTreatmentPlan />;
      case "#prog_info":
        return <h1>Program Information</h1>;
      case "#pharmacy":
        return <CDPharmacy />;
      default:
        return <CVProfile />;
    }
  };

  return (
      <Card className="mt-3 w-100" background="danger" role="main">
        <CVHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <Card.Body>{renderTab()}</Card.Body>
      </Card>
  );
}

export default ClientView;
