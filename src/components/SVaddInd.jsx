import { Col, Card, Button, Form } from "react-bootstrap";
import styles from "./Services.module.scss";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function SVaddInd() {
  return (
    <Card>
      <Card.Header className={styles.cardHeader}>
        Add Services Individually
      </Card.Header>
      <Card.Body className="p-2">
        <Form>
          <DropdownMultiselect
            placeholderMultipleChecked="Multiple Selected"
            options={[
              "Australia",
              "Canada",
              "USA",
              "Poland",
              "Spain",
              "France",
            ]}
            name="countries"
          />
          <Col className={styles.addIndvidual}>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Include Services of funding source"
            />
            <Button size="sm">Save Services</Button>
          </Col>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SVaddInd;
