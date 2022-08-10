import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CDContact from "./CD_Contact";
import CDPaGu from "./CD_PaGu";
import CDPCCP from "./CD_PCCP";
import CDPersonal from "./CD_Personal";
import CDPharmacy from "./CD_Pharmacy";
import CDProg from "./CD_Prog";
import ClientDetailsNav from "./ClientDetailsNav";

function ClientDetails() {
  const [activeTab, setActiveTab] = useState("#PERS_INFO");

  const generatePI = () => {
    switch (activeTab) {
      case "#PERS_INFO":
        return <CDPersonal />;
      case "#CONT_INFO":
        return <CDContact />;
      case "#PAGU_INFO":
        return <CDPaGu />;
      case "#PROG_INFO":
        return <CDProg />;
      case "#PHARM_INFO":
        return <CDPharmacy />;
      case "#PCCP_INFO":
        return <CDPCCP />;
      default:
        return <CDPersonal />;
    }
  };

  return (
    <Card className="h-100">
      <Card.Header>Client Details</Card.Header>

      <Row className="h-100 w-100">
        <Col md={3} className="pi">
          <ClientDetailsNav setActiveTab={setActiveTab} activeTab={activeTab}/>
        </Col>
        <Col className="p-0">
            {generatePI()}
        </Col>
      </Row>
    </Card>
  );
}

export default ClientDetails;
