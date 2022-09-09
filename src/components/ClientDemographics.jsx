import { Row, Col, Card, ListGroup, Image, Badge } from "react-bootstrap";
import ClientIssues from "./ClientIssues";
import "./ClientDemographics.css"

function ClientDemographics() {
  return (
    <Card className="clientDemo">
      <Card.Header className="text-start">
        Jane Doe <Badge bg="danger">HAS CO-PAY</Badge>
      </Card.Header>
      <Row className="demoInfo">
        <Col className="h-100" md={4}>
          <Row className="h-100" >
            <Col md={5} className="p-0">
              <img
                className="clientImg"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />{" "}
            </Col>
            <Col md={7} className="clientDetails">
              <ListGroup  variant="flush">
                <ListGroup.Item className="data-item">
                  Age: <strong>22</strong>
                </ListGroup.Item>
                <ListGroup.Item className="data-item">
                  Sex: <strong>MALE</strong>
                </ListGroup.Item>
                <ListGroup.Item className="data-item">
                  DOB: <strong>01/01/2000</strong>
                </ListGroup.Item>
                <ListGroup.Item className="data-item">
                  Ins: <strong>BXBS (DCR123456789)</strong>
                </ListGroup.Item>
                <ListGroup.Item className="data-item">
                  BX Lvl: <strong>NONE ASSIGNED</strong>
                </ListGroup.Item>
                <ListGroup.Item className="data-item">
                  Pts: <strong>0</strong>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
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
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <ClientIssues />
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default ClientDemographics;
