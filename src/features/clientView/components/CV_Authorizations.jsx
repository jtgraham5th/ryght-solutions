import { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import {
  AUListHeader,
  AUListItem,
  AuthorizationsHeader,
  AUManager,
} from "../../authorizations";
import { useClient } from "../../../context/ClientContext";

export function CVAuthorizations() {
  const [show, setShow] = useState(false);
  const { activeAuthorizations } = useClient();

  return (
    <Row className="m-0">
      <AuthorizationsHeader setShow={setShow} />
      <Col md={12} className="">
        <ListGroup variant="flush">
          <AUListHeader />
          <div className="overflow-auto" style={{ height: "30rem" }}>
            {activeAuthorizations.map((authorization, index) => (
              <AUListItem key={index} data={authorization} setShow={setShow} />
            ))}
          </div>
        </ListGroup>
      </Col>
      <AUManager
        show={show}
        setShow={setShow}
        containerName={
          typeof show == "boolean" ? "New Authorization" : "Edit Authorization"
        }
      />
    </Row>
  );
}
