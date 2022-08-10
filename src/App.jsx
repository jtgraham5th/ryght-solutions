import { Row, Col, Container, ListGroup, Accordion } from "react-bootstrap";
import "./App.css";
import TopNavigation from "./components/TopNavigation";
import ClientIssues from "./components/ClientIssues";
import ClientDemographics from "./components/ClientDemographics";
import ClientDetails from "./components/ClientDetails";
import ContactLog from "./components/ContactLog";
import Services from "./components/Services";
import Notes from "./components/Notes";
import Requirements from "./components/Requirements";
import InsuranceInfo from "./components/InsuranceInfo";
import Diagnosis from "./components/Diagnosis";
import ClientDetailsTabs from "./components/ClientDetailsTabs";
import FileCard from "./components/FileCard";
import FileManager from "./components/FileManger";

function App() {
  return (
    <>
      <TopNavigation />
      <Container className="App">
        <ClientDemographics />
        <Row className="container-a">
          <Col md={9}>
            <ClientDetailsTabs />
          </Col>
          <Col md={3}>
            <Accordion defaultActiveKey="0" className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>File Manager</Accordion.Header>
                <Accordion.Body className="p-0">
                 <FileManager />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Accordion defaultActiveKey="0" className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Assigned Staff</Accordion.Header>
                <Accordion.Body className="p-0">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0" alwaysOpen className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Client Requirements</Accordion.Header>
                <Accordion.Body className="p-0">
                  <Requirements />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" alwaysOpen className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Contact Log</Accordion.Header>
                <Accordion.Body className="p-0">
                  <ContactLog />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" alwaysOpen className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Services</Accordion.Header>
                <Accordion.Body className="p-0">
                  <Services />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6}>
            <Accordion defaultActiveKey="0" className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Insurance Information</Accordion.Header>
                <Accordion.Body className="p-0">
                  <InsuranceInfo />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0" className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Medical & Nursing</Accordion.Header>
                <Accordion.Body className="p-0">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" alwaysOpen className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Notes</Accordion.Header>
                <Accordion.Body className="p-0">
                  <Notes />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" alwaysOpen className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Diagnosis & Problems</Accordion.Header>
                <Accordion.Body className="p-0">
                  <Diagnosis />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
