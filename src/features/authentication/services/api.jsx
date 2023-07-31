const apiUrl = process.env.REACT_APP_API_URL;
// const rptUrl = process.env.REACT_APP_RPT_URL;

export const getUserWithID = async (userID) => {
  return await fetch(`${apiUrl}generic_api/${userID}?tid=19&fields=*`)
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
    });
};
export const getUserWithField = async (field, value) => {
  return await fetch(`${apiUrl}generic_api/list/19?fields=*&where=${field}=${value}&orderby=userid`)
    .then((response) => response.json())
    .then((data) => {
      const userData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return userData;
    });
};

export const updateUser = async (userid, updatedUser, fields) => {
  return await fetch(`${apiUrl}generic_api/${userid}?tid=19&fields=${fields}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewUser = async () => {
  return await fetch(`${apiUrl}generic_api/19?fields=userid`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(newDoc),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
