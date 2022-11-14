import { Row, Col, Card, ListGroup } from "react-bootstrap";
import ClientIssues from "./ClientIssues";
import { useClient } from "../data/ClientContext";
import "./ClientDemographics.css";

function CVDemographics() {
  const { activeClient, formData } = useClient();

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
              <Col md={6} className="data-item"> DOB: <strong>{activeClient.dob}</strong></Col>
            </Row>
            <Row>
              <Col md={4} className="data-item"> Sex at Birth: <strong></strong></Col>
              <Col md={4} className="data-item"> Sex: <strong>{activeClient.sexid === 2 ? "Female" : "Male"}</strong></Col>
              <Col md={4} className="data-item"> Gender: <strong>{formData.gender[`${activeClient.sexid + 1}`]}</strong></Col>
            </Row>
            <Row>
              <Col md={6} className="data-item"> Marital Status: <strong></strong></Col>
              <Col md={6} className="data-item"> Religion: <strong></strong></Col>
            </Row>
            <Row>
              <Col md={6} className="data-item"> Ethnicity: <strong>{formData.ethnicity[`${activeClient.ethnicityid - 3}`]}</strong></Col>
            </Row>
            {/* <ListGroup variant="flush">
              <ListGroup.Item className="data-item">
                Age: <strong></strong>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                Sex:{" "}
                <strong>{activeClient.sexid === 2 ? "Female" : "Male"}</strong>
              </ListGroup.Item>
              <ListGroup.Item className="data-item">
                DOB: <strong>{activeClient.dob}</strong>
              </ListGroup.Item>
            </ListGroup>
            <Row className="demoInfo">
              <Col md={12} className="clientDetails">
                <ListGroup variant="flush">
                  <ListGroup.Item className="data-item">
                    AGE: <strong>22</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="data-item">
                    SEX: <strong>MALE</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="data-item">
                    DOB: <strong>01/01/2000</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="data-item">
                    INS: <strong>BXBS (DCR123456789)</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="data-item">
                    BX LVL: <strong>NONE ASSIGNED</strong>
                  </ListGroup.Item>
                  <ListGroup.Item className="data-item">
                    PTS: <strong>0</strong>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row> */}
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
