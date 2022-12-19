import { Row, Col } from "react-bootstrap";
import styles from "../../progressNotes/ProgressNotes.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import {PNNewNote} from "../../progressNotes";
import {PNList} from "../../progressNotes";

export function CVProgressNotes() {
  return (
    <>
      <Row className={styles.notes}>
        <PNNewNote />
      </Row>
      <hr />
      <Row className={styles.dataTableRow}>
        <Col className={styles.dataTableCol}>
          <PNList />
        </Col>
      </Row>
    </>
  );
}