import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import {
  Unlock,
  Printer,
  Trash,
  Key,
  Receipt,
  CreditCardFill,
} from "react-bootstrap-icons";
import "./PN_Manager.css";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export function PNViewNoteOptions({ data }) {
  const noteRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => noteRef.current,
  });
  const getPageMargins = () => {
    return `@page { margin: 20px 20px 20px 20px !important; }`;
  };

  return (
    <>
      <Col md={2} className="pn_note-view-nav">
        <Button className="mb-4">Note History</Button>
        <h5>Note Actions</h5>
        <ListGroup variant="flush">
          <ListGroup.Item action disabled>
            <Unlock className="me-2" />
            Unlock Note
          </ListGroup.Item>
          <ListGroup.Item action onClick={handlePrint}>
            <Printer className="me-2" />
            Print Note
          </ListGroup.Item>
          <ListGroup.Item action disabled>
            <Trash className="me-2" />
            Trash Note
          </ListGroup.Item>
          <ListGroup.Item action disabled>
            <Key className="me-2" />
            Seal Note
          </ListGroup.Item>
          <ListGroup.Item action disabled>
            <CreditCardFill className="me-2" />
            Payment History
          </ListGroup.Item>
          <ListGroup.Item action disabled>
            <Receipt className="me-2" />
            Billing Status History
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
}
