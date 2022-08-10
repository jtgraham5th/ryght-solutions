import { Row, Col, Container, Alert } from "react-bootstrap";

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>1 of 1
        <Alert  variant="primary">
          This is a alert—check it out!
        </Alert></Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
