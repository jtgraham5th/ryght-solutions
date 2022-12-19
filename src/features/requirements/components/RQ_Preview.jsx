import { Button, Row, Col } from "react-bootstrap";
import "./RQ_Manager.css";
import {
  renderAdultBPS,
  renderShortAssessment,
  renderAdolescentBPS,
  renderANSA,
  renderCANS,
} from "../data/requirements";
import { useForm } from "react-hook-form";
import { EyeSlash } from "react-bootstrap-icons";

export function RQPreview({ data, activePage, fullscreen, toggleFullScreen }) {
  const { control, register } = useForm();

  const renderPreview = () => {
    switch (data.doctypeid) {
      case "4":
        return renderAdolescentBPS(activePage, register, control);
      case "5":
        return renderAdultBPS(activePage, register, control);
      case "6":
        return renderCANS(activePage, register, control);
      case "7":
        return renderANSA(activePage, register, control);
      case "8":
        return renderAdultBPS(activePage, register, control);
      case "9":
        return renderAdultBPS(activePage, register, control);
      case "10":
        return renderAdultBPS(activePage, register, control);
      default:
        return renderAdultBPS(activePage, register, control);
    }
  };
  return (
    <div className={fullscreen ? "preview-container" : "d-none"}>
      <Row>
        <Col md={11} className="preview-title">
          Preview of {data.name}
        </Col>
        <Col md={1} className="text-end">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => toggleFullScreen(!fullscreen)}
          >
            <EyeSlash size={20} />
          </Button>
        </Col>
      </Row>
      <Row className="preview">{renderPreview()}</Row>
    </div>
  );
}