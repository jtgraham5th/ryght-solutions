import { Row, Col, ListGroup } from "react-bootstrap";
import styles from "../ClientDetails.module.scss";
import { useClient } from "../../../context/ClientContext";

export function CDContact() {
  const { activeContacts } = useClient();
  const allContacts = [].concat(...Object.values(activeContacts));
  return (
    <ListGroup className={styles.dataGroup}>
      {activeContacts &&
        allContacts.map((contact, index) => (
          <ListGroup.Item as={Row} className="d-flex w-100" key={index}>
            <Col md={6}>
              <Row>
                <Col className={styles.contactData}>
                  Contact Name:{" "}
                  <strong>{contact.name ? contact.name : "N/A"}</strong>
                </Col>
              </Row>
              <Row>
                <Col className={styles.contactData}>
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
                <Col className={styles.contactData}>
                  Home Phone:
                  <strong className="ps-2">
                    {contact.phone1 ? contact.phone1 : "N/A"}
                  </strong>
                </Col>
              </Row>
              <Row>
                <Col className={styles.contactData}>
                  Mobile Phone:
                  <strong className="ps-2">
                    {contact.phone2 ? contact.phone2 : "N/A"}
                  </strong>
                </Col>
              </Row>
              <Row>
                <Col className={styles.contactData}>
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