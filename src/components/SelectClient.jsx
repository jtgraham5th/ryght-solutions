import { Col, Card, Button, Form } from "react-bootstrap";
import styles from "./Services.module.scss";
import "../pages/ClientView.css"

function SelectClient({ clients }) {
  return (
    // <Card>
    //   <Card.Header className={styles.cardHeader}>Choose Client</Card.Header>
    //   <Card.Body className="p-2">
        <Form.Select className="select-client">
          {clients.map((name, i) => (
            <option key={i}>{name}</option>
          ))}
        </Form.Select>
    //   </Card.Body>
    // </Card>
  );
}

export default SelectClient;
