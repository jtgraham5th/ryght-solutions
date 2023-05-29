import { TPPdf } from "../features/treatmentPlan/components/TP_Pdf";
import { PNPdf } from "../features/progressNotes";
import { OESPdf } from "../features/services/components/OES_Pdf";

export default function generatePDF(formData,docData,activeClient,activeData) {
  const docTypeID = docData.DocTypeID || docData.docid

  const DocComponents = {
    1: TPPdf,
    2: PNPdf,
    10: OESPdf,
    // add additional docTypeIDs here
  };

  const PdfComponent = DocComponents[docTypeID];

  if (!PdfComponent) {
    return null; // or handle the error somehow
  }

  return (
    <PdfComponent
      formData={formData}
      data={docData}
      activeClient={activeClient}
      activeData={activeData}
    />
  );
}