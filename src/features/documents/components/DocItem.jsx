import { forwardRef, useState } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import styles from "../Requirements.module.scss";
import {
  FlagFill,
  CalendarEvent,
} from "react-bootstrap-icons";
import { documents } from "../data/documents";
import { getDocumentbyBilling } from "../services/api";


export function DocItem({ index, data, selectDoc, active, resetDocument }) {
  const [startDate, setStartDate] = useState(new Date());
  const [complete] = useState(false);

  const getDocumentInfo = () => {
    const documentInfo = documents.filter(
      (requirement) => data.docid === parseInt(requirement.doctypeid)
    );
    if (documentInfo.length > 0) {
      return documentInfo[0].name;
    } else return "NULL";
  };

  const SetDueDateBtn = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.noWrap} onClick={onClick} ref={ref}>
      <span>
        <CalendarEvent size={15} color="royalblue" /> {value}
      </span>
    </div>
  ));
  const viewForm = async () => {
    //right now set active form based on a switch case
    const document = await getDocumentbyBilling(data.billingid, data.patientid)
    resetDocument(document)
    selectDoc(document);
  };

  return (
    <ListGroup.Item className="pe-2 ps-2" action active={active} border={complete ? "success" : "danger"} key={index} onClick={() => viewForm()}>
      <Row>
        <Col md="auto" className="text-start">
          <h6>
            <FlagFill color="orange" />
            {getDocumentInfo()}
          </h6>
          <Card.Subtitle></Card.Subtitle>
        </Col>
      </Row>
      <div className="d-flex">
        <small className="fw-bold mb-0">Due:</small>
        <small>01/01/2022</small>
      </div>
    </ListGroup.Item>
  );
}
