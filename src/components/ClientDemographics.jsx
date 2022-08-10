import { Row, Col, Card, ListGroup, Image, Badge } from "react-bootstrap";
import ClientIssues from "./ClientIssues";

function ClientDemographics() {
  return (
    <Row className="data-row mt-3">
    <Col md={2}>
      <Card>
        <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      </Card>
    </Col>
    <Col md={10}>
      <Card>
        <Card.Header className="text-start">
          Jane Doe <Badge bg="danger">HAS CO-PAY</Badge>
        </Card.Header>
        <Row className="demoInfo">
          <Col md={6}>
            <ListGroup className="data-group" variant="flush">
              <ListGroup.Item className="p-1 data-item">
                AGE: <strong>22</strong>
              </ListGroup.Item>
              <ListGroup.Item className="p-1 data-item">
                SEX: <strong>MALE</strong>
              </ListGroup.Item>
              <ListGroup.Item className="p-1 data-item">
                DOB: <strong>01/01/2000</strong>
              </ListGroup.Item>
              <ListGroup.Item className="p-1 data-item">
                AGE: <strong>22</strong>
              </ListGroup.Item>
              <ListGroup.Item className="p-1 data-item">
                SEX: <strong>MALE</strong>
              </ListGroup.Item>
              <ListGroup.Item className="p-1 data-item">
                DOB: <strong>01/01/2000</strong>
              </ListGroup.Item>
              <ListGroup.Item className="p-1 data-item">
                INS: <strong>BXBS (DCR123456789)</strong>
              </ListGroup.Item>
              <ListGroup.Item className="p-1 data-item">
                BX LVL: <strong>NONE ASSIGNED</strong>
              </ListGroup.Item>
              <ListGroup.Item className="p-1 data-item">
                PTS: <strong>0</strong>
              </ListGroup.Item>
            </ListGroup>
          </Col>
            <ClientIssues />
        </Row>
      </Card>
    </Col>
  </Row>
);
}

export default ClientDemographics;
