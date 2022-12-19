import { CDContact } from "../../clientDetails";
import { CDPaGu } from "../../clientDetails";
import { CDPCCP } from "../../clientDetails";
import { CDPersonal } from "../../clientDetails";
import { CDPharmacy } from "../../clientDetails";
import { CDProg } from "../../clientDetails";
import { CVNav } from "./CV_Nav";

export function CVTabs({ activeTab, setActiveTab }) {
  // const [activeTab, setActiveTab] = useState("#PERS_INFO");

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
      <CVNav setActiveTab={setActiveTab} activeTab={activeTab} />
    </>
  );
}
