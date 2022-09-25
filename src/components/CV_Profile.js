import {
  Row,
  Col,
  ListGroup,
  Accordion,
} from "react-bootstrap";
import "../App.css";
import CVDemographics from "./CV_Demographics";
import ContactLog from "./ContactLog";
import Services from "./Services";
import CVProgressNotes from "./CV_ProgressNotes";
import Requirements from "./Requirements";
import InsuranceInfo from "./InsuranceInfo";
import Diagnosis from "./Diagnosis";
import ClientDetailsTabs from "./ClientDetailsTabs";
import FileManager from "./FileManger";

function CVProfile({ sidebar }) {
  return (
    <>
      <CVDemographics />
      <Row className="container-a">
        <Col md={6}>
          <ClientDetailsTabs />
        </Col>
        <Col md={6}>
          <Accordion defaultActiveKey="0" alwaysOpen className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Client Requirements</Accordion.Header>
              <Accordion.Body className="p-0">
                <Requirements />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
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
              <Accordion.Header>File Manager</Accordion.Header>
              <Accordion.Body className="p-0">
                <FileManager />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Accordion defaultActiveKey="0" alwaysOpen className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Diagnosis & Problems</Accordion.Header>
              <Accordion.Body className="p-0">
                <Diagnosis />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" alwaysOpen className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Progress Notes</Accordion.Header>
              <Accordion.Body className="p-0">
                <CVProgressNotes />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
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
        </Col>
      </Row>
    </>
  );
}

export default CVProfile;
