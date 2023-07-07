import { forwardRef, useState } from "react";
import { Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import styles from "../Requirements.module.scss";
import { FlagFill, CalendarEvent } from "react-bootstrap-icons";
import { documents } from "../data/documents";
import { getDocumentbyBilling } from "../services/api";
import formatISODate from "../../../utils/formatISODate";

export function BillingItem({ index, data, selectDoc, active, resetDocument }) {
  const [startDate, setStartDate] = useState(new Date());
  const [complete] = useState(false);

  const getDocumentInfo = () => {
    const documentInfo = documents.filter(
      (doc) => data.doctypeid === parseInt(doc.doctypeid)
    );
    if (documentInfo.length > 0) {
      return documentInfo[0].name;
    } else return "NULL";
  };

  const viewForm = async () => {
    //right now set active form based on a switch case
    const document = await getDocumentbyBilling(data.billingid, data.patientid);
    resetDocument(data);
    selectDoc(data);
  };
  const renderStatusVariant = (status) => {
    switch (status) {
      case 210:
        return "success";
      case 211:
        return "secondary";
      case 212:
        return "danger";
      default:
        return "primary";
    }
  };
  const renderStatus = (status) => {
    switch (status) {
      case 210:
        return "Approved";
      case 211:
        return "Pending";
      case 212:
        return "Denied";
      default:
        return "no status";
    }
  };

  return (
    <ListGroup.Item
      className="pe-2 ps-2"
      action
      active={active}
      border={complete ? "success" : "danger"}
      key={index}
      onClick={() => viewForm()}
    >
      <Row>
        <Col md="auto" className="text-start">
          <small className="fw-light"># {data.billingid}</small>
          <Card.Subtitle>{getDocumentInfo()}</Card.Subtitle>
        </Col>
      </Row>
      <div className="d-flex">
        <small className="fw-light mb-0 me-1">Last Update: </small>
        <small className="fw-light">{formatISODate(data.lastupdate)}</small>
      </div>
      <Badge bg={renderStatusVariant(data.status)}>
                {renderStatus(data.status)}</Badge>
    </ListGroup.Item>
  );
}
