import {
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  DropdownButton,
  Dropdown,
  Pagination
} from "react-bootstrap";
import { maritalStatus } from "../data/formData";
import styles from "./Services.module.scss";
import { useState } from "react";

function CEFInfom() {
  const [mStatus, setMStatus] = useState("");
  const [sex, setSex] = useState();
  const [pronouns, setPronouns] = useState();
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  const handleMStatus = (e) => {
    switch (parseInt(e)) {
      case 0:
        setMStatus(maritalStatus[0]);
        break;
      case 1:
        setMStatus(maritalStatus[1]);
        break;
      case 2:
        setMStatus(maritalStatus[2]);
        break;
      case 3:
        setMStatus(maritalStatus[3]);
        break;
      case 4:
        setMStatus(maritalStatus[4]);
        break;
      default:
        setMStatus("");
        break;
    }
  };
  const handleSex = (e) => {
    switch (parseInt(e)) {
      case 1:
        setSex("male");
        break;
      case 2:
        setSex("female");
        break;
      default:
        setSex("");
        break;
    }
  };
  const handlePronouns = (e) => {
    switch (parseInt(e)) {
      case 1:
        setPronouns("he/him");
        break;
      case 2:
        setPronouns("she/her");
        break;
      case 3:
        setPronouns("they/them");
        break;
      default:
        setPronouns("");
        break;
    }
  };
  return (
      <Row>
        <h2>Client Information</h2>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <Form.Control aria-label="First name" />
            <Form.Control aria-label="Last name" />
          </InputGroup>

          <InputGroup className="mb-3 ml-3">
            <DropdownButton
              variant="secondary"
              title="Marital Status"
              id="input-group-dropdown-1"
              onSelect={(key) => handleMStatus(key)}
            >
              {maritalStatus.map((status, i) => (
                <Dropdown.Item key={i} eventKey={i}>
                  {status.toUpperCase()}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <Form.Control
              aria-label="Text input with dropdown button"
              placeholder={mStatus}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Religion</InputGroup.Text>
            <Form.Control aria-label="Religion" />
          </InputGroup>

          <Row>
            <Col md={6}>
              <InputGroup size="sm" className="mb-3 ml-3">
                <DropdownButton
                  variant="secondary"
                  title="Sex"
                  id="input-group-dropdown-1"
                  onSelect={(key) => handleSex(key)}
                >
                  <Dropdown.Item eventKey="1">Male</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Female</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  aria-label="Text input with dropdown button"
                  placeholder={sex}
                />
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text>Gender</InputGroup.Text>
                <Form.Control aria-label="Gender" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup size="sm" className="mb-3 ml-3">
                <DropdownButton
                  variant="secondary"
                  title="Preferred Pronouns"
                  id="input-group-dropdown-1"
                  onSelect={(key) => handlePronouns(key)}
                >
                  <Dropdown.Item eventKey="1">he/him</Dropdown.Item>
                  <Dropdown.Item eventKey="2">she/her</Dropdown.Item>
                  <Dropdown.Item eventKey="3">them/they</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  aria-label="Text input with dropdown button"
                  placeholder={pronouns}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <InputGroup size="sm" className="mb-3 ml-3">
                <DropdownButton
                  variant="secondary"
                  title="Referral Source"
                  id="input-group-dropdown-1"
                  onSelect={(key) => console.log(key)}
                >
                  <Dropdown.Item eventKey="1">Source 1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Source 2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Source 3</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup size="sm" className="mb-3 ml-3">
                <DropdownButton
                  variant="secondary"
                  title="Referral Outsource"
                  id="input-group-dropdown-1"
                  onSelect={(key) => console.log(key)}
                >
                  <Dropdown.Item eventKey="1">Source 1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Source 2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Source 3</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
        <InputGroup className="mb-3">
            <InputGroup.Text>Date of Birth</InputGroup.Text>
            <Form.Control aria-label="DOB" placeholder="mm/dd/yy" />
          </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>Age</InputGroup.Text>
            <Form.Control aria-label="age" />
          </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>SSN*</InputGroup.Text>
            <Form.Control aria-label="SSN" type="password" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Date of Admission</InputGroup.Text>
            <Form.Control aria-label="DOA"  placeholder="mm/dd/yy"/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Outcome of Status</InputGroup.Text>
            <Form.Control aria-label="DOA" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Active</InputGroup.Text>
            <Form.Control aria-label="active" />
          </InputGroup>

        </Col>
      </Row>
  );
}

export default CEFInfom;
