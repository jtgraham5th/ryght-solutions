import { Row, Accordion, Form, Card } from "react-bootstrap";
import "./PN_Manager.css";
import { FileManager } from "../../fileManager";

export function PNFileUpload({ register, control }) {
  return (
    <Card bg="light" className="shadow">
      <Card.Body as={Row} className="small p-3">
        <Card.Title>Attachments:</Card.Title>
        <Card.Text>
          Attach file(s) from client file manager or attach new file(s)
        </Card.Text>
        <Form.Check
          type="checkbox"
          name="attachments"
          {...register("attachments")}
          value="Questionnaire"
          label="Attach Questionnaire"
          disabled
        />
        <Form.Check
          type="checkbox"
          name="attachments"
          {...register("attachments")}
          value="Assessment/Doc"
          label="Attach Assessment/Doc"
          disabled
        />
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="PNM-acc-header">
              Upload Files
            </Accordion.Header>
            <Accordion.Body>
              <FileManager />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
