import { Row, Col, Card, ListGroup, Form } from "react-bootstrap";
import { personalDataOptions } from "../data/formData";

function ClientIssues() {
  return (
      <Col md={6}>
        <Card border="danger" bg="danger" text="white" >
          <Card.Header variant="danger" className="p-0">Personal Information</Card.Header>
          <Form>
            <Row>
              <Col>
                <ListGroup className="data-group" variant="flush">
                  {personalDataOptions.map((type) => (
                    <ListGroup.Item
                      key={`default-${type}`}
                      className="text-start data-item"
                    >
                      <Form.Check
                        disabled
                        type="checkbox"
                        label={type}
                        id={`disabled-default-${type}`}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
  );
}

export default ClientIssues;
