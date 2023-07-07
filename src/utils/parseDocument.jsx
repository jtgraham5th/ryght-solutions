import {
  parseAdolescentBPS,
  parseAdultBPS,
  parseOrderOfService,
} from "../features/documents/services/parseData";
import { parseTreatmentPlan } from "../features/treatmentPlan/utils/parseData";
import { parseProgressNote } from "../features/progressNotes/utils/parseData";

export default function parseDocument(docData, activeClient, activePage) {
  const docTypeID = docData.docid;
  const billingID = docData.billingid;

  const DocComponents = {
    1: parseTreatmentPlan,
    2: parseProgressNote,
    4: parseAdolescentBPS,
    5: parseAdultBPS,
    10: parseOrderOfService,

    // add additional docTypeIDs here
  };

  const parseFunction = DocComponents[docTypeID];

  if (!parseFunction) {
    throw new Error(`Unsupported docTypeID: ${docTypeID}`);
  }

  return parseFunction(docData, activeClient, billingID, activePage);
}
