import { Button, Card } from "react-bootstrap";
import { Printer, Pencil } from "react-bootstrap-icons";
import { PNPdf } from "../features/progressNotes/components/PN_Pdf";
import ModalContainer from "./ModalContainer";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import { useClient } from "../context/ClientContext";

const printOptions = [
  "Case Manager Name",
  "Referral Date",
  "Case Manager Supervisor",
  "Client's Record ID",
  "Case Number",
  "Review Comment",
];
export function ViewerHeader({ edit, print, disabled, activeNote }) {
  const { activeClient, formData } = useClient();
  const [show, setShow] = useState(false);

  return (
    <Card.Header className="d-flex flex-row justify-content-end p-2">
      <Button
        className="me-2"
        onClick={() => setShow(true)}
        variant={"dark"}
        type="button"
        disabled={disabled}
      >
        <Printer className="me-1" /> Print
      </Button>
      <Button
        className="me-2"
        onClick={edit}
        variant="primary"
        type="button"
        disabled={disabled}
      >
        <Pencil className="me-1" /> Edit
      </Button>
      <ModalContainer
        show={show}
        setShow={setShow}
        containerName="Print Page"
        component={
          <PDFViewer width="100%" height="100%" showToolbar={false}>
            <PNPdf
              formData={formData}
              data={activeNote}
              activeClient={activeClient}
            />
          </PDFViewer>
        }
      />
    </Card.Header>
  );
}
