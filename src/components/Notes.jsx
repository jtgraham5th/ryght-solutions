import { Row, Col, Table } from "react-bootstrap";
import styles from "./Notes.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import SVaddByGroup from "./SVaddByGroup";
import SVaddInd from "./SVaddInd";
import NSaddNew from "./NSaddNew";

function Notes() {
  return (
    <>
      <Row className={styles.notes}>
        <NSaddNew />
      </Row>
      <hr />
      <h5 className="text-start ps-2">B.I.R.P Notes</h5>
      <Row className={styles.dataTableRow}>
        <Col className={styles.dataTableCol}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Service Date</th>
                <th>Time</th>
                <th>Consumer</th>
                <th>Goal</th>
                <th>Status</th>
                <th>By</th>
                <th>Submitted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td className={styles.noWrap}>
                  04:00 PM -<br /> 05:00 PM
                </td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
              <tr>
                <td>1</td>
                <td>7/14/2022</td>
                <td>04:00 PM - 05:00 PM</td>
                <td>John Doe</td>
                <td>1.Anxiety</td>
                <td>Locked/Author Signed</td>
                <td>Jimmie Doyle</td>
                <td>7/14/2022 9:33:00 AM</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Notes;
