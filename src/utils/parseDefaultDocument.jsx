import { parseDefaultOrderOfService } from "../features/documents/services/parseData";
import { parseDefaultTreatmentPlan } from "../features/treatmentPlan/utils/parseData";
import { parseDefaultProgressNote } from "../features/progressNotes/utils/parseData";

export default function parseDefaultDocument(docData) {
  console.log(docData);
  const docTypeID = docData.docid;

  const DocComponents = {
    1: parseDefaultTreatmentPlan,
    2: parseDefaultProgressNote,
    10: parseDefaultOrderOfService,
    // add additional docTypeIDs here
  };

  const parseFunction = DocComponents[docTypeID];

  if (!parseFunction) {
    throw new Error(`Unsupported docTypeID: ${docTypeID}`);
  }

  return parseFunction(docData);
}
