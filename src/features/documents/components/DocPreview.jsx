import { Button, Row, Col } from "react-bootstrap";
import "./DocManager.css";
import {
  renderAdultBPS,
  renderShortAssessment,
  renderAdolescentBPS,
  renderANSA,
  renderCANS,
  renderOrderOfService,
} from "../data/documents";
import { useForm } from "react-hook-form";
import { EyeSlash } from "react-bootstrap-icons";

export function DocPreview({ data, activePage, fullscreen, toggleFullScreen }) {
  const { control, register, setValue } = useForm();

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
        return renderOrderOfService(activePage, register, control, setValue);
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