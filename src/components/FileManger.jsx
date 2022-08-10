import React, { useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Button,
  ButtonGroup,
  ToggleButton,
  Form,
} from "react-bootstrap";
import { Printer, PlusSquare } from "react-bootstrap-icons";
import styles from "./FileManager.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileCard from "./FileCard";

function FileManager() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [toggle, setToggle] = useState(null);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <ButtonGroup size="sm" className="mb-2 mt-2">
        {["File Manager", "File Upload"].map((value, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={value}
            checked={toggle === value}
            onChange={(e) => setToggle(e.currentTarget.value)}
          >
            {value}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {toggle === "File Manager" ? (
        <>
          <Form>
            <small className="text-start small ps-3">Search For Files</small>
            <Form.Group
              as={Row}
              className={styles.fileSearch}
              controlId="formPlaintextEmail"
            >
              <Col sm="9">
                <Form.Control defaultValue="email@example.com" />
              </Col>
              <Col sm="2">
                <Button variant="primary" type="submit">
                  Submit
                </Button>{" "}
              </Col>
            </Form.Group>
          </Form>{" "}
          <Row className={styles.fileContainer}>
            <ListGroup className={styles.dataGroup} variant="flush">
              {Array.apply(null, Array(5)).map((type) => (
                <FileCard />
              ))}
            </ListGroup>
          </Row>
        </>
      ) : (
        <Form>
          <Form.Group
            as={Row}
            className={styles.fileUpload}
            controlId="formPlaintextEmail"
          >
            <div className="text-start small ps-2">Choose File to Upload:</div>
            <Form.Control type="file" size="sm" />
            <div className="text-start small ps-2">Doc Name:</div>
            <Form.Control />
            <div className="text-start small ps-2">Doc Description:</div>
            <Form.Control as="textarea" />
            <div className="text-start small ps-2">Choose Label:<Button variant="link" onClick={() => console.log("click")}>Change Existing Label</Button></div>
            <Form.Select className="fs-6">
              <option>Label 1</option>
              <option>Label 2</option>
              <option>Label 3</option>
              <option>Label 4</option>
            </Form.Select>
            <div className={styles.uploadButtons}><Button>Upload</Button>
            <Button>Cancel</Button></div>
          </Form.Group>
        </Form>
      )}
    </>
  );
}

export default FileManager;
