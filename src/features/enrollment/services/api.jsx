const apiUrl = process.env.REACT_APP_API_URL;
// const rptUrl = process.env.REACT_APP_RPT_URL;

export const getAllClients = async () => {
  return await fetch(
    `${apiUrl}generic_api/list/20?fields=patientid,pfirstname,plastname,statusid&where=statusid=0&orderby=plastname`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getClient = async (patientid) => {
  return await fetch(
    `${apiUrl}generic_api/list/20?fields=*&where=patientid=${patientid}&orderby=patientid`
    // `${apiUrl}generic_api/${patientid}?tid=${tid}`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = Object.fromEntries(
        Object.entries(data[0]).map(([k, v]) => [k.toLowerCase(), v])
    )
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateClient = async (client, patientid) => {
  const trimClient = { ...client[0] };
  delete trimClient["patientid"];
  const fields = Object.keys(trimClient).join(",");
  return await fetch(`${apiUrl}generic_api/${patientid}?tid=20&fields=${fields}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([trimClient]),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewClient = async (client) => {
  return await fetch(`${apiUrl}generic_api/20?fields=patientid`, {
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
  console.log(contactid)
  const trimContact = { ...contact[0] };
  delete trimContact["contactid"];
  const fields = Object.keys(trimContact).join(",");
  return await fetch(`${apiUrl}generic_api/${contactid}?tid=23&fields=${fields}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([trimContact]),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewContact = async (contact) => {
  return await fetch(`${apiUrl}generic_api/23?fields=contactid`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getContact = async (contactid) => {
  return await fetch(`${apiUrl}generic_api/${contactid}?tid=23`)
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
    `${apiUrl}generic_api/list/23?fields=*&where=patientid=${patientid},contacttypeid=${type}&orderby=contactid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};
