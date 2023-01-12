import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import {
  Unlock,
  Printer,
  Trash,
  Key,
  Receipt,
  CreditCardFill,
} from "react-bootstrap-icons";
import "./PN_Manager.css";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import { getListItem } from "../../../services/api";
import { useEffect } from "react";
import { useClient } from "../../../context/ClientContext";

export function PNViewNote({ data }) {
  const noteRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => noteRef.current,
  });
  const getPageMargins = () => {
    return `@page { margin: 20px 20px 20px 20px !important; }`;
  };
  const { activeClient } = useClient();
  const [convertedValues, setConvertedValues] = useState({});

  useEffect(() => {
    getListItemName(data.f7);
    getListItemName(data.f6);
  }, [data]);

  const getListItemName = async (grouplistid) => {
    const listItem = await getListItem(grouplistid).then((item) => {
      if (item)
        setConvertedValues((prevState) => ({
          ...prevState,
          [grouplistid]: item.groupvalue,
        }));
    });
  };

  return (
    <div>
      <Row className="align-items-center mb-2">
        <Col md={3}></Col>
        <Col md={6} className="text-center">
          <h5>Graham & Associates, Inc.</h5> 1518 Airport Road Hinesville, GA
          31313-9439
          <p />
          <h3>Progress Note</h3>
        </Col>
        <Col className="text-end" md={3}>
          SHN RCM CMOs
          <br /> 1518 Airport Road
          <br /> Hinesville, GA
          <br /> 31313-9439
          <br /> LIBERTY County
          <br /> Phone : 912-559-5536
        </Col>
      </Row>
      <Card className="mb-3">
        <style>{getPageMargins()}</style>
        <Card.Body>
          <Row className="mb-2">
            <Col className="pn_note-view-item">
              <h6>Consumer: </h6>{" "}
              {activeClient[20].pfirstname + " " + activeClient[20].plastname}
            </Col>
            <Col className="pn_note-view-item">
              <h6>Contact Type: </h6> {convertedValues[data.f7]}
            </Col>
            <Col className="pn_note-view-item">
              <h6>Setting: </h6> {convertedValues[data.f6]}
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="pn_note-view-item">
              <h6>Date of Service: </h6> {data.f1}
            </Col>
            <Col className="pn_note-view-item">
              <h6>Units Used: </h6> {data.f5}
            </Col>
            <Col className="pn_note-view-item">
              <h6>Policy #: </h6> ???
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="pn_note-view-item">
              <h6>Start: </h6> {data.f1}
            </Col>
            <Col className="pn_note-view-item">
              <h6>End: </h6> {data.f2}
            </Col>
            <Col className="pn_note-view-item">
              <h6>Service Code: </h6> {data.f11}
            </Col>
          </Row>
          <Row>
            <Col className="pn_note-view-item">
              <h6>Diagnosis: </h6> {data.f12}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col className="pn_note-view-item">
              <h6>Consumer met goal(s) this session: </h6>
              {data.f61}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Row className="mb-2">
            <Col className="pn_note-view-item">
              <h6>Service Delivered: </h6>{" "}
            </Col>
          </Row>
          <Row>
            <Col className="pn_note-view-item">
              <h6>Person(s) Involved: </h6>
              {data.f8}
            </Col>
            <Col className="pn_note-view-item">
              <h6>Consumers overall affect: </h6>
              {data.f9}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Row className="pn_note-view-item mb-2">
            <h6>
              Relevant Changes in Medical Conditions/Medications since last
              visit?:
            </h6>
            <div>{data.f10}</div>
          </Row>
          <Row className="pn_note-view-item">
            <h6>If yes, please explain: </h6>
            <div>{data.f60}</div>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Service Plan Objectives/Interventions</Card.Title>
          <Row>
            <Col md={3} className="pn_note-view-item">
              <h6>Goal: </h6> {data.f13}
            </Col>
          </Row>
          <Row>
            <Col className="pn_note-view-item">
              <h6>Objective: </h6> {data.f14}
            </Col>
          </Row>
          <Row>
            <Col className="pn_note-view-item mb-2">
              <h6>Intervention: </h6>
              {data.f15}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="page-break" />

      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle>Behavior</Card.Subtitle>
          <Card.Text>{data.f63}</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle>Intervention</Card.Subtitle>
          <Card.Text>{data.f64}</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle>Response</Card.Subtitle>
          <Card.Text>{data.f65}</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle>Plan</Card.Subtitle>
          <Card.Text>{data.f66}</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Subtitle>Strengths</Card.Subtitle>
          <Card.Text>Hey theyse are my strengths</Card.Text>
        </Card.Body>
      </Card>
      <hr />

      <div className="page-break" />

      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col className="pn_note-view-item">
              <h6>Next Appointment: </h6>{" "}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col className="pn_note-view-item">
              <Card.Title>Staff Signature/Position Credentials: </Card.Title>{" "}
            </Col>
            <Col className="pn_note-view-item font-italic">
              For Note ID: 01234567 ONLY{" "}
            </Col>
            <Col className="pn_note-view-item font-italics">
              {new Date().toLocaleString("en-US")}
            </Col>
          </Row>
          <Row>
            <Col md={3}>Alexa Burdok MA/ST Therapist</Col>
            <Col>Signature</Col>
          </Row>
        </Card.Body>
      </Card>

      <Card border="light" className="mb-2">
        <Card.Body>
          <Row className="mb-2">
            <Col className="pn_note-view-item">
              <h6>Note First Signed By: </h6>{" "}
              {activeClient[20].pfirstname + " " + activeClient[20].plastname}
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="pn_note-view-item">
              <h6>Note Last Modified By: </h6>{" "}
              {activeClient[20].pfirstname + " " + activeClient[20].plastname}
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="pn_note-view-item">
              <h6>See Change History for Details </h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Note Change History</Card.Title>
          <hr />
          <Card>
            <Card.Body>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>Staff: </h6>{" "}
                  {activeClient[20].pfirstname +
                    " " +
                    activeClient[20].plastname}
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Date: </h6>{" "}
                  {activeClient[20].pfirstname +
                    " " +
                    activeClient[20].plastname}
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Reason: </h6>{" "}
                  {activeClient[20].pfirstname +
                    " " +
                    activeClient[20].plastname}
                </Col>
              </Row>
              <Row className="mb-2">
                <Col className="pn_note-view-item">
                  <h6>Action: </h6>{" "}
                  {activeClient[20].pfirstname +
                    " " +
                    activeClient[20].plastname}
                </Col>
                <Col className="pn_note-view-item">
                  <h6>(Signature Goes Here) </h6>
                </Col>
                <Col className="pn_note-view-item">
                  <h6>Date Signed: </h6> 09/23/2022
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}
