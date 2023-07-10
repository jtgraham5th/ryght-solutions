import { forwardRef, useState } from "react";
import { Row, Col, Card, ListGroup, Badge, Form } from "react-bootstrap";
import styles from "../Requirements.module.scss";
import { FlagFill, CalendarEvent } from "react-bootstrap-icons";
import { documents } from "../data/documents";
import { getDocumentbyBilling } from "../services/api";
import formatISODate from "../../../utils/formatISODate";

export function BillingItem({
  index,
  data,
  selectDoc,
  active,
  resetDocument,
  batchBilling,
  setBatchBilling,
}) {
  const [startDate, setStartDate] = useState(new Date());

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
  const addBillingId = (billingid) => {
    if (
      !batchBilling.some((value) => parseInt(value) === parseInt(billingid))
      ) {
      setBatchBilling((prevState) => [...prevState, billingid]);
    } else {
      setBatchBilling((prevState) =>
        prevState.filter((value) => value !== billingid)
      );
    }
  };

  return (
    <ListGroup.Item
      className="pe-2 ps-2 d-flex"
      as={Row}
      action
      active={active}
      key={index}
      onClick={() => viewForm()}
      variant={
        batchBilling.some(
          (value) => parseInt(value) === parseInt(data.billingid)
        )
          ? "primary"
          : ""
      }
    >
      <Col md={2} className="d-flex justify-content-center align-items-center">
        <Form.Check
          inline
          style={{ fontSize: "1.5rem", marginRight: "0px" }}
          onClick={() => addBillingId(data.billingid)}
          type="checkbox"
          name={data.billingid}
          value={data.billingid}
          checked={
            batchBilling
              ? batchBilling.some(
                  (value) => parseInt(value) === parseInt(data.billingid)
                )
              : false
          }
        />
      </Col>
      <Col md={10}>
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
          {renderStatus(data.status)}
        </Badge>
      </Col>
    </ListGroup.Item>
  );
}
