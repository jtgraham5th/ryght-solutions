import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import "../App.css";
import "./ClientView.css";
import CVHeader from "../components/CV_Header";
import CVProfile from "../components/CV_Profile";
import CDPharmacy from "../components/CD_Pharmacy";
import CDPCCP from "../components/CD_PCCP";
import CVProgressNotes from "../components/CV_ProgressNotes";
import CVTreatmentPlan from "../components/CV_TreatmentPlan";

function ClientView({ sidebar }) {
  const [activeTab, setActiveTab] = useState("#PERS_INFO");

  const renderTab = () => {
    switch (activeTab) {
      case "#info":
        return <CVProfile />;
      case "#progress_notes":
        return <CVProgressNotes />;
      case "#treatment":
        return <CVTreatmentPlan />;
      case "#prog_info":
        return <h1>Program Information</h1>;
      case "#pharmacy":
        return <CDPharmacy />;
      case "#pccp":
        return <CDPCCP />;
      default:
        return <CVProfile />;
    }
  };

  return (
    <Container className={sidebar ? "App active" : "App"}>
      <Card className="mt-3">
        <CVHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <Card.Body>{renderTab()}</Card.Body>
      </Card>
    </Container>
  );
}

export default ClientView;
