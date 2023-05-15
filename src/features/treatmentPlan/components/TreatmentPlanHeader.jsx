import { Button } from "react-bootstrap";
import "../TreatmentPlan.css";
import { Printer } from "react-bootstrap-icons";
import ModalContainer from "../../../components/ModalContainer";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFViewer, PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { TPPdf } from "./TP_Pdf";
import { useClient } from "../../../context/ClientContext";

export function TreatmentPlanHeader({
  editTreatmentPlan,
  setEditTreatmentPlan,
  treatmentPlanRef,
}) {
  const { activeClient, activeTreatmentPlan, formData } = useClient();
  const { tPlan } = activeTreatmentPlan;
  const [show, setShow] = useState(false);
  pdfjs.GlobalWorkerOptions.workerSrc =
    "//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js";

  const handleEdit = (e) => {
    e.preventDefault();
    setEditTreatmentPlan(true);
  };
  const exitEdit = () => {
    setEditTreatmentPlan(false);
  };
  const handlePrint = async (e) => {
    const url =
      "https://www.ivronlogs.icu/projects/PDFViewer/web/viewer.html?file=../../ryght-solutions/docs/198468/test.pdf";
    window.open(url, "_blank");
    // const TP = (
    //   <TPPdf
    //     formData={formData}
    //     data={tPlan[0]}
    //     activeTreatmentPlan={activeTreatmentPlan}
    //     activeClient={activeClient}
    //   />
    // );
    // const pdfBlob = await pdf(
    //   <TPPdf
    //     formData={formData}
    //     data={tPlan[0]}
    //     activeTreatmentPlan={activeTreatmentPlan}
    //     activeClient={activeClient}
    //   />
    // ).toBlob();
    // var file = new File([pdfBlob], "exampleTPlan", {
    //   lastModified: new Date().getTime(),
    // });
    // const pdfFormData = new FormData();
    // pdfFormData.append("file", file);
    // console.log(TP)
    // fetch("/print/tPlan", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/pdf",
    //   },
    //   body: TP,
    // });
    // fetch("/print", {
    //   method: "GET",
    // });
  };
  const downloadBtn = () => {
    <>
      <PDFDownloadLink
        document={
          <TPPdf
            formData={formData}
            data={tPlan[0]}
            activeTreatmentPlan={activeTreatmentPlan}
            activeClient={activeClient}
          />
        }
        fileName={"TP-PrintJob"}
      />
      <button> Download </button>{" "}
    </>;
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
            onClick={handlePrint}
            variant={"dark"}
            type="button"
            disabled={!tPlan[0]}
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
          <PDFViewer width="100%" height="100%" showToolbar={false}>
            <TPPdf
              formData={formData}
              data={tPlan[0]}
              activeTreatmentPlan={activeTreatmentPlan}
              activeClient={activeClient}
            />
          </PDFViewer>
          // <Document file="http://www.ivronlogs.icu:8080/projects/PDFViewer/web/viewer.html?file=/projects/ryght-solutions/docs/apilist/APIList.pdf">
          //   <Page pageNumber={1} />
          // </Document>
        }
      />
    </div>
  );
}
