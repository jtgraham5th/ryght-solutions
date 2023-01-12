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
  getGroupListValues,
  getGroupNameValues,
  getPharmacyList,
  getPhysicianList,
} from "../services/api";
import {
  addNewRequirement,
  getAllPatientRequirements,
} from "../features/requirements/services/api";
import { getAllDXCodes } from "../features/diagnosis/services/api";
import {
  getAllServiceCodes,
  getAllServiceGroups,
} from "../features/services/services/api";
import {
  addNewProgNote,
  getAllPatientProgNotes,
  updateProgNote,
} from "../features/progressNotes/services/api";

const ClientContext = createContext();

export function useClient() {
  return useContext(ClientContext);
}

export function ClientProvider(props) {
  const [clientList, setClientlist] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [activeClient, setActiveClient] = useState({ 20: {}, 21: {}, 22: {} });
  const [activeContacts, setActiveContacts] = useState({});
  const [activeTreatmentPlan, setActiveTreatmentPlan] = useState({});
  const [activeProgNotes, setActiveProgNotes] = useState([]);
  const [clientRequirements, setClientRequirements] = useState([]);
  const [formData, setFormData] = useState({});
  const [sortedClients, setSortedClients] = useState({ ...abcObject });
  const [loading, setLoading] = useState(false);
  const [dxCodes, setDxCodes] = useState([]);
  const [serviceGroups, setServiceGroups] = useState([]);
  const [serviceCodes, setServiceCodes] = useState([]);
  /// MOVE TO SERVICES API ///
  const addGroupItem = async (groupItemObject) => {
    return await fetch("http://www.ivronlogs.icu:8080/rs/api/grouplist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupItemObject),
    })
      .then((response) => response.json())
      .then((data) => {
        getFormFields();
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteGroupItem = async (grouplistid) => {
    return fetch(
      `http://www.ivronlogs.icu:8080/rs/api/grouplist/${grouplistid}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        getFormFields();
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getFormFields = async () => {
    let groupObject = {};
    const groupNameValues = await getGroupNameValues();
    const groupListValues = await getGroupListValues();

    for (const group of groupNameValues) {
      const groupList = groupListValues.filter(
        (listItem) => group.groupnameid === listItem.groupid
      );
      groupObject[`${group.groupname}`] = groupList;
    }
    console.log(groupObject);
    setFormData(groupObject);
    getPharmacyList().then((data) =>
      setFormData((prevState) => ({ ...prevState, Pharmacy: data }))
    );
    getPhysicianList().then((data) =>
      setFormData((prevState) => ({ ...prevState, Physician: data }))
    );
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
        data.forEach((client) =>
          clientArray.push({
            name: client.plastname + ", " + client.pfirstname,
            statusid: client.statusid,
            patientid: client.patientid,
          })
        );
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
    await addNewClient
      .then((data) => {
        console.log(data);
        getClientList(20);
        return data[0].patientid;
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
    await addNewContact
      .then((data) => {
        return data[0].contactid;
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };
  const updateClientContact = async (contact, contactid) => {
    await updateContact
      .then((data) => {
        return data[0].contactid;
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };

  /// REQUIREMENTS FUNCTIONS ///
  const addClientRequirements = async (data) => {
    let newRequirements = [];
    await data
      .forEach((requirement, index) => {
        let newRequirement = [
          {
            billingid: 0,
            patientid: activeClient[20].patientid,
            doctypeid: requirement.doctypeid,
            lastuserid: 101,
          },
        ];
        console.log(newRequirement);
        addNewRequirement(newRequirement).then((data) => {
          console.log(data);
          newRequirements.push(data[0]);
        });
      })
      .then(() => {
        console.log(newRequirements);
        getClientRequirements();
      });
  };
  const getClientRequirements = async () => {
    await getAllPatientRequirements(activeClient[20].patientid).then((data) => {
      setClientRequirements(data);
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
  const addClientGoal = async (newGoal) => {
    await addNewGoal(newGoal).then(() => getClientTreatmentPlan());
  };
  const updateClientGoal = async (updatedGoal) => {
    await updateGoal(updatedGoal).then(() => getClientTreatmentPlan());
  };
  const addClientObjective = async (newGoal) => {
    await addNewObjective(newGoal).then(() => getClientTreatmentPlan());
  };
  const updateClientObjective = async (updatedGoal) => {
    await updateObjective(updatedGoal).then(() => getClientTreatmentPlan());
  };
  const addClientIntervention = async (newIntervention) => {
    await addNewIntervention(newIntervention).then(() =>
      getClientTreatmentPlan()
    );
  };
  const updateClientIntervention = async (updatedIntervention) => {
    await updateIntervention(updatedIntervention).then(() =>
      getClientTreatmentPlan()
    );
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
  const getActiveServiceCodes = () => {
    const clientCodes = activeClient[22].servicecodes.split(",");
    const filteredArray = serviceCodes.filter((service) =>
      clientCodes.includes(service.code)
    );
    return filteredArray;
  };
  const getActiveDXCodes = () => {
    const clientCodes = activeClient[22].dxcodes.split(",");
    const filteredArray = dxCodes.filter((dx) => clientCodes.includes(dx.code));
    return filteredArray;
  };
  const addClientProgNote = async (progNote) => {
    await addNewProgNote(progNote).then(() => getClientProgNotes());
  };
  const updateClientProgNote = async (updatedProgNote) => {
    await updateProgNote(updatedProgNote).then(() => getClientProgNotes());
  };
  const getClientProgNotes = async () => {
    let data = await getAllPatientProgNotes(activeClient[20].patientid);
    setActiveProgNotes(data);
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
      getClientRequirements();
      getClientTreatmentPlan();
      getClientProgNotes();
    }
    // eslint-disable-next-line
  }, [activeClient]);

  return (
    <ClientContext.Provider
      value={{
        formData,
        deleteGroupItem,
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
        clientRequirements,
        addClientRequirements,
        activeTreatmentPlan,
        updateClientTreatmentPlan,
        addClientGoal,
        updateClientGoal,
        addClientObjective,
        updateClientObjective,
        addClientIntervention,
        updateClientIntervention,
        dxCodes,
        getActiveDXCodes,
        serviceCodes,
        getActiveServiceCodes,
        serviceGroups,
        activeProgNotes,
        addClientProgNote,
        updateClientProgNote,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
}
