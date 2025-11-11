import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import { abcObject } from "../data/formData";
import {
  getAllPatientGoals,
  getAllPatientObjectives,
  getAllPatientInterventions,
  addNewGoal,
  updateGoal,
  addNewObjective,
  updateObjective,
  addNewIntervention,
  updateIntervention,
  getTreatmentPlan,
  updateTreatmentPlan,
  removeGoal,
  removeObjective,
  removeIntervention,
} from "../features/treatmentPlan/services/api";
import {
  addNewClient,
  addNewContact,
  getAllClients,
  getAllPatientContactsWithType,
  getClient,
  updateClient,
  updateContact,
} from "../features/enrollment/services/api";
import {
  addNewListItem,
  getGroupListValues,
  getGroupNameValues,
  getPharmacyList,
  getPhysicianList,
  updateListItem,
} from "../services/api";
import {
  addNewBillingTx,
  getAllPatientBillingTx,
  addNewDocument,
  updateDocument,
  getAllPatientDocuments,
} from "../features/documents/services/api";
import { getAllDXCodes } from "../features/diagnosis/services/api";
import {
  getAllServiceCodes,
} from "../features/services/services/api";
import {
  getAllPatientProgNotes,
  getAllProgNotes,
} from "../features/progressNotes/services/api";
import { capitalize } from "../data/helpers";
import {
  addNewAuthorization,
  getAuthorizations,
  updateAuthorization,
} from "../features/authorizations/services/api";
import { mockData } from "../mock/mockData";

const ClientContext = createContext();

const apiUrl = process.env.REACT_APP_API_URL;
const useMockApi =
  process.env.REACT_APP_USE_MOCK === "true" || !apiUrl || apiUrl.length === 0;

export function useClient() {
  return useContext(ClientContext);
}

const normalizeRecord = (record = {}) => {
  return Object.entries(record).reduce((acc, [key, value]) => {
    if (typeof key === "string") {
      acc[key.toLowerCase()] = value;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
};

const normalizeCollection = (collection = []) =>
  collection.map((item) => normalizeRecord(item));

const buildMockClients = (patients = []) =>
  patients
    .filter((patient) => patient && patient.statusid === 0)
    .map((patient) => ({
      name:
        capitalize(patient.plastname?.trim() || "") +
        ", " +
        capitalize(patient.pfirstname?.trim() || ""),
      statusid: patient.statusid,
      patientid: patient.patientid,
    }));

const buildMockSortedClients = (clients = []) => {
  const sorted = Object.keys(abcObject).reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {});
  clients.forEach((client) => {
    const firstLetter = client.name?.charAt(0)?.toLowerCase();
    if (firstLetter && sorted[firstLetter]) {
      sorted[firstLetter] = [...sorted[firstLetter], client].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
  });
  return sorted;
};

const buildMockFormData = (dbState) => {
  const form = {};
  form.Pharmacy = normalizeCollection(
    dbState.contacts.filter((contact) => contact.contacttypeid === 23)
  );
  form.Physician = normalizeCollection(
    dbState.contacts.filter((contact) => contact.contacttypeid === 24)
  );
  dbState.groupNames
    .filter((group) => group.isactive)
    .forEach((group) => {
      const lists = dbState.groupLists.filter(
        (list) => list.groupid === group.groupnameid && list.isactive
      );
      form[group.groupname] = normalizeCollection(lists);
    });
  form.Services = normalizeCollection(dbState.services);
  return form;
};

const getContactTypeKey = (type) => {
  switch (type) {
    case 21:
      return "patient";
    case 22:
      return "emergency";
    case 23:
      return "pharmacy";
    case 24:
      return "physician";
    default:
      return `type_${type}`;
  }
};

const generateId = (collection = [], key) => {
  const ids = collection
    .map((item) => Number(item[key]) || 0)
    .filter((value) => !Number.isNaN(value));
  return ids.length ? Math.max(...ids) + 1 : 1;
};

function MockClientProvider(props) {
  const [db, setDb] = useState(() => JSON.parse(JSON.stringify(mockData)));
  const [urlPath] = useState();
  const [formData, setFormData] = useState({});
  const [clientList, setClientlist] = useState([]);
  const [sortedClients, setSortedClients] = useState({ ...abcObject });
  const [activeClient, setActiveClient] = useState({});
  const [activeContacts, setActiveContacts] = useState({});
  const [contactList] = useState([]);
  const [activeTreatmentPlan, setActiveTreatmentPlan] = useState({});
  const [activeProgNotes, setActiveProgNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [activeBillingTx, setActiveBillingTx] = useState([]);
  const [activeDocuments, setActiveDocuments] = useState([]);
  const [activeAuthorizations, setActiveAuthorizations] = useState([]);
  const [dxCodes, setDxCodes] = useState([]);
  const [serviceCodes, setServiceCodes] = useState([]);
  const [serviceGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState({
    status: "",
    message: "",
    show: false,
  });

  useEffect(() => {
    const clients = buildMockClients(db.patients);
    setClientlist(clients);
    setSortedClients(buildMockSortedClients(clients));
    setFormData(buildMockFormData(db));
    setDxCodes(normalizeCollection(db.diagnoses));
    setServiceCodes(normalizeCollection(db.services));
    setAllNotes(normalizeCollection(db.progressNotes));
  }, [db]);

  const getClientList = async () => {
    setLoading(true);
    const clients = buildMockClients(db.patients);
    setClientlist(clients);
    setSortedClients(buildMockSortedClients(clients));
    setLoading(false);
    return clients;
  };

  const getClient = async (patientid) => {
    const patient = db.patients.find(
      (item) => String(item.patientid) === String(patientid)
    );
    return patient ? normalizeRecord(patient) : {};
  };

  const selectClient = async (patientid) => {
    const patient = db.patients.find(
      (item) => String(item.patientid) === String(patientid)
    );
    if (patient) {
      const normalized = normalizeRecord(patient);
      setActiveClient(normalized);
      return normalized;
    }
    return null;
  };

  const resetClient = async (patientid) => {
    if (!patientid) return;
    await selectClient(patientid);
    await Promise.all(
      [21, 22, 23, 24].map((type) => getContactList(patientid, type))
    );
  };

  const addActiveClient = async (client) => {
    const payload = Array.isArray(client) ? { ...client[0] } : { ...client };
    const newId = generateId(db.patients, "patientid");
    const newPatient = {
      patientid: newId,
      pfirstname: payload.pfirstname || payload.firstname || "New",
      plastname: payload.plastname || payload.lastname || "Client",
      statusid: payload.statusid ?? 0,
      dob: payload.dob || "",
      gender: payload.gender || "",
      address: payload.address || "",
      phone: payload.phone || "",
      email: payload.email || "",
      servicecodes: payload.servicecodes || "",
      dxcodes: payload.dxcodes || "",
    };
    setDb((prev) => ({
      ...prev,
      patients: [...prev.patients, newPatient],
    }));
    return [normalizeRecord(newPatient)];
  };

  const updateActiveClient = async (client, patientid) => {
    const payload = Array.isArray(client) ? { ...client[0] } : { ...client };
    let updatedClientRecord = null;
    setDb((prev) => {
      const nextPatients = prev.patients.map((p) => {
        if (String(p.patientid) === String(patientid)) {
          updatedClientRecord = { ...p, ...payload };
          return updatedClientRecord;
        }
        return p;
      });
      return { ...prev, patients: nextPatients };
    });
    if (updatedClientRecord) {
      const normalized = normalizeRecord(updatedClientRecord);
      setActiveClient(normalized);
      return [normalized];
    }
    return [];
  };

  const getContactList = async (patientid, type) => {
    const contacts = normalizeCollection(
      db.contacts.filter(
        (contact) =>
          String(contact.patientid) === String(patientid) &&
          contact.contacttypeid === type
      )
    );
    const contactTypeKey = getContactTypeKey(type);
    setActiveContacts((prev) => ({
      ...prev,
      [contactTypeKey]: contacts,
    }));
    return contacts;
  };

  const addClientContact = async (contact) => {
    const payload = Array.isArray(contact) ? { ...contact[0] } : { ...contact };
    const newId = generateId(db.contacts, "contactid");
    const newContact = {
      contactid: newId,
      ...payload,
    };
    setDb((prev) => ({
      ...prev,
      contacts: [...prev.contacts, newContact],
    }));
    await getContactList(newContact.patientid, newContact.contacttypeid);
    return newContact.contactid;
  };

  const updateClientContact = async (contact, contactid) => {
    const payload = Array.isArray(contact) ? { ...contact[0] } : { ...contact };
    setDb((prev) => {
      const nextContacts = prev.contacts.map((item) =>
        String(item.contactid) === String(contactid)
          ? { ...item, ...payload }
          : item
      );
      return { ...prev, contacts: nextContacts };
    });
    await getContactList(payload.patientid, payload.contacttypeid);
    return [{ contactid }];
  };

  const getFormFields = async () => {
    const fields = buildMockFormData(db);
    setFormData(fields);
    return fields;
  };

  const addGroupItem = async (groupItemObject) => {
    const payload = Array.isArray(groupItemObject)
      ? { ...groupItemObject[0] }
      : { ...groupItemObject };
    const newId = generateId(db.groupLists, "grouplistid");
    const newItem = { ...payload, grouplistid: newId, isactive: 1 };
    setDb((prev) => ({
      ...prev,
      groupLists: [...prev.groupLists, newItem],
    }));
    return newItem;
  };

  const updateGroupItem = async (group) => {
    const payload = Array.isArray(group) ? { ...group[0] } : { ...group };
    setDb((prev) => {
      const nextGroupLists = prev.groupLists.map((item) =>
        String(item.grouplistid) === String(payload.grouplistid)
          ? { ...item, ...payload }
          : item
      );
      return { ...prev, groupLists: nextGroupLists };
    });
    return payload;
  };

  const addClientBillingTx = async (records) => {
    if (!Array.isArray(records)) return [];
    let patientTransactions = [];
    setDb((prev) => {
      const nextTransactions = [...prev.billingTransactions];
      records.forEach(() => {
        const newId = generateId(nextTransactions, "billingid");
        nextTransactions.push({
          billingid: newId,
          patientid: activeClient.patientid,
          doctypeid: 0,
          lastuserid: 101,
          lastupdate: new Date().toISOString(),
        });
      });
      patientTransactions = nextTransactions.filter(
        (tx) => String(tx.patientid) === String(activeClient.patientid)
      );
      return { ...prev, billingTransactions: nextTransactions };
    });
    const normalized = normalizeCollection(patientTransactions);
    setActiveBillingTx(normalized);
    return normalized;
  };

  const getClientBillingTx = async () => {
    const transactions = db.billingTransactions.filter(
      (tx) => String(tx.patientid) === String(activeClient.patientid)
    );
    const normalized = normalizeCollection(transactions);
    setActiveBillingTx(normalized);
    return normalized;
  };

  const getClientDocuments = async () => {
    const docs = db.documents.filter(
      (doc) => String(doc.patientid) === String(activeClient.patientid)
    );
    const normalized = normalizeCollection(docs);
    setActiveDocuments(normalized);
    return normalized;
  };

  const getClientTreatmentPlan = async () => {
    if (!activeClient.patientid) return;
    const patientId = activeClient.patientid;
    const treatmentPlan = db.treatmentPlans.find(
      (plan) => String(plan.patientid) === String(patientId)
    );
    const goals = db.goals.filter(
      (goal) =>
        String(goal.patientid) === String(patientId) && goal.isdeleted === 0
    );
    const objectives = db.objectives.filter(
      (objective) =>
        objective.isdeleted === 0 &&
        goals.some((goal) => goal.goalid === objective.goalid)
    );
    const interventions = db.interventions.filter(
      (intervention) =>
        intervention.isdeleted === 0 &&
        String(intervention.patientid) === String(patientId)
    );
    const data = {
      tPlan: treatmentPlan ? normalizeCollection([treatmentPlan])[0] : null,
      goals: normalizeCollection(goals),
      objectives: normalizeCollection(objectives),
      interventions: normalizeCollection(interventions),
    };
    setActiveTreatmentPlan(data);
    return data;
  };

  const updateClientTreatmentPlan = async (tPlan) => {
    const payload = Array.isArray(tPlan) ? { ...tPlan[0] } : { ...tPlan };
    setDb((prev) => {
      const nextPlans = prev.treatmentPlans.map((plan) =>
        String(plan.recid) === String(payload.recid)
          ? { ...plan, ...payload }
          : plan
      );
      return { ...prev, treatmentPlans: nextPlans };
    });
    await getClientTreatmentPlan();
  };

  const addClientTreatmentPlan = async (tPlan) => {
    const payload = Array.isArray(tPlan) ? { ...tPlan[0] } : { ...tPlan };
    const newRecid = generateId(db.treatmentPlans, "recid");
    const newPlan = {
      ...payload,
      recid: newRecid,
      patientid: activeClient.patientid,
    };
    setDb((prev) => ({
      ...prev,
      treatmentPlans: [...prev.treatmentPlans, newPlan],
    }));
    await getClientTreatmentPlan();
    return newPlan;
  };

  const addClientGoal = async (newGoal) => {
    const payload = Array.isArray(newGoal) ? { ...newGoal[0] } : { ...newGoal };
    const newId = generateId(db.goals, "goalid");
    const goalRecord = {
      ...payload,
      goalid: newId,
      patientid: activeClient.patientid,
      isdeleted: 0,
    };
    setDb((prev) => ({
      ...prev,
      goals: [...prev.goals, goalRecord],
    }));
    await getClientTreatmentPlan();
    return goalRecord;
  };

  const updateClientGoal = async (updatedGoal) => {
    const payload = Array.isArray(updatedGoal)
      ? { ...updatedGoal[0] }
      : { ...updatedGoal };
    setDb((prev) => {
      const nextGoals = prev.goals.map((goal) =>
        String(goal.goalid) === String(payload.goalid)
          ? { ...goal, ...payload }
          : goal
      );
      return { ...prev, goals: nextGoals };
    });
    await getClientTreatmentPlan();
    return payload;
  };

  const removeClientGoal = async (goalToRemove) => {
    const payload = Array.isArray(goalToRemove)
      ? { ...goalToRemove[0] }
      : { ...goalToRemove };
    setDb((prev) => {
      const nextGoals = prev.goals.map((goal) =>
        String(goal.goalid) === String(payload.goalid)
          ? { ...goal, isdeleted: 1 }
          : goal
      );
      return { ...prev, goals: nextGoals };
    });
    await getClientTreatmentPlan();
    return payload;
  };

  const addClientObjective = async (newObjective) => {
    const payload = Array.isArray(newObjective)
      ? { ...newObjective[0] }
      : { ...newObjective };
    const newId = generateId(db.objectives, "objectiveid");
    const record = {
      ...payload,
      objectiveid: newId,
      isdeleted: 0,
    };
    setDb((prev) => ({
      ...prev,
      objectives: [...prev.objectives, record],
    }));
    await getClientTreatmentPlan();
    return record;
  };

  const updateClientObjective = async (updatedObjective) => {
    const payload = Array.isArray(updatedObjective)
      ? { ...updatedObjective[0] }
      : { ...updatedObjective };
    setDb((prev) => {
      const nextObjectives = prev.objectives.map((objective) =>
        String(objective.objectiveid) === String(payload.objectiveid)
          ? { ...objective, ...payload }
          : objective
      );
      return { ...prev, objectives: nextObjectives };
    });
    await getClientTreatmentPlan();
    return payload;
  };

  const removeClientObjective = async (objectiveToRemove) => {
    const payload = Array.isArray(objectiveToRemove)
      ? { ...objectiveToRemove[0] }
      : { ...objectiveToRemove };
    setDb((prev) => {
      const nextObjectives = prev.objectives.map((objective) =>
        String(objective.objectiveid) === String(payload.objectiveid)
          ? { ...objective, isdeleted: 1 }
          : objective
      );
      return { ...prev, objectives: nextObjectives };
    });
    await getClientTreatmentPlan();
    return payload;
  };

  const addClientIntervention = async (newIntervention) => {
    const payload = Array.isArray(newIntervention)
      ? { ...newIntervention[0] }
      : { ...newIntervention };
    const newId = generateId(db.interventions, "interventionid");
    const record = {
      ...payload,
      interventionid: newId,
      patientid: activeClient.patientid,
      isdeleted: 0,
    };
    setDb((prev) => ({
      ...prev,
      interventions: [...prev.interventions, record],
    }));
    await getClientTreatmentPlan();
    return record;
  };

  const updateClientIntervention = async (updatedIntervention) => {
    const payload = Array.isArray(updatedIntervention)
      ? { ...updatedIntervention[0] }
      : { ...updatedIntervention };
    setDb((prev) => {
      const nextInterventions = prev.interventions.map((intervention) =>
        String(intervention.interventionid) === String(payload.interventionid)
          ? { ...intervention, ...payload }
          : intervention
      );
      return { ...prev, interventions: nextInterventions };
    });
    await getClientTreatmentPlan();
    return payload;
  };

  const removeClientIntervention = async (interventionToRemove) => {
    const payload = Array.isArray(interventionToRemove)
      ? { ...interventionToRemove[0] }
      : { ...interventionToRemove };
    setDb((prev) => {
      const nextInterventions = prev.interventions.map((intervention) =>
        String(intervention.interventionid) === String(payload.interventionid)
          ? { ...intervention, isdeleted: 1 }
          : intervention
      );
      return { ...prev, interventions: nextInterventions };
    });
    await getClientTreatmentPlan();
    return payload;
  };

  const getDXCodes = async () => {
    const codes = normalizeCollection(db.diagnoses);
    setDxCodes(codes);
    return codes;
  };

  const getServiceCodes = async () => {
    const codes = normalizeCollection(db.services);
    setServiceCodes(codes);
    return codes;
  };

  const getActiveServices = () => {
    if (activeClient.servicecodes && formData["Services"]) {
      const clientCodes = activeClient.servicecodes
        .split(",")
        .map((code) => code.trim());
      const filtered = formData["Services"].filter((service) =>
        clientCodes.includes(String(service.grouplistid || service.recid))
      );
      return filtered;
    }
    return [];
  };

  const getActiveDXCodes = () => {
    if (activeClient.dxcodes && dxCodes.length > 0) {
      const clientCodes = activeClient.dxcodes
        .split(",")
        .map((code) => code.trim());
      return dxCodes.filter((dx) => clientCodes.includes(dx.icd10 || dx.code));
    }
    return [];
  };

  const addClientProgNote = async (progNote) => {
    const payload = Array.isArray(progNote) ? { ...progNote[0] } : { ...progNote };
    const newRecid = generateId(db.progressNotes, "recid");
    const record = {
      ...payload,
      recid: newRecid,
      patientid: activeClient.patientid,
      createdate: new Date().toISOString().slice(0, 10),
    };
    setDb((prev) => ({
      ...prev,
      progressNotes: [...prev.progressNotes, record],
    }));
    await getClientProgNotes();
    await getAllNotes();
    return record;
  };

  const updateClientProgNote = async (updatedProgNote) => {
    const payload = Array.isArray(updatedProgNote)
      ? { ...updatedProgNote[0] }
      : { ...updatedProgNote };
    setDb((prev) => {
      const nextNotes = prev.progressNotes.map((note) =>
        String(note.recid) === String(payload.recid)
          ? { ...note, ...payload }
          : note
      );
      return { ...prev, progressNotes: nextNotes };
    });
    await getClientProgNotes();
    await getAllNotes();
  };

  const getClientProgNotes = async () => {
    const notes = db.progressNotes.filter(
      (note) => String(note.patientid) === String(activeClient.patientid)
    );
    const normalized = normalizeCollection(notes);
    setActiveProgNotes(normalized);
    return normalized;
  };

  const getAllNotes = async () => {
    const notes = normalizeCollection(db.progressNotes);
    setAllNotes(notes);
    return notes;
  };

  const addClientAuthorization = async (authorization) => {
    const payload = Array.isArray(authorization)
      ? { ...authorization[0] }
      : { ...authorization };
    const newId = generateId(db.authorizations, "authrecid");
    const record = {
      ...payload,
      authrecid: newId,
      patientid: activeClient.patientid,
    };
    setDb((prev) => ({
      ...prev,
      authorizations: [...prev.authorizations, record],
    }));
    await getClientAuthorizations();
    return newId;
  };

  const updateClientAuthorization = async (authrecid, updatedAuthorization) => {
    const payload = Array.isArray(updatedAuthorization)
      ? { ...updatedAuthorization[0] }
      : { ...updatedAuthorization };
    setDb((prev) => {
      const nextAuthorizations = prev.authorizations.map((auth) =>
        String(auth.authrecid) === String(authrecid)
          ? { ...auth, ...payload }
          : auth
      );
      return { ...prev, authorizations: nextAuthorizations };
    });
    await getClientAuthorizations();
    return payload;
  };

  const getClientAuthorizations = async () => {
    const authorizations = db.authorizations.filter(
      (auth) => String(auth.patientid) === String(activeClient.patientid)
    );
    const normalized = normalizeCollection(authorizations);
    setActiveAuthorizations(normalized);
    return normalized;
  };

  const sendPDFtoAPI = async () => {
    return Promise.resolve({
      status: "mock",
      message: "PDF upload is disabled in mock mode.",
    });
  };

  useEffect(() => {
    if (activeClient.patientid) {
      getClientBillingTx();
      getClientDocuments();
      getClientTreatmentPlan();
      getClientProgNotes();
      getClientAuthorizations();
      [21, 22, 23, 24].forEach((type) =>
        getContactList(activeClient.patientid, type)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeClient.patientid]);

  return (
    <ClientContext.Provider
      value={{
        urlPath,
        formData,
        getFormFields,
        updateGroupItem,
        addGroupItem,
        activeClient,
        clientList,
        sortedClients,
        getClientList,
        getClient,
        selectClient,
        resetClient,
        addActiveClient,
        updateActiveClient,
        activeContacts,
        contactList,
        getContactList,
        addClientContact,
        updateClientContact,
        activeBillingTx,
        addClientBillingTx,
        activeTreatmentPlan,
        addClientTreatmentPlan,
        updateClientTreatmentPlan,
        addClientGoal,
        updateClientGoal,
        removeClientGoal,
        addClientObjective,
        updateClientObjective,
        removeClientObjective,
        addClientIntervention,
        updateClientIntervention,
        removeClientIntervention,
        activeAuthorizations,
        addClientAuthorization,
        updateClientAuthorization,
        dxCodes,
        getActiveDXCodes,
        serviceCodes,
        getActiveServices,
        serviceGroups,
        activeProgNotes,
        allNotes,
        addClientProgNote,
        updateClientProgNote,
        getClientDocuments,
        activeDocuments,
        loading,
        setLoading,
        toggleUpdate,
        setToggleUpdate,
        sendPDFtoAPI,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
}

export function ClientProvider(props) {
  if (useMockApi) {
    return <MockClientProvider {...props} />;
  }

  const [urlPath] = useState();
  const [clientList, setClientlist] = useState([]);
  const [contactList] = useState([]);
  const [activeClient, setActiveClient] = useState({});
  const [activeContacts, setActiveContacts] = useState({});
  const [activeTreatmentPlan, setActiveTreatmentPlan] = useState({});
  const [activeProgNotes, setActiveProgNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [activeBillingTx, setActiveBillingTx] = useState([]);
  const [activeDocuments, setActiveDocuments] = useState([]);
  const [activeAuthorizations, setActiveAuthorizations] = useState([]);
  const [formData, setFormData] = useState({});
  const [sortedClients, setSortedClients] = useState({ ...abcObject });
  const [loading, setLoading] = useState(false);
  const [dxCodes, setDxCodes] = useState([]);
      const [serviceGroups] = useState([]);
  const [serviceCodes, setServiceCodes] = useState([]);
  const [toggleUpdate, setToggleUpdate] = useState({
    status: "",
    message: "",
    show: false,
  });

  /// Print TESTING
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const sendPDFtoAPI = async (recid, pdfBlob, user, pinNumber) => {
    const apiUrl = `https://www.ivronlogs.icu/rsv1/generic_api/doc/${recid}`;
    // const apiUrl = `${rptUrl}generic_api/doc/${recid}`;
    const blobToBase64String = await blobToBase64(pdfBlob);
    const data = {
      b64: blobToBase64String,
      signdoc: pinNumber ? "true" : "false",
      userid: user.userid,
      pin: pinNumber ? pinNumber : 0,
    };
    const formData = new FormData();
    formData.append("PDFBlob", pdfBlob);

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify([data]),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      console.log("PDF Blob sent successfully");
      return response.json();
    }
  };
  /// MOVE TO SERVICES API ///
  const addGroupItem = async (groupItemObject) => {
    console.log(groupItemObject);
    return await addNewListItem(groupItemObject).then((data) => {
      getFormFields();
      return data;
    });
  };
  const updateGroupItem = async (group) => {
    return await updateListItem(group).then((data) => {
      getFormFields();
      return data;
    });
  };
  const getFormFields = async () => {
    let groupObject = {};
    const groupNameValues = await getGroupNameValues();
    const groupListValues = await getGroupListValues();
    const pharmacyList = await getPharmacyList();
    const physicianList = await getPhysicianList();
    groupObject.Pharmacy = pharmacyList;
    groupObject.Physician = physicianList;

    for (const group of groupNameValues) {
      const groupList = groupListValues.filter((listItem) => {
        return group.groupnameid === listItem.groupid;
      });
      groupObject[`${group.groupname}`] = groupList;
    }
    setFormData(groupObject);
  };

  const sortClients = (length, emptyObject) => {
    for (let i = length - 100; i < length; i++) {
      if (clientList[i]) {
        let nameArray = clientList[i].name.split(",");
        let lastName = [...nameArray[0]];
        let abcObjectKeys = Object.keys(sortedClients);
        for (const key of abcObjectKeys) {
          if (
            lastName.length > 0 &&
            lastName[0].toLowerCase() === key.toLowerCase()
          ) {
            emptyObject[key] = [...emptyObject[key], clientList[i]].sort();
          }
        }
      }
    }
  };

  /// CLIENT FUNCTIONS ///
  const selectClient = async (patientid) => {
    await getClient(patientid)
      .then((data) => {
        setActiveClient(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const resetClient = async (patientid) => {
    for (let i = 20; i < 23; i++) {
      await selectClient(patientid, i);
    }
    for (let i = 21; i < 25; i++) {
      await getContactList(patientid, i);
    }
    return;
  };
  const getClientList = async () => {
    setLoading(true);
    await getAllClients()
      .then((data) => {
        let clientArray = [];
        data.forEach((client) => {
          return client.patientid
            ? clientArray.push({
                name:
                  capitalize(client.plastname.trim()) +
                  ", " +
                  capitalize(client.pfirstname.trim()),
                statusid: client.statusid,
                patientid: client.patientid,
              })
            : null;
        });

        console.log("retrieved client list succesfully!");
        setClientlist(clientArray);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  const updateActiveClient = async (client, patientid) => {
    setLoading(true);
    await updateClient(client, patientid)
      .then((data) => {
        setLoading(false);
        return data[0];
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        throw new Error(error);
      });
  };
  const addActiveClient = async (client) => {
    try {
      const newclient = await addNewClient(client);
      client[0].patientid = newclient.patientid;
      const updatedClient = await updateClient(client, newclient.patientid);
      updatedClient[0].patientid = newclient.patientid;
      console.log(updatedClient);
      await getClientList();
      return updatedClient;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  /// CONTACT FUNCTIONS ///
  const getContactList = async (patientid, type) => {
    await getAllPatientContactsWithType(patientid, type)
      .then((data) => {
        let contactType = "";
        switch (type) {
          case 21:
            contactType = "patient";
            break;
          case 22:
            contactType = "emergency";
            break;
          case 23:
            contactType = "pharmacy";
            break;
          case 24:
            contactType = "physician";
            break;
          default:
            break;
        }
        setActiveContacts((prevState) => {
          return { ...prevState, [contactType]: data };
        });
      })
      .catch((e) => {
        console.log(e);
      })
      .then();
  };
  const addClientContact = async (contact) => {
    return await addNewContact(contact)
      .then((data) => {
        getFormFields();
        return data.contactid;
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };
  const updateClientContact = async (contact, contactid) => {
    return await updateContact(contact, contactid)
      .then((data) => {
        getFormFields();
        return data[0].contactid;
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };

  /// REQUIREMENTS FUNCTIONS ///
  const addClientBillingTx = async (data) => {
    let newBillingTxs = [];
    await data
      .forEach((requirement, index) => {
        let newBillingTx = [
          {
            billingid: 0,
            patientid: activeClient.patientid,
            doctypeid: requirement.doctypeid,
            lastuserid: 101,
          },
        ];

        addNewBillingTx(newBillingTx).then((data) => {
          newBillingTxs.push(data[0]);
        });
      })
      .then(() => {
        getClientBillingTx();
      });
  };
  const getClientBillingTx = async () => {
    await getAllPatientBillingTx(activeClient.patientid).then((data) => {
      setActiveBillingTx(data);
    });
  };
  const getClientDocuments = async () => {
    await getAllPatientDocuments(activeClient.patientid).then((data) => {
      setActiveDocuments(data);
    });
  };

  /// TREATMENT PLAN FUNCTIONS ///
  const getClientTreatmentPlan = async () => {
    if (activeClient.patientid) {
      let treatmentPlan = {};
      treatmentPlan.tPlan = await getTreatmentPlan(activeClient.patientid);
      treatmentPlan.goals = await getAllPatientGoals(activeClient.patientid);
      treatmentPlan.objectives = await getAllPatientObjectives(
        activeClient.patientid
      );
      treatmentPlan.interventions = await getAllPatientInterventions(
        activeClient.patientid
      );
      setActiveTreatmentPlan(treatmentPlan);
    }
  };
  const updateClientTreatmentPlan = async (tPlan) => {
    await updateTreatmentPlan(tPlan).then(() => getClientTreatmentPlan());
  };
  const addClientTreatmentPlan = async (tPlan) => {
    console.log(tPlan);
    await addNewDocument().then(async (newdoc) => {
      console.log(newdoc);
      tPlan[0].recid = newdoc.recid;
      console.log(tPlan);
      await updateClientTreatmentPlan(tPlan).then(() =>
        getClientTreatmentPlan()
      );
    });
  };
  const addClientGoal = async (newGoal) => {
    return await addNewGoal(newGoal).then((data) => {
      getClientTreatmentPlan();
      return data.goalid;
    });
  };
  const updateClientGoal = async (updatedGoal) => {
    return await updateGoal(updatedGoal).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const removeClientGoal = async (goalToRemove, user) => {
    return await removeGoal(goalToRemove, user).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const addClientObjective = async (newGoal) => {
    return await addNewObjective(newGoal).then((data) => {
      getClientTreatmentPlan();
      return data.objectiveid;
    });
  };
  const updateClientObjective = async (updatedGoal) => {
    return await updateObjective(updatedGoal).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const removeClientObjective = async (objectiveToRemove, user) => {
    return await removeObjective(objectiveToRemove, user).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };

  const addClientIntervention = async (newIntervention) => {
    return await addNewIntervention(newIntervention).then((data) => {
      getClientTreatmentPlan();
      return data.interventionid;
    });
  };
  const updateClientIntervention = async (updatedIntervention) => {
    return await updateIntervention(updatedIntervention).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const removeClientIntervention = async (intToRemove, user) => {
    return await removeIntervention(intToRemove, user).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };

  const getDXCodes = async () => {
    let data = await getAllDXCodes();
    setDxCodes(data);
  };
  const getServiceCodes = async () => {
    let data = await getAllServiceCodes();
    setServiceCodes(data);
  };
  
  const getActiveServices = () => {
    if (activeClient.servicecodes && activeClient.servicecodes.length > 0) {
      const clientCodes = activeClient.servicecodes.split(",");
      const filteredArray = formData["Services"].filter((service) => {
        return clientCodes.includes(service.grouplistid.toString());
      });
      return filteredArray;
    }
    return [];
  };
  const getActiveDXCodes = () => {
    if (activeClient.dxcodes && activeClient.dxcodes.length > 0) {
      const clientCodes = activeClient.dxcodes.split(",");
      const filteredArray = dxCodes.filter((dx) =>
        clientCodes.includes(dx.code)
      );
      return filteredArray;
    }
    return [];
  };
  const addClientProgNote = async (progNote) => {
    await addNewDocument().then(async (newdoc) => {
      progNote[0].recid = newdoc.recid;
      await updateClientProgNote(progNote).then(() => {
        getClientProgNotes();
        getAllNotes();
      });
    });
  };
  const updateClientProgNote = async (updatedProgNote) => {
    console.log(updatedProgNote);
    await updateDocument(updatedProgNote).then(() => {
      getClientProgNotes();
      getAllNotes();
    });
  };
  const getClientProgNotes = async () => {
    let data = await getAllPatientProgNotes(activeClient.patientid);
    setActiveProgNotes(data);
  };
  const getAllNotes = async () => {
    let data = await getAllProgNotes();
    setAllNotes(data);
  };

  const addClientAuthorization = async (authorization) => {
    console.log(authorization);
    return await addNewAuthorization(authorization).then((authrecid) => {
      getClientAuthorizations();
      return authrecid;
    });
  };
  const updateClientAuthorization = async (authrecid, updatedAuthorization) => {
    return await updateAuthorization(authrecid, updatedAuthorization).then(
      (updatedData) => {
        getClientAuthorizations();
        return updatedData;
      }
    );
  };
  const getClientAuthorizations = async () => {
    let data = await getAuthorizations(activeClient.patientid);
    setActiveAuthorizations(data);
  };

  useEffect(() => {
    // const getApiUrl = async () => {
    //   try {
    //     const response = await fetch(
    //       "http://www.ivronlogs.club:8080/generic_api/param"
    //     );
    //     const data = await response.json();
    //     console.log(data)
    //     return data;
    //   } catch (error) {
    //     console.error("Failed to fetch API URL:", error);
    //   }
    // };
    // getApiUrl().then(setUrlPath);

    if (!clientList.length > 0) getClientList();
    if (!formData.length > 0) getFormFields();
    if (!dxCodes.length > 0) getDXCodes();
    if (!serviceCodes.length > 0) getServiceCodes();
    if (!allNotes.length > 0) getAllNotes();
    // if (!serviceGroups.length > 0) getServiceGroups();
    // eslint-disable-next-line
  }, []);
  // useEffect(() => {
  //   console.log(urlPath);
  // }, [urlPath]);
  useEffect(() => {
    if (clientList.length > 0) {
      let abcObjectCopy = { ...abcObject };
      console.log("start sorting");
      for (let i = 100; i <= clientList.length; i += 100) {
        sortClients(i, abcObjectCopy);
      }
      const leftovers = clientList.length - (clientList.length % 100) + 100;
      sortClients(leftovers, abcObjectCopy);
      setSortedClients(abcObjectCopy);
    }
    // eslint-disable-next-line
  }, [clientList]);

  useEffect(() => {
    // get document ids
    if (activeClient.patientid) {
      getClientBillingTx();
      getClientDocuments();
      getClientTreatmentPlan();
      getClientProgNotes();
      getClientAuthorizations();
    }
    // eslint-disable-next-line
  }, [activeClient]);

  return (
    <ClientContext.Provider
      value={{
        urlPath,
        formData,
        getFormFields,
        updateGroupItem,
        addGroupItem,
        activeClient,
        clientList,
        sortedClients,
        getClientList,
        getClient,
        selectClient,
        resetClient,
        addActiveClient,
        updateActiveClient,
        activeContacts,
        contactList,
        getContactList,
        addClientContact,
        updateClientContact,
        activeBillingTx,
        addClientBillingTx,
        activeTreatmentPlan,
        addClientTreatmentPlan,
        updateClientTreatmentPlan,
        addClientGoal,
        updateClientGoal,
        removeClientGoal,
        addClientObjective,
        updateClientObjective,
        removeClientObjective,
        addClientIntervention,
        updateClientIntervention,
        removeClientIntervention,
        activeAuthorizations,
        addClientAuthorization,
        updateClientAuthorization,
        dxCodes,
        getActiveDXCodes,
        serviceCodes,
        getActiveServices,
        serviceGroups,
        activeProgNotes,
        allNotes,
        addClientProgNote,
        updateClientProgNote,
        getClientDocuments,
        activeDocuments,
        loading,
        setLoading,
        toggleUpdate,
        setToggleUpdate,
        sendPDFtoAPI,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
}
