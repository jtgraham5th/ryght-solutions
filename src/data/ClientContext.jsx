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
  const [formData, setFormData] = useState({});
  const [sortedClients, setSortedClients] = useState({ ...abcObject });
  const [loading, setLoading] = useState(false);

  const sortClients = (length, emptyObject) => {
    for (let i = length - 100; i < length; i++) {
      let nameArray = clientList[i].name.split(",");
      let lastName = [...nameArray[0]];
      let abcObjectKeys = Object.keys(sortedClients);
      for (const key of abcObjectKeys) {
        if (lastName[0].toLowerCase() === key.toLowerCase()) {
          emptyObject[key] = [...emptyObject[key], clientList[i]].sort();
        }
      }
    }
  };

  const selectClient = (patientid) => {
    fetch(`http://www.ivronlogs.icu:8080/rs/api/enroll/${patientid}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActiveClient(data);
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
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getClientContact = (patientid) => {
    if (contactList) {
      const clientContact = contactList.filter(
        (contact, index) => contact.patientid === patientid
      );
      console.log(clientContact);
      return clientContact;
    }
    return null;
  };
  const getGroupNames = async () => {
    return await fetch(`http://www.ivronlogs.icu:8080/rs/api/groupname`)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
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
        console.log(data);
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
    console.log(groupObject);
    setFormData(groupObject);
  };
  const getClient = async (patientid) => {
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs/api/enroll/${patientid}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getClientList = () => {
    setLoading(true)
    fetch("http://www.ivronlogs.icu:8080/rs/api/enroll")
      .then((response) => response.json())
      .then((data) => {
        let clientArray = [];
        data.forEach((client) =>
          clientArray.push({
            name: client.plastname + ", " + client.pfirstname,
            isactive: client.isactive,
            patientid: client.patientid,
          })
        );
        console.log(clientArray);
        setClientlist(clientArray);
        setLoading(false)
      })
      .catch((e) => {
        console.log(e);
        setLoading(false)
      });
  };
  const updateClient = (patient) => {
    setLoading(true);
    // fetch(`http://www.ivronlogs.icu:8080/rs/api/patient/${patient.patientid}`, {
    fetch(`http://www.ivronlogs.icu:8080/rs/api/enroll/${patient.patientid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false)
      })
      .catch((e) => {
        console.log(e);
        setLoading(false)
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
      `http://www.ivronlogs.icu:8080/rs/api/grouplist/${grouplistid}`, {
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
  const addContact = async (patientid, contacttype, contact) => {
    return await fetch(`http://www.ivronlogs.icu:8080/rs/api/contact/contact_by_contacttypeid?patientid=${patientid}&contacttypeid=${contacttype}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
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
    console.log("done sorting");
    setSortedClients(abcObjectCopy);
    // eslint-disable-next-line
  }, [clientList]);

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
