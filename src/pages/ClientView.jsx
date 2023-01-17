import { useState } from "react";
import { Card } from "react-bootstrap";
// import "../App.css";
import "../features/clientView/ClientView.css";
import { CVHeader } from "../features/clientView";
import { CVProfile } from "../features/clientView";
import { CDPharmacy } from "../features/clientView";
import { CVProgressNotes } from "../features/clientView";
import { CVTreatmentPlan } from "../features/clientView";

function ClientView({ sidebar }) {
  const [activeTab, setActiveTab] = useState("#overview");

  const renderTab = () => {
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
