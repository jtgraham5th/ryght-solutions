import React, { useState } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { Printer, PlusSquare } from "react-bootstrap-icons";
import { CLContactItem } from "./CL_ContactItem";
import styles from "../ContactLog.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function ContactLog() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <Row className="w-100 mt-2 align-items-center">
        <Col>
          <h3 className="text-muted text-center">Feature Coming Soon.</h3>
        </Col>
        {/* <Col md={7}>
          <h5>Search Contact Log</h5>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            withPortal
            isClearable
          />
          <Button className="mt-2" size="sm">Search</Button>
        </Col>
        <Col className={styles.ContactLogBtns}>
          <Button variant="outline-primary" size="sm">
            <PlusSquare /> Add New Entry
          </Button>
          <Button variant="outline-primary" size="sm">
            <Printer /> Print Log
          </Button>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-center">
        <ListGroup className={styles.dataGroup} variant="flush">
          <ListGroup.Item className={styles.dataItem}>
            <CLContactItem />
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataItem}>
            <CLContactItem />
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataItem}>
            <CLContactItem />
          </ListGroup.Item>
          <ListGroup.Item className={styles.dataItem}>
            <CLContactItem />
          </ListGroup.Item>
        </ListGroup> */}
      </Row>
    </>
  );
}
