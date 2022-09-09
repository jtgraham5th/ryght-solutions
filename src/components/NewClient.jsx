import { useState } from "react";
import { Col, Card, Button, Form } from "react-bootstrap";
import ClientEnrollmentForm from "./ClientEnrollmentForm";
import ModalContainer from "./ModalContainer";
import styles from "./Services.module.scss";

function NewClient() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card>
        <Card.Header className={styles.cardHeader}>
          Add a New Client
        </Card.Header>
        <Card.Body className="p-2 text-center">
          <Card.Text>
            Complete enrollment form for onboarding of new clients.
          </Card.Text>
          <Button variant="success" onClick={() => setShow(true)}>Add New Client</Button>
        </Card.Body>
      </Card>
      <ModalContainer
        show={show}
        setShow={setShow}
        containerName="New Client"
        fullscreen="true"
        component={<ClientEnrollmentForm />}
      />
    </>
  );
}

export default NewClient;
