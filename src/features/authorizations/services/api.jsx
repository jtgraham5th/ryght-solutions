const apiUrl = process.env.REACT_APP_API_URL;
// const rptUrl = process.env.REACT_APP_RPT_URL;

export const addNewAuthorization = async (authorization) => {
  return await fetch(`${apiUrl}generic_api/35`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authorization),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0].authrecid;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAuthorizations = async (patientid) => {
  return await fetch(
    `${apiUrl}generic_api/list/35?fields=*&where=patientid=${patientid}&orderby=authrecid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateAuthorization = async (authrecid, authorization) => {
  console.log("updateAuthorization from api", authorization)
  return await fetch(
    `${apiUrl}generic_api/${authrecid}?tid=35`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authorization),
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
export const addNewAuthService = async (authService) => {
  return await fetch(`${apiUrl}generic_api/36`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authService),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0].recid;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAuthServices = async (authrecid) => {
  return await fetch(
    `${apiUrl}generic_api/list/36?fields=*&where=authrecid=${authrecid}&orderby=authrecid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateAuthService = async (recid, authService) => {
  return await fetch(
    `${apiUrl}generic_api/${recid}?tid=36`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authService),
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
