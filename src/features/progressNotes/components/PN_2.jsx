import { Row, Card, Form } from "react-bootstrap";
import "./PN_Manager.css";
import { Diagnosis } from "../../diagnosis";

export function PN2({ data }) {
  return (
    <Form.Group as={Row}>
      <div className="CE-section-title">
          <h3>Progress Note</h3>
        </div>
      <Card >
        {/* <Diagnosis /> */}
      </Card>
    </Form.Group>
  );
}
