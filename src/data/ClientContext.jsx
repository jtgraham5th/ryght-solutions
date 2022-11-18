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
    fetch(`http://www.ivronlogs.icu:8080/rs/api/patient/${patientid}`).then(
      (response) =>
        response.json().then((data) => {
          console.log(data);
          setActiveClient(data);
        })
    );
  };
  const getContactList = (patientid) => {
    fetch(`http://www.ivronlogs.icu:8080/rs/api/contact`).then((response) =>
      response.json().then((data) => {
        // console.log(data);
        setContactList(data);
      })
    );
  };
  const getClientContact = (patientid) => {
    if (contactList) {
      const clientContact = contactList.filter(
        (contact, index) => contact.patientid == patientid
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

        console.log(data)
        return data;
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
      });
    console.log(groupObject);
    setFormData(groupObject);
  };
  const getClient = async (patientid) => {
    return await fetch(
      `http://www.ivronlogs.icu:8080/rs/api/patient/${patientid}`
    ).then((response) =>
      response.json().then((data) => {
        console.log(data);
        return data;
      })
    );
  };
  const getClientList = () => {
    fetch("http://www.ivronlogs.icu:8080/rs/api/patient").then(
      (response) =>
        response.json().then((data) => {
          let clientArray = [];
          data.forEach((client) =>
            clientArray.push({
              name: client.lastname + ", " + client.firstname,
              isactive: client.isactive,
              patientid: client.patientid,
            })
          );
          console.log(clientArray);
          setClientlist(clientArray);
        })
      // .then(() => {
      //   console.log("sorting");
      //   console.log(clientList);
      //   sortClients();
      // })
    );
  };
  const updateClient = (patient) => {
    fetch(`http://www.ivronlogs.icu:8080/rs/api/patient/${patient.patientid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    }).then((response) =>
      response.json().then((data) => {
        console.log(data);
      })
    );
  };
  const getGroupList = async (grouplistid) => {
    return fetch(
      `http://www.ivronlogs.icu:8080/rs/api/grouplist/gl_by_groupid?groupid=${grouplistid}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
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
    return await fetch("http://www.ivronlogs.icu:8080/rs/api/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    })
      .then((response) =>
        response.json().then((data) => {
          console.log(data);
          return data;
        })
      )
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
      .then((response) =>
        response.json().then((data) => {
          console.log(data);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (!clientList.length > 0) getClientList();
    if (!formData.length > 0) getFormFields();
    if (!contactList.length > 0) getContactList();
  }, []);

  useEffect(() => {
    let abcObjectCopy = { ...abcObject };
    console.log("start sorting");
    for (let i = 100; i <= clientList.length; i += 100) {
      sortClients(i, abcObjectCopy);
    }
    console.log("done sorting");
    setSortedClients(abcObjectCopy);
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
        enrollClient,
        getGroupNames,
        sortedClients,
        activeClient,
        formData,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
}
