import { Row } from "react-bootstrap";
import "./DocManager.css";
import {
  renderAdultBPS,
  renderAdolescentBPS,
  renderCANS,
  renderANSA,
  requirements,
  renderOrderOfService,
} from "../data/documents";

export function DocViewer({ data, activePage, edit, register, control, setValue}) {

  const renderRequirement = () => {
    console.log(data)
    switch (data.docid) {
      case 4:
        return renderAdolescentBPS(activePage, register, control, edit);
      case 5:
        return renderAdultBPS(activePage, register, control, edit);
      case 6:
        return renderCANS(activePage, register, control, edit);
      case 7:
        return renderANSA(activePage, register, control, edit);
      case 8:
        return renderAdultBPS(activePage, register, control, edit);
      case 9:
        return renderAdultBPS(activePage, register, control), edit;
      case 10:
        return renderOrderOfService(activePage, register, control, setValue, edit);
      default:
        return renderAdultBPS(activePage, register, control, edit);
    }
  };
  const getAssessmentInfo = () => {
    const assessmentInfo = requirements.filter(
      (requirement) => data.docid === parseInt(requirement.docid)
    );
    if (assessmentInfo.length > 0) {
      return assessmentInfo[0].name;
    } else return "NULL";
  };

  return (
    <div>
      <Row className="d-flex justify-content-evenly align-items-center">
        {renderRequirement(activePage, register, control)}
      </Row>
    </div>
  );
}
