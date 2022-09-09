import { Row, Col, Container } from "react-bootstrap";
import SelectClient from "../components/SelectClient";
import { useState } from "react";
// import "../App.css";
import "./ClientView.css";
import NewClient from "../components/NewClient";

function ClientView({ sidebar }) {
  const [clientlist, setClientList] = useState([
    "Avery Allison",
    "Crissy Williams",
    "Samuel Johnson",
  ]);

  return (
    <Container className={sidebar ? "App active" : "App"}>
      <Row className="container-row">
        <Col md={5} className="">
          <SelectClient clients={clientlist} />
        </Col>
        <Col md="auto" className="mt-4 mb-4">
          {" "}
          - OR -
        </Col>
        <Col md={5}>
          <NewClient />
        </Col>
      </Row>
    </Container>
  );
}

export default ClientView;
