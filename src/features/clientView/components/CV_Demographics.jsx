import { Row, Col, Card, ListGroup } from "react-bootstrap";
import {ClientIssues} from "./ClientIssues";
import { useClient } from "../../../context/ClientContext";
import "./ClientDemographics.css";

export function CVDemographics() {
  const { activeClient, formData } = useClient();

  const getFormValue = (groupName, activeListId) => {
    const formDataArray = formData[groupName];
    const data = formDataArray.find((item) => {
      return item.grouplistid === activeListId;
    });
    if (data) {
      return data.groupvalue;
    } else {
      return "";
    }
  };
  return (
    <Card className="mb-4">
      <Card.Body className="pt-0 pb-0 pe-3">
        <Row className="demoInfo">
          <Col className="p-0 h-100" md={2}>
            <img
              className="clientImg"
              alt="client"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6} className="data-item">
                DOB: <strong className="ps-2">{activeClient[20].dob}</strong>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="data-item">
                Sex at Birth: <strong className="ps-2">{getFormValue("Sex At Birth", parseInt(activeClient[20].sexatbirthid))}</strong>
              </Col>
              <Col md={6} className="data-item">
                Gender:
                <strong className="ps-2">{getFormValue("Gender Identity",parseInt(activeClient[20].genderid) )}</strong>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="data-item">
                Marital Status:
                  <strong className="ps-2">{getFormValue("Marital Status", parseInt(activeClient[20].maritalstatusid))}</strong>
              </Col>
              <Col md={6} className="data-item">
                Pronouns:
                  <strong className="ps-2">{getFormValue("Preferred Pronouns", parseInt(activeClient[20].preferredpronounid))}</strong>
              </Col>
            </Row>
            <Row>
            <Col md={6} className="data-item">
                Religion:
                  <strong className="ps-2">{getFormValue("Religion", parseInt(activeClient[20].religionid) )}</strong>
              </Col>
              <Col md={6} className="data-item">
                Ethnicity:
                <strong className="ps-2">{getFormValue("Ethnicity", parseInt(activeClient[20].ethnicityid))}</strong>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <ClientIssues />
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}