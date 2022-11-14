import { useState } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import styles from "./Requirements.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import RQAssessmentItem from "./RQAssesmentItem";
import RequirementsManager from "./RQ_Manager";

function Requirements() {
  const [show, setShow] = useState();
  const [activeForm, setActiveForm] = useState();
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
          {Array.apply(null, Array(5)).map((value, i) => {
            return (
              <RQAssessmentItem
                key={i}
                index={i}
                activeForm={activeForm}
                setActiveForm={setActiveForm}
                setShow={setShow}
              />
            );
          })}
        </Col>
      </Row>
      <RequirementsManager
        show={show}
        setShow={setShow}
        containerName="test"
        data={activeForm}
      />
    </>
  );
}

export default Requirements;
