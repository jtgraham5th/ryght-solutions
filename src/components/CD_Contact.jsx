import { useEffect, useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "./ClientDetails.module.scss";
import { useClient } from "../data/ClientContext";
import "./ClientDemographics.css";

function CDContact() {
  const { getClientContact, activeClient } = useClient();
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    if (contactInfo.length < 1) {
      setContactInfo(getClientContact(activeClient.patientid));
    }
  }, []);

  return (
    <ListGroup >
      {contactInfo &&
        contactInfo.map((contact, index) => (
          <ListGroup.Item as={Row} className="d-flex" key={index}>
            <Col md={6}>
              <Row>
                <Col className="data-item">
                  Contact Name:{" "}
                  <strong>{contact.name ? contact.name : "N/A"}</strong>
                </Col>
              </Row>
              <Row>
                <Col className="data-item">
                  <Row>
                    <Col md={4}>Address:</Col>
                    <Col md={8}>
                      <div className="d-flex flex-column">
                        <strong>{contact.address1}</strong>
                        <strong>
                          {contact.city},{contact.state} {contact.zip}
                        </strong>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col className="data-item">
                  Home Phone:
                  <strong className="ps-2">
                    {contact.phone1 ? contact.phone1 : "N/A"}
                  </strong>
                </Col>
              </Row>
              <Row>
                <Col className="data-item">
                  Mobile Phone:
                  <strong className="ps-2">
                    {contact.phone2 ? contact.phone2 : "N/A"}
                  </strong>
                </Col>
              </Row>
              <Row>
                <Col className="data-item">
                  Work Phone:
                  <strong className="ps-2">
                    {contact.phone3 ? contact.phone3 : "N/A"}
                  </strong>
                </Col>
              </Row>
            </Col>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default CDContact;
