const apiUrl = process.env.REACT_APP_API_URL;

export const getAllServiceCodes = async () => {
  return await fetch(
    `${apiUrl}generic_api/list/29?fields=*&where=isactive=1&orderby=description`
  )
    .then((response) => response.json())
    .then((data) => {
     const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getServiceCodesWithId = async (grouplistid) => {
  return await fetch(
    `${apiUrl}generic_api/list/29?fields=*&where=grouplistid=${grouplistid}&orderby=description`
  )
    .then((response) => response.json())
    .then((data) => {
     const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getServiceGroupCodes = async (grouplistid) => {
  return await fetch(
    `${apiUrl}generic_api/list_pt/29?fields=*&where=isactive=1%20and%20find_in_set(recid,(select%20udf1%20from%20grouplist%20where%20grouplistid=${grouplistid}))&orderby=recid`
  )
    .then((response) => response.json())
    .then((data) => {
     const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateServiceCode = async (serviceCode) => {
  const fields = Object.keys(serviceCode[0]).join(",");
  console.log(fields);
  return await fetch(
    `${apiUrl}generic_api/${serviceCode[0].recid}?tid=28&fields=${fields}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceCode),
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
export const addNewServiceCode = async (serviceCode) => {
  return await fetch(`${apiUrl}generic_api/28?fields=recid`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serviceCode),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getServiceGroup = async (recid) => {
  return await fetch(`${apiUrl}generic_api/${recid}?tid=28`)
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData[0]
    })
    .catch((e) => {
      console.log(e);
    });
};
