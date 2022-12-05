import { forwardRef, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import styles from "./Requirements.module.scss";
import {
  FlagFill,
  CalendarEvent,
  Check2Square,
  XSquare,
} from "react-bootstrap-icons";
import DatePicker from "react-datepicker";

function RQAssessmentItem({index, activeForm, setActiveForm, setShow}) {
  const [startDate, setStartDate] = useState(new Date());
  const [complete, setComplete] = useState(false);
  
  const SetDueDateBtn = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.noWrap} onClick={onClick} ref={ref}>
      <span>
        <CalendarEvent size={15} color="royalblue" /> {value}
      </span>
    </div>
  ));
  const viewForm = () => {
    //right now set active form based on a switch case
    setShow(true)
  }

  return (
    <Card
      border={complete ? "success" : "danger"}
      className={styles.assessmentCard}
      key={index}
    >
      <Card.Body className="p-2">
        <Row className={styles.assessmentItem}>
          <Col xs={8} className="text-start">
            <Card.Title>
              <FlagFill color="orange" /> Assessment{" "}
            </Card.Title>
            <Card.Subtitle>Biopsychosocial </Card.Subtitle>
          </Col>
          <Col className={styles.assessmentDetail} xs={4}>
            <Card.Text className="fw-bold mb-0">Due:</Card.Text>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<SetDueDateBtn />}
            />
          </Col>
        </Row>
        <Row className={styles.assessmentDetailRow}>
          <Col className={styles.assessmentDetail} xs={3}>
            <Card.Text className="fw-bold mb-0">Mandatory:</Card.Text>
            <div>01/01/2022</div>
          </Col>
          <Col className={styles.assessmentDetail} xs={3}>
            <Card.Text className="fw-bold mb-0">Days from Start:</Card.Text>
            <div>365</div>
          </Col>
          <Col className={styles.assessmentDetail} xs={3}>
            <Card.Text className="fw-bold mb-0">Days Recurring:</Card.Text>
            <div>365</div>
          </Col>
          <Col className={styles.assessmentDetail} xs={3}>
            <Card.Text className="fw-bold mb-0">Note Req:</Card.Text>
            <div>Yes H001</div>
          </Col>
        </Row>
        <Row
          className={`${styles.assessmentItem} border-top align-items-center pt-2`}
        >
          <Col xs={8} className="text-start">
            <Button
              variant={complete ? "success" : "danger"}
              onClick={() => viewForm()}
            >
              {complete ? (
                <>
                  <Check2Square /> Complete
                </>
              ) : (
                <>
                  <XSquare /> Incomplete
                </>
              )}
            </Button>
          </Col>
          <Col className={styles.assessmentDetail} xs={4} x>
            <div>Date Completed:</div>
            <Card.Text className="fw-bold mb-0">
              {complete ? "01/01/2022" : "---"}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default RQAssessmentItem;
