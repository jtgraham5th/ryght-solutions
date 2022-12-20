import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import { abcObject } from "../data/formData";

const ClientContext = createContext();

export function useClient() {
  return useContext(ClientContext);
}

export function ClientProvider(props) {
  const [clientList, setClientlist] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [activeClient, setActiveClient] = useState({ 20: {}, 21: {}, 22: {} });
  const [activeContacts, setActiveContacts] = useState({});
  const [clientRequirements, setClientRequirements] = useState([]);
  const [formData, setFormData] = useState({});
  const [sortedClients, setSortedClients] = useState({ ...abcObject });
  const [loading, setLoading] = useState(false);

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

  const selectClient = async (patientid, tid) => {
    // if (activeClient.length === 3) {
    //   setActiveClient([]);
    // }
    fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/${patientid}?tid=${tid}`
    )
      .then((response) => response.json())
      .then(async (data) => {
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

  const getContactList = async (patientid, type) => {
    // fetch(`http://www.ivronlogs.icu:8080/rs/api/contact`)
    await fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/list/23?listing=patientid=${patientid},contacttypeid=${type}&orderby=contactid`
    )
      .then((response) => response.json())
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
  const getClientContact = (patientid) => {
    if (contactList) {
      const clientContact = contactList.filter(
        (contact, index) => contact.patientid === patientid
      );
      return clientContact;
    }
    return null;
  };
  const getGroupNames = async () => {
    return await fetch(`http://www.ivronlogs.icu:8080/rs/api/groupname`)
      .then((response) => response.json())
      .then(async (data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getFormFields = async () => {
    let groupObject = {};
    await fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/list/25?listing=isactive=1&orderby=groupnameid`
    )
      .then((response) => response.json())
      .then(async (data) => {
        for (const group of data) {
          await getGroupList(group.groupnameid).then((res) => {
            let groupArray = [];
            res.forEach((item) => {
              groupArray.push(item);
            });
            groupObject[`${group.groupname}`] = groupArray;
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setFormData(groupObject);
    getPharmacyList();
    getPhysicianList();
  };
  const getClient = async (patientid) => {
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs/api/enroll/${patientid}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getClientList = (tid) => {
    console.log("***")
    setLoading(true);
    fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/list/${tid}?listing=statusid=0&orderby=plastname`
    )
      .then((response) => response.json())
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
  const getGroupList = async (grouplistid) => {
    //   return await fetch(`http://www.ivronlogs.icu:8080/rs/api/grouplist`).then(
    // return fetch(
    //   `http://www.ivronlogs.icu:8080/rs/api/grouplist/gl_by_groupid?groupid=${grouplistid}`
    return fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/list/24?listing=groupid=${grouplistid}&orderby=groupid`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const updateClient = async (client, tid) => {
    //   fetch(`http://www.ivronlogs.icu:8080/rs/api/patient/${patient.patientid}`, {
    //   fetch(`http://www.ivronlogs.icu:8080/rs/api/enroll/${patient.patientid}`, {
    console.log("Update Client before", client);
    setLoading(true);
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/${activeClient[20].patientid}?tid=${tid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Update Client after", data);
        setLoading(false);
        return data[0];
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        throw new Error(error)
      })
    };
  const addClient = async (client) => {
    // return await fetch("http://www.ivronlogs.icu:8080/rs/api/patient", {
    //  return await fetch("http://www.ivronlogs.icu:8080/rs/api/enroll/", {
    return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/20`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getClientList(20);
        return data[0].patientid;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error)
      });
  };

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
  const addContact = async (contact) => {
    // return await fetch(`http://www.ivronlogs.icu:8080/rs/api/contact`, {
    return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/23`, {
      // method: "POST",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((data) => {
        return data[0].contactid;
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };
  const updateContact = async (contact, contactid) => {
    // return await fetch(
    //   `http://www.ivronlogs.icu:8080/rs/api/contact/${contactid}`,
    console.log("update Contact Before", contact)
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/${contactid}?tid=23`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("update Contact After", data[0])
        return data[0].contactid;
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e)
      });
  };
  const getContact = async (contactid) => {
    // return await fetch(
    //   `http://www.ivronlogs.icu:8080/rs/api/contact/${contactid}`
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/${contactid}?tid=23`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };
  const getPharmacyList = async () => {
    await fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/list/23?listing=contacttypeid=23&orderby=name`
    )
      .then((response) => response.json())
      .then(async (data) => {
        setFormData((prevState) => ({...prevState, Pharmacy: data}));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getPhysicianList = async () => {
    await fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/list/23?listing=contacttypeid=24&orderby=name`
    )
      .then((response) => response.json())
      .then(async (data) => {
        setFormData((prevState) => ({...prevState, Physician: data}));
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
        fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/17`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRequirement),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            newRequirements.push(data[0]);
          });
        //www.ivronlogs.club:8080/generic_api/17
        // return recid

        // add recid to requirement object
        // requirement.recid = index;

        // push updated requirement object to requirement array
        // newRequirements.push(requirement);
      })
      .then(() => {
        console.log(newRequirements);
        getClientRequirements();
      });
  };
  const getClientRequirements = () => {
    fetch(
      `http://www.ivronlogs.icu:8080/rs1/generic_api/list/17?listing=patientid=${activeClient[20].patientid}&orderby=billingid`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("client requirements", data);
        setClientRequirements(data);
      });
  };

  useEffect(() => {
    if (!clientList.length > 0) getClientList(20);
    if (!formData.length > 0) getFormFields();
    // if (!contactList.length > 0) getContactList();
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
    console.log(abcObjectCopy)
    setSortedClients(abcObjectCopy);
    // eslint-disable-next-line
  }, [clientList]);

  useEffect(() => {
    // get document ids
    if (activeClient.length > 0) getClientRequirements();
    // eslint-disable-next-line
  }, [activeClient]);

  return (
    <ClientContext.Provider
      value={{
        clientList,
        contactList,
        addClient,
        updateClient,
        getClient,
        getClientList,
        getClientContact,
        getContactList,
        selectClient,
        getGroupList,
        deleteGroupItem,
        // enrollClient,
        getGroupNames,
        addGroupItem,
        addContact,
        updateContact,
        getContact,
        resetClient,
        clientRequirements,
        addClientRequirements,
        sortedClients,
        activeClient,
        activeContacts,
        formData,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
}
