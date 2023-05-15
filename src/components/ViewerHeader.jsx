import { Button, Card } from "react-bootstrap";
import { Printer, Pencil } from "react-bootstrap-icons";
import { PNPdf } from "../features/progressNotes/components/PN_Pdf";
import ModalContainer from "./ModalContainer";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import { useClient } from "../context/ClientContext";

// const printOptions = [
//   "Case Manager Name",
//   "Referral Date",
//   "Case Manager Supervisor",
//   "Client's Record ID",
//   "Case Number",
//   "Review Comment",
// ];
export function ViewerHeader({
  setEdit,
  edit,
  disabled,
  activeNote,
  onSubmit,
  handlePrint,
  title,
}) {
  const { activeClient, formData } = useClient();
  const [show, setShow] = useState(false);

  return (
    <Card.Header className="d-flex flex-row justify-content-between align-items-center p-2">
      <h4 className="mb-0">{title}</h4>
      <div>
        {!edit ? (
          <>
            {handlePrint ? (
              <Button
                className="me-2"
                onClick={handlePrint}
                variant={"dark"}
                type="button"
                disabled={disabled || !activeNote}
              >
                <Printer className="me-1" /> Print
              </Button>
            ) : null}
            <Button
              className="me-2"
              onClick={() => setEdit(true)}
              variant="primary"
              type="button"
              disabled={disabled}
            >
              <Pencil className="me-1" /> Edit
            </Button>
          </>
        ) : (
          <>
            <Button
              className="me-2"
              onClick={onSubmit}
              variant="success"
              type="button"
              disabled={disabled}
            >
              Save Document
            </Button>
            <Button
              className="me-2"
              variant="secondary"
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
          </>
        )}
      </div>
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
