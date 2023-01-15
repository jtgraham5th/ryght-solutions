export const getAllClients = async (tid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/${tid}?listing=statusid=0&orderby=plastname`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getClient = async (patientid, tid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${patientid}?tid=${tid}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateClient = async (client, tid, patientid) => {
  console.log(client)
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${patientid}?tid=${tid}`,
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
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewClient = async (client) => {
  console.log(client)
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
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateContact = async (contact, contactid) => {
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
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewContact = async (contact) => {
  return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/23`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getContact = async (contactid) => {
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
export const getAllPatientContactsWithType = async (patientid, type) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/23?listing=patientid=${patientid},contacttypeid=${type}&orderby=contactid`
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
