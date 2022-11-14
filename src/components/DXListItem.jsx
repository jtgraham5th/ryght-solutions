import { Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import styles from "./Diagnosis.module.scss";
import {
  ArrowUpCircleFill,
  ArrowDownCircleFill,
  FileEarmarkText,
  PencilSquare,
} from "react-bootstrap-icons";

function DXListItem({ type, disabled, index }) {
  return (
    <ListGroup.Item disabled={disabled} key={`default-${index}`} className={styles.dataItem}>
      <Row>
        <Col md="auto">
          <Form.Check
            type="checkbox"
            // label={type}
            id={`disabled-default-${type}`}
          />
        </Col>
        <Col md={5}>
          <div>F41.1 -</div>
          <div>Generalized Disorder Disorder</div>
        </Col>
        <Col md={2}>01/01/2022</Col>
        <Col md={2}>
          <Button variant="outline-light" size="sm">
            <ArrowUpCircleFill color="gray" />
          </Button>
          <Button variant="outline-light" size="sm">
            <ArrowDownCircleFill color="gray" />
          </Button>
        </Col>
        <Col md={2}>
          <Button variant="outline-light" size="sm">
            <PencilSquare color="#0d6efd" />
          </Button>
          <Button disabled={disabled} variant="outline-light" size="sm">
            <FileEarmarkText color="green" />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default DXListItem;
