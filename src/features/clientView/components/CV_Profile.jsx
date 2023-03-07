import { Row, Col, ListGroup, Accordion } from "react-bootstrap";
import { CVDemographics } from "./CV_Demographics";
import { ContactLog } from "../../contacts";
import { Services } from "../../services";
import { Requirements } from "../../requirements";
import InsuranceInfo from "../../../components/InsuranceInfo";
import { Diagnosis } from "../../diagnosis";
import { CDTabs } from "../../clientDetails";
import { FileManager } from "../../fileManager";
import InsCard from "../../../components/InsCard";

export function CVProfile({ sidebar }) {
  return (
    <>
      <CVDemographics />
      <Row>
        <Col md={6}>
          <CDTabs />
        </Col>
        <Col md={6}>
          <InsuranceInfo />
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
        </Col>
        <Col md={6}>
          <Accordion defaultActiveKey="0" className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Insurance Information</Accordion.Header>
              <Accordion.Body className="p-0"></Accordion.Body>
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
