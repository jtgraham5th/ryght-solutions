import React, {forwardRef } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import styles from "./Requirements.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import {
  CalendarEvent,
} from "react-bootstrap-icons";
import "react-datepicker/dist/react-datepicker.css";
import RQAssessmentItem from "./RQAssesmentItem";

function Requirements() {
  
  // const SetDueDateBtn = forwardRef(({ value, onClick }, ref) => (
  //   <td className={styles.noWrap} onClick={onClick} ref={ref}>
  //     <span>
  //       {value} <CalendarEvent />
  //     </span>
  //   </td>
  // ));
  return (
    <>
      <h5 className="text-start ps-2 m-2">Client Requirements Checklist</h5>
      <Alert variant="secondary" className={styles.dataAlert}>
          0 Complete | 5 Incomplete | 5 Total Requirements | 0.00% Completion
        </Alert>
      <Row className={styles.dataTableRow}>
        <Col className={styles.dataTableCol}>
          {Array.apply(null, Array(5)).map((value,i) => {
            return <RQAssessmentItem key={i} index={i}/>;
          })}
          {/* <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Due</th>
                <th>Mandatory</th>
                <th>Days from start</th>
                <th>Days Recurring</th>
                <th>Assessment/Doc</th>
                <th>Note Req.</th>
                <th>Complete</th>
                <th>Date Completed</th>
              </tr>
            </thead>
            <tbody>
              {Array.apply(null, Array(5)).map(() => {
                return (
                  <tr>
                    <td>Assessment</td>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      customInput={<SetDueDateBtn />}
                    />
                    <td>NO</td>
                    <td>365</td>
                    <td>365</td>
                    <td>Biopsychosocial</td>
                    <td>yes 0031</td>
                    <td>
                      <Button
                        variant={complete ? "success" : "outline-danger"}
                        onClick={() => setComplete(!complete)}
                      >
                        {complete ? <Check2Square /> : <XSquare />}{" "}
                      </Button>
                    </td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
        </Col>
      </Row>
    </>
  );
}

export default Requirements;
