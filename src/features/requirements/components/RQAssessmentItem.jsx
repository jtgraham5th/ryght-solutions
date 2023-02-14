import { forwardRef, useState } from "react";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import styles from "../Requirements.module.scss";
import {
  FlagFill,
  CalendarEvent,
  Check2Square,
  XSquare,
} from "react-bootstrap-icons";
import { requirements } from "../data/requirements";

import DatePicker from "react-datepicker";

export function RQAssessmentItem({ index, data, selectDoc, active }) {
  const [startDate, setStartDate] = useState(new Date());
  const [complete] = useState(false);

  const getAssessmentInfo = () => {
    const assessmentInfo = requirements.filter(
      (requirement) => data.doctypeid === parseInt(requirement.doctypeid)
    );
    if (assessmentInfo.length > 0) {
      return assessmentInfo[0].name;
    } else return "NULL";
  };

  // const checkForRecord = () => {
  //   console.log(data)
  //   if (data.recid){

  //   } exle
  // }
  const SetDueDateBtn = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.noWrap} onClick={onClick} ref={ref}>
      <span>
        <CalendarEvent size={15} color="royalblue" /> {value}
      </span>
    </div>
  ));
  const viewForm = () => {
    //right now set active form based on a switch case
    selectDoc(data);
  };

  return (
    <ListGroup.Item className="pe-2 ps-2" action active={active} border={complete ? "success" : "danger"} key={index} onClick={() => viewForm()}>
      <Row>
        <Col md="auto" className="text-start">
          <h6>
            <FlagFill color="orange" />
            {getAssessmentInfo()}
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
