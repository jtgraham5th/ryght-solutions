import { useState } from "react";
import { Row, Col, Alert, Button } from "react-bootstrap";
import styles from "./Requirements.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import RQAssessmentItem from "./RQAssesmentItem";
import RequirementsManager from "./RQ_Manager";
import RequirementsViewer from "./RQ_Viewer";
import { useClient } from "../data/ClientContext";

function Requirements() {
  const [showViewer, setShowViewer] = useState(false);
  const [showManager, setShowManager] = useState(false);
  const [activeForm, setActiveForm] = useState({});
  const { clientRequirements } = useClient();
  console.log(clientRequirements);
  // const SetDueDateBtn = forwardRef(({ value, onClick }, ref) => (
  //   <td className={styles.noWrap} onClick={onClick} ref={ref}>
  //     <span>
  //       {value} <CalendarEvent />
  //     </span>
  //   </td>
  // ));
  return (
    <>
      <Row className="w-100 m-0 justify-content-center p-2">
        <Button className="w-75 mt-3 mb-3" onClick={() => setShowManager(true)}>
          Manage Client Requirements
        </Button>
        <Alert variant="secondary" className={styles.dataAlert}>
          0 Complete | 5 Incomplete | 5 Total Requirements | 0.00% Completion
        </Alert>
      </Row>
      <Row className={styles.dataTableRow}>
        <Col className={styles.dataTableCol}>
          {clientRequirements.map((value, i) => {
            return (
              <RQAssessmentItem
                key={i}
                index={i}
                data={value}
                setShow={setShowViewer}
                setActiveForm={setActiveForm}
              />
            );
          })}
        </Col>
      </Row>
      <RequirementsViewer
        show={showViewer}
        setShow={setShowViewer}
        containerName="test"
        data={activeForm}
      />
      <RequirementsManager
        show={showManager}
        setShow={setShowManager}
        containerName="Requirements Manager"
      />
    </>
  );
}

export default Requirements;
