import { Card, Button } from "react-bootstrap";
import "../TreatmentPlan.css";
import { Printer } from "react-bootstrap-icons";
import { useReactToPrint } from "react-to-print";
import ModalContainer from "../../../components/ModalContainer";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export function TreatmentPlanHeader({
  editTreatmentPlan,
  setEditTreatmentPlan,
  treatmentPlanRef,
}) {
  const [show, setShow] = useState(false);
  pdfjs.GlobalWorkerOptions.workerSrc =
    "//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js";
    
  const handlePrint = () => {
    var iHeight = 800;
    var iWidth = 800;
    var sPath =
      "http://www.ivronlogs.icu:8080/projects/PDFViewer/web/viewer.html?file=/projects/ryght-solutions/docs/apilist/APIList.pdf";
    window.open(
      sPath,
      "popUpWindow",
      "height=" +
        iHeight +
        ",width=" +
        iWidth +
        ",left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
    );
  };
  // useReactToPrint({
  //   content: () => treatmentPlanRef.current,
  // });

  const handleEdit = (e) => {
    e.preventDefault();
    setEditTreatmentPlan(true);
  };
  const exitEdit = () => {
    setEditTreatmentPlan(false);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h3>Treatment Plan Information</h3>
      {editTreatmentPlan ? (
        <div className="TP-form-label-button-container">
          <Button className="me-2" type="submit" variant="success">
            Save
          </Button>
          <Button className="me-2" variant="secondary" onClick={exitEdit}>
            Cancel
          </Button>
        </div>
      ) : (
        <div className="w-25 d-flex justify-content-evenly">
          <Button
            className="me-2"
            onClick={handleEdit}
            variant={"primary"}
            type="button"
          >
            Edit Treatment Plan
          </Button>
          <Button
            className="me-2"
            onClick={() => setShow(true)}
            variant={"dark"}
            type="button"
          >
            <Printer className="me-1" /> Print
          </Button>
        </div>
      )}
      <ModalContainer
        show={show}
        setShow={setShow}
        containerName="Print Page"
        component={
          <Document file="http://www.ivronlogs.icu:8080/projects/PDFViewer/web/viewer.html?file=/projects/ryght-solutions/docs/apilist/APIList.pdf">
            <Page pageNumber={1} />
          </Document>
        }
      />
    </div>
  );
}
