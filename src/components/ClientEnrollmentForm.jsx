import {
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  DropdownButton,
  Dropdown,
  Pagination,
} from "react-bootstrap";
import { maritalStatus } from "../data/formData";
import styles from "./Services.module.scss";
import { useState } from "react";
import CEFInfom from "./CEFInfo";

function ClientEnrollmentForm() {
  const [mStatus, setMStatus] = useState("");
  const [sex, setSex] = useState();
  const [pronouns, setPronouns] = useState();
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Form>
      <CEFInfom />
      <Row>
        <Pagination className="justify-content-center" on>{items}</Pagination>
      </Row>
    </Form>
  );
}

export default ClientEnrollmentForm;
