import { Row, Col } from "react-bootstrap";
import styles from "./Notes.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import PNNewNote from "./PN_NewNote";
import ProgressNotesList from "./PN_List";

function CVProgressNotes() {
  return (
    <>
      <Row className={styles.notes}>
        <PNNewNote />
      </Row>
      <hr />
      <Row className={styles.dataTableRow}>
        <Col className={styles.dataTableCol}>
          <ProgressNotesList />
        </Col>
      </Row>
    </>
  );
}

export default CVProgressNotes;
