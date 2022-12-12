import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import { abcObject } from "./formData";

const ClientContext = createContext();

export function useClient() {
  return useContext(ClientContext);
}

export function ClientProvider(props) {
  const [clientList, setClientlist] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [activeClient, setActiveClient] = useState({});
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
          if (lastName[0].toLowerCase() === key.toLowerCase()) {
            emptyObject[key] = [...emptyObject[key], clientList[i]].sort();
          }
        }
      }
    }
  };

  const selectClient = async (patientid) => {
    fetch(`http://www.ivronlogs.icu:8080/rs/api/enroll/${patientid}`)
      .then((response) => response.json())
      .then((data) => {
        let newObject = {};
        getClientAddress(data.clientaddressid)
          .then((contact) => {
            newObject = { ...data, ...contact };
          })
          .then(() =>
            getEmergencyContact(data.emergencycontactid)
              .then((econtact) => {
                newObject = { ...newObject, ...econtact };
              })
              .then(() => {
                setActiveClient({ ...newObject });
              })
          );
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getContactList = (patientid) => {
    fetch(`http://www.ivronlogs.icu:8080/rs/api/contact`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setContactList(data);
        setFormData((prevData) => ({
          ...prevData,
          Pharmacy: getPharmacyList(data),
          Physicians: getPhysicianList(data),
        }));
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
    await fetch(`http://www.ivronlogs.icu:8080/rs/api/groupname`)
      .then((response) => response.json())
      .then(async (data) => {
        // console.log(groupListArray)
        for (const group of data) {
          await getGroupList(group.groupnameid).then((res) => {
            let groupListObject = {};
            let groupListArray = [];
            res.forEach((item) => {
              groupListObject.listId = item[0];
              groupListObject.listItem = item[1];
              groupListObject.groupId = item[2];
              groupListArray.push(groupListObject);
              groupListObject = {};
            });
            groupObject[`${group.groupname}`] = groupListArray;
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setFormData(groupObject);
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
  const getClientList = () => {
    setLoading(true);
    fetch("http://www.ivronlogs.icu:8080/rs/api/enroll")
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
        console.log(clientArray);
        setClientlist(clientArray);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  const updateClient = (patient) => {
    setLoading(true);
    console.log(patient);
    // fetch(`http://www.ivronlogs.icu:8080/rs/api/patient/${patient.patientid}`, {
    fetch(`http://www.ivronlogs.icu:8080/rs/api/enroll/${patient.patientid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    })
      .then((response) => response.json())
      .then(async (data) => {
        let newObject = {};
        getClientAddress(data.clientaddressid)
          .then((contact) => {
            newObject = { ...data, ...contact };
          })
          .then(() =>
            getEmergencyContact(data.emergencycontactid)
              .then((econtact) => {
                newObject = { ...newObject, ...econtact };
              })
              .then(() => {
                setActiveClient({ ...newObject });
                setLoading(false);
              })
          );
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  const getGroupList = async (grouplistid) => {
    return fetch(
      `http://www.ivronlogs.icu:8080/rs/api/grouplist/gl_by_groupid?groupid=${grouplistid}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // const getGroupList = async () => {
  //   return await fetch(`http://www.ivronlogs.icu:8080/rs/api/grouplist`).then(
  //     async (response) => {
  //       await response.json().then((data) => {
  //         console.log(data);
  //         return data;
  //       });
  //     }
  //   );
  // };

  const addClient = async (newClient) => {
    // return await fetch("http://www.ivronlogs.icu:8080/rs/api/patient", {
    return await fetch("http://www.ivronlogs.icu:8080/rs/api/enroll/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  const enrollClient = async (newClient) => {
    await fetch("http://www.ivronlogs.icu:8080/rs/api/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
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
    return await fetch(`http://www.ivronlogs.icu:8080/rs/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.contactid;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };
  const updateContact = async (contact, contactid) => {
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs/api/contact/${contactid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data.contactid;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };
  const getContact = async (contactid) => {
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs/api/contact/${contactid}`
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
  const getPharmacyList = (contactList) => {
    if (contactList) {
      const pharmacyList = contactList.filter(
        (contact) => contact.contacttypeid === "23"
      );
      console.log("pharmacyList", pharmacyList);
      return pharmacyList;
    }
    return null;
  };
  const getPhysicianList = (contactList) => {
    if (contactList) {
      const physicianList = contactList.filter(
        (contact) => contact.contacttypeid === "24"
      );
      console.log("physicianList", physicianList);
      return physicianList;
    }
    return null;
  };
  const getClientAddress = async (clientaddressid) => {
    const clientAddress = await getContact(clientaddressid);
    return {
      paddress: clientAddress.address1,
      pcity: clientAddress.city,
      pstate: clientAddress.state,
      pZip: parseInt(clientAddress.zip),
      pphone1: clientAddress.phone1,
      pphone1type: clientAddress.phone1typeid,
      pphone2: clientAddress.phone2,
      pphone2type: clientAddress.phone2typeid,
      pphone3: clientAddress.phone3,
      pphone3type: clientAddress.phone3typeid,
    };
  };
  const getEmergencyContact = async (emergencycontactid) => {
    const emergencyContact = await getContact(emergencycontactid);
    return {
      ecName: emergencyContact.name,
      ecAddress: emergencyContact.address1,
      ecCity: emergencyContact.city,
      ecState: emergencyContact.state,
      ecZip: emergencyContact.zip,
      ecPhone: emergencyContact.phone1,
      ecPhoneType: emergencyContact.phone1typeid,
      ecRelationship: emergencyContact.relationshipid,
    };
  };
  const addClientRequirements = async (data) => {
    let newRequirements = [];
    await data
      .forEach((requirement, index) => {
        let newRequirement = [
          {
            billingid: 0,
            patientid: activeClient.patientid,
            doctypeid: requirement.doctypeid,
            lastuserid: 101,
          },
        ];
        console.log(newRequirement);
        fetch(`http://www.ivronlogs.club:8080/generic_api/17`, {
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
      `http://www.ivronlogs.club:8080/generic_api/list/17?listing=patientid=${activeClient.patientid}&orderby=billingid`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("client requirements", data);
        setClientRequirements(data);
      });
  };

  useEffect(() => {
    if (!clientList.length > 0) getClientList();
    if (!formData.length > 0) getFormFields();
    if (!contactList.length > 0) getContactList();
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

    if (Object.keys(activeClient).length !== 0) getClientRequirements();
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
        selectClient,
        getGroupList,
        deleteGroupItem,
        enrollClient,
        getGroupNames,
        addGroupItem,
        addContact,
        updateContact,
        getContact,
        clientRequirements,
        addClientRequirements,
        sortedClients,
        activeClient,
        formData,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
}
