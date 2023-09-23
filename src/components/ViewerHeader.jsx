import { Button, Card, OverlayTrigger } from "react-bootstrap";
import { Printer, Pencil, Send, Pen } from "react-bootstrap-icons";
import { PNPdf } from "../features/progressNotes/components/PN_Pdf";
import ModalContainer from "./ModalContainer";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import { useClient } from "../context/ClientContext";
import { SignaturePopover } from "./SignaturePopover";
import AlertContainer from "./AlertContainer";

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
  activeDocument,
  onSubmit,
  handlePrint,
  title,
  billing,
  submitBilling,
}) {
  const { activeClient, formData } = useClient();
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ message: "", data: "" });

  const signDocument = () => {
    setAlert({ title: "Signature" });
  };
  return (
    <Card.Header className="d-flex flex-row justify-content-between align-items-center p-2">
      <h5 className="mb-0 ms-2">{title}</h5>
      <div>
        {!edit ? (
          <>
            <Button
              variant="secondary"
              className="me-2"
              onClick={handlePrint}
              // disabled={true}
              disabled={disabled || !activeDocument}
            >
              <Pen />
              Sign
            </Button>
            {billing ? (
              <Button
                className="me-2"
                onClick={submitBilling}
                variant={"success"}
                type="button"
                disabled={disabled || !activeDocument}
              >
                <Send className="me-1" /> Submit
              </Button>
            ) : null}
            {handlePrint ? (
              <Button
                className="me-2"
                onClick={handlePrint}
                variant={"dark"}
                type="button"
                disabled={disabled || !activeDocument}
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
              id="footer-next"
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
              data={activeDocument}
              activeClient={activeClient}
            />
          </PDFViewer>
        }
      />
      <AlertContainer
        show={alert.title}
        alert={alert}
        setAlert={setAlert}
        alertStyle="alert-signature"
        component={
          <SignaturePopover
            disabled={disabled}
            activeDocument={activeDocument}
            handlePrint={handlePrint}
          />
        }
      />
    </Card.Header>
  );
}
