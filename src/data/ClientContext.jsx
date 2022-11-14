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
  const [sortedClients, setSortedClients] = useState(abcObject);

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
  const getFormFields = () => {
    fetch(`http://www.ivronlogs.icu:8080/rs/api/grouplist`).then((response) =>
      response.json().then(async (data) => {
        let groupObject = {
          gender: [],
          ethnicity: [],
          phoneType: [],
          contactType: [],
        };
        await data.forEach((group, index) => {
          if (group.grouplistid >= 1 && group.grouplistid < 3) {
            groupObject.gender = [...groupObject.gender, group.groupvalue];
          }
          if (group.grouplistid >= 3 && group.grouplistid < 13) {
            groupObject.ethnicity = [
              ...groupObject.ethnicity,
              group.groupvalue,
            ];
          }
          if (group.grouplistid >= 18 && group.grouplistid < 21) {
            groupObject.phoneType = [
              ...groupObject.phoneType,
              group.groupvalue,
            ];
          }
          if (group.grouplistid >= 21 && group.grouplistid < 25) {
            groupObject.contactType = [
              ...groupObject.contactType,
              group.groupvalue,
            ];
          }
        });
        setFormData(groupObject);
      })
    );
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
  const sortClients = (length) => {
    let abcObjectCopy = abcObject;
    for (let i = length - 100; i < length; i++) {
      let nameArray = clientList[i].name.split(",");
      let lastName = [...nameArray[0]];
      let abcObjectKeys = Object.keys(sortedClients);
      for (const key of abcObjectKeys) {
        if (lastName[0].toLowerCase() === key.toLowerCase()) {
          abcObjectCopy[key] = [...abcObjectCopy[key], clientList[i]];
        }
      }
    }
    setSortedClients(abcObjectCopy);
  };

  const sortAllClients = () => {
    console.log("sorting clients")
    for (let i = 100; i <= clientList.length; i += 100) {
      sortClients(i);
    }
    console.log("done sorting")
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

  useEffect(() => {
    if (!clientList.length > 0) getClientList();
    if (!formData.length > 0) getFormFields();
    if (!contactList.length > 0) getContactList();
  }, []);

  useEffect(() => {
      console.log(clientList.length);
      sortAllClients();
  }, [clientList]);

  return (
    <ClientContext.Provider
      value={{
        clientList,
        contactList,
        updateClient,
        getClient,
        getClientList,
        getClientContact,
        selectClient,
        sortAllClients,
        sortedClients,
        activeClient,
        formData,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
}
