import { Row, Col, Card, ListGroup } from "react-bootstrap";
import ClientIssues from "./ClientIssues";
import { useClient } from "../data/ClientContext";
import "./ClientDemographics.css";

function CVDemographics() {
  const { activeClient, formData } = useClient();
  console.log(activeClient)

  const getFormValue = (groupName, activeListId) => {
    const formDataArray = formData[groupName];
    const data = formDataArray.find((item) => {
      return item.listId === activeListId;
    });
    if (data) {
      
      return data.listItem;
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
                DOB: <strong>{activeClient.dob}</strong>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="data-item">
                Sex at Birth: <strong>{getFormValue("Sex At Birth", parseInt(activeClient.sexatbirthid))}</strong>
              </Col>
              <Col md={4} className="data-item">
                Gender:
                <strong>{getFormValue("Gender Identity",parseInt(activeClient.genderidentityid) )}</strong>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="data-item">
                Marital Status:{" "}
                <strong>
                  <strong>{getFormValue("Marital Status", parseInt(activeClient.maritalstatusid))}</strong>
                </strong>
              </Col>
              <Col md={6} className="data-item">
                Religion:{" "}
                <strong>
                  <strong>{getFormValue("Religion", parseInt(activeClient.religionid) )}</strong>
                </strong>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="data-item">
                Ethnicity:
                <strong>{getFormValue("Ethnicity", parseInt(activeClient.ethnicityid))}</strong>
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

export default CVDemographics;