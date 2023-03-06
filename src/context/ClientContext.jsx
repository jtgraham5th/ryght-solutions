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
} from "../features/requirements/services/api";
import { getAllDXCodes } from "../features/diagnosis/services/api";
import {
  getAllServiceCodes,
  getAllServiceGroups,
} from "../features/services/services/api";
import { getAllPatientProgNotes } from "../features/progressNotes/services/api";
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
  const [clientList, setClientlist] = useState([]);
  const [contactList] = useState([]);
  const [activeClient, setActiveClient] = useState({ 20: {}, 21: {}, 22: {} });
  const [activeContacts, setActiveContacts] = useState({});
  const [activeTreatmentPlan, setActiveTreatmentPlan] = useState({});
  const [activeProgNotes, setActiveProgNotes] = useState([]);
  const [activeBillingTx, setActiveBillingTx] = useState([]);
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

  /// MOVE TO SERVICES API ///
  const addGroupItem = async (groupItemObject) => {
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
      const groupList = groupListValues.filter(
        (listItem) => group.groupnameid === listItem.groupid
      );
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
          if (lastName[0] && lastName[0].toLowerCase() === key.toLowerCase()) {
            emptyObject[key] = [...emptyObject[key], clientList[i]].sort();
          }
        }
      }
    }
  };

  /// CLIENT FUNCTIONS ///
  const selectClient = async (patientid, tid) => {
    await getClient(patientid, tid)
      .then((data) => {
        setActiveClient((prevState) => ({
          ...prevState,
          [tid]: { ...data[0] },
        }));
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
  const getClientList = async (tid) => {
    setLoading(true);
    await getAllClients(tid)
      .then((data) => {
        let clientArray = [];
        data.forEach((client) => {
          return clientArray.push({
            name:
              capitalize(client.plastname) +
              ", " +
              capitalize(client.pfirstname),
            statusid: client.statusid,
            patientid: client.patientid,
          });
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
  const updateActiveClient = async (client, patientid, tid) => {
    console.log(client);
    setLoading(true);
    await updateClient(client, tid, patientid)
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
    return await addNewClient(client)
      .then((data) => {
        console.log(data);
        getClientList(20);
        return data;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
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
            patientid: activeClient[20].patientid,
            doctypeid: requirement.doctypeid,
            lastuserid: 101,
          },
        ];

        console.log(newBillingTx);
        addNewBillingTx(newBillingTx).then((data) => {
          console.log(data);
          newBillingTxs.push(data[0]);
        });
      })
      .then(() => {
        console.log(newBillingTxs);
        getClientBillingTx();
      });
  };
  const getClientBillingTx = async () => {
    await getAllPatientBillingTx(activeClient[20].patientid).then((data) => {
      console.log(data);
      setActiveBillingTx(data);
    });
  };

  /// TREATMENT PLAN FUNCTIONS ///
  const getClientTreatmentPlan = async () => {
    if (activeClient[20].patientid) {
      let treatmentPlan = {};
      treatmentPlan.tPlan = await getTreatmentPlan(activeClient[20].patientid);
      treatmentPlan.goals = await getAllPatientGoals(
        activeClient[20].patientid
      );
      treatmentPlan.objectives = await getAllPatientObjectives(
        activeClient[20].patientid
      );
      treatmentPlan.interventions = await getAllPatientInterventions(
        activeClient[20].patientid
      );
      setActiveTreatmentPlan(treatmentPlan);
    }
  };
  const updateClientTreatmentPlan = async (tPlan) => {
    await updateTreatmentPlan(tPlan).then(() => getClientTreatmentPlan());
  };
  const addClientTreatmentPlan = async (tPlan) => {
    await addNewDocument(tPlan).then(() => getClientTreatmentPlan());
  };
  const addClientGoal = async (newGoal) => {
    return await addNewGoal(newGoal).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const updateClientGoal = async (updatedGoal) => {
    return await updateGoal(updatedGoal).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const addClientObjective = async (newGoal) => {
    return await addNewObjective(newGoal).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const updateClientObjective = async (updatedGoal) => {
    return await updateObjective(updatedGoal).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const addClientIntervention = async (newIntervention) => {
    return await addNewIntervention(newIntervention).then((data) => {
      getClientTreatmentPlan();
      return data;
    });
  };
  const updateClientIntervention = async (updatedIntervention) => {
    return await updateIntervention(updatedIntervention).then((data) => {
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
  const getServiceGroups = async () => {
    let data = await getAllServiceGroups();
    setServiceGroups(data);
  };
  const getActiveServices = () => {
    if (
      activeClient[22].servicecodes &&
      activeClient[22].servicecodes.length > 0
    ) {
      const clientCodes = activeClient[22].servicecodes.split(",");
      const filteredArray = formData["Services"].filter((service) => {
        return clientCodes.includes(service.grouplistid.toString());
      });
      return filteredArray;
    }
    return [];
  };
  const getActiveDXCodes = () => {
    if (activeClient[22].dxcodes && activeClient[22].dxcodes.length > 0) {
      const clientCodes = activeClient[22].dxcodes.split(",");
      const filteredArray = dxCodes.filter((dx) =>
        clientCodes.includes(dx.code)
      );
      return filteredArray;
    }
    return [];
  };
  const addClientProgNote = async (progNote) => {
    await addNewDocument(progNote).then(() => getClientProgNotes());
  };
  const updateClientProgNote = async (updatedProgNote) => {
    await updateDocument(updatedProgNote).then(() => getClientProgNotes());
  };
  const getClientProgNotes = async () => {
    let data = await getAllPatientProgNotes(activeClient[20].patientid);
    setActiveProgNotes(data);
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
    let data = await getAuthorizations(activeClient[20].patientid);
    setActiveAuthorizations(data);
  };

  useEffect(() => {
    if (!clientList.length > 0) getClientList(20);
    if (!formData.length > 0) getFormFields();
    if (!dxCodes.length > 0) getDXCodes();
    if (!serviceCodes.length > 0) getServiceCodes();
    if (!serviceGroups.length > 0) getServiceGroups();

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    let abcObjectCopy = { ...abcObject };
    console.log("start sorting");
    for (let i = 100; i <= clientList.length; i += 100) {
      sortClients(i, abcObjectCopy);
    }
    const leftovers = clientList.length - (clientList.length % 100) + 100;
    sortClients(leftovers, abcObjectCopy);
    setSortedClients(abcObjectCopy);
    // eslint-disable-next-line
  }, [clientList]);

  useEffect(() => {
    // get document ids
    if (activeClient[20].patientid) {
      getClientBillingTx();
      getClientTreatmentPlan();
      getClientProgNotes();
      getClientAuthorizations();
    }
    // eslint-disable-next-line
  }, [activeClient]);

  return (
    <ClientContext.Provider
      value={{
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
        addClientObjective,
        updateClientObjective,
        addClientIntervention,
        updateClientIntervention,
        activeAuthorizations,
        addClientAuthorization,
        updateClientAuthorization,
        dxCodes,
        getActiveDXCodes,
        serviceCodes,
        getActiveServices,
        serviceGroups,
        activeProgNotes,
        addClientProgNote,
        updateClientProgNote,
        loading,
        setLoading,
        toggleUpdate,
        setToggleUpdate,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
}
