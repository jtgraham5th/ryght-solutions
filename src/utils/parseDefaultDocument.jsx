import {
  parseDefaultOrderOfService,
  parseDefaultAdolescentBPS,
  parseDefaultAdultBPS,
} from "../features/documents/services/parseData";
import { parseDefaultTreatmentPlan } from "../features/treatmentPlan/utils/parseData";
import { parseDefaultProgressNote } from "../features/progressNotes/utils/parseData";

export default function parseDefaultDocument(docData) {
  const docTypeID = docData.docid;

  const DocComponents = {
    1: parseDefaultTreatmentPlan,
    2: parseDefaultProgressNote,
    4: parseDefaultAdolescentBPS,
    5: parseDefaultAdultBPS,
    10: parseDefaultOrderOfService,
    // add additional docTypeIDs here
  };

  const parseFunction = DocComponents[docTypeID];

  if (!parseFunction) {
    return docData;
    // throw new Error(`Unsupported docTypeID: ${docTypeID}`);
  }

  return parseFunction(docData);
}
