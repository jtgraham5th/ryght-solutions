import { Button, Row, Modal } from "react-bootstrap";
import { useState } from "react";
import "./RQ_Manager.css";
import AlertContainer from "../../../components/AlertContainer";
import {
  renderAdultBPS,
  renderAdolescentBPS,
  renderCANS,
  renderANSA,
  requirements,
  renderOrderOfService,
} from "../data/requirements";
import { useForm } from "react-hook-form";

export function RQViewer({ data, activePage }) {
  const { control, register, setValue } = useForm();

  const renderRequirement = () => {
    switch (data.doctypeid) {
      case 4:
        return renderAdolescentBPS(activePage, register, control);
      case 5:
        return renderAdultBPS(activePage, register, control);
      case 6:
        return renderCANS(activePage, register, control);
      case 7:
        return renderANSA(activePage, register, control);
      case 8:
        return renderAdultBPS(activePage, register, control);
      case 9:
        return renderAdultBPS(activePage, register, control);
      case 10:
        return renderOrderOfService(activePage, register, control, setValue);
      default:
        return renderAdultBPS(activePage, register, control);
    }
  };
  const getAssessmentInfo = () => {
    const assessmentInfo = requirements.filter(
      (requirement) => data.doctypeid === parseInt(requirement.doctypeid)
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
