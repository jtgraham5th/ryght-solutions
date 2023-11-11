import { Row, Col, Accordion } from "react-bootstrap";
import { CVDemographics } from "./CV_Demographics";
import { ContactLog } from "../../contacts";
import InsuranceInfo from "../../../components/InsuranceInfo";
import { CDTabs } from "../../clientDetails";
import { FileManager } from "../../fileManager";

export function CVProfile({ sidebar }) {
  return (
    <>
      {/* <CDTabs /> */}
      <Row>
        <Col md={3}>
          <CVDemographics />
        </Col>
        <Col md={9}>
          <InsuranceInfo />
          <CDTabs />
          <Row className="mt-4">
            <Col md={6}>
              <Accordion className="mb-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Contact Log</Accordion.Header>
                  <Accordion.Body className="p-0">
                    <ContactLog />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6}>
              <Accordion className="mb-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>File Manager</Accordion.Header>
                  <Accordion.Body className="p-0">
                    <FileManager />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
