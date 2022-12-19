import {
  Row,
  Accordion,
  Form,
} from "react-bootstrap";
import "./PN_Manager.css";
import {Diagnosis} from "../../diagnosis";

export function PN2({ data }) {
  return (
    <>
      <Form.Group as={Row}>
        <Accordion className="mb-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Diagnosis & Problems</Accordion.Header>
            <Accordion.Body className="p-0">
              <Diagnosis />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Form.Group>
    </>
  );
}
