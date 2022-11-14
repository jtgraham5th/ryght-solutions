import { useState } from "react";
import { Card } from "react-bootstrap";
import CDContact from "./CD_Contact";
import CDPaGu from "./CD_PaGu";
import CDPCCP from "./CD_PCCP";
import CDPersonal from "./CD_Personal";
import CDPharmacy from "./CD_Pharmacy";
import CDProg from "./CD_Prog";
import ClientDetailsNav from "./ClientDetailsNav";

function ClientDetailsTabs() {
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
    <>
     <Card>
       <Card.Header as="h5">
         Client Details
        <ClientDetailsNav setActiveTab={setActiveTab} activeTab={activeTab} />
       </Card.Header>
      {generatePI()}
     </Card>
    </>
  );
}

export default ClientDetailsTabs;
