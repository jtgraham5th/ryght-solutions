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

const ClientContext = createContext();

export function useClient() {
  return useContext(ClientContext);
}

export function ClientProvider(props) {
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
  const [serviceGroups, setServiceGroups] = useState([]);
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
