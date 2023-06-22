const apiUrl = process.env.REACT_APP_API_URL;
// const rptUrl = process.env.REACT_APP_RPT_URL;

export const getPharmacyList = async () => {
  return fetch(
    `${apiUrl}generic_api/list/23?fields=*&where=contacttypeid=23&orderby=name`
  )
    .then((response) => response.json())
    .then(async (data) => {
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
export const getPhysicianList = async () => {
  return fetch(
    `${apiUrl}generic_api/list/23?fields=*&where=contacttypeid=24&orderby=name`
  )
    .then((response) => response.json())
    .then(async (data) => {
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

export const getGroupNameValues = async () => {
  return fetch(
    `${apiUrl}generic_api/list/25?fields=*&where=isactive=1&orderby=groupnameid`
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
    });
};
export const getGroupList = async (grouplistid) => {
  return fetch(
    `${apiUrl}generic_api/list/24?fields=*&where=groupid=${grouplistid},isactive=1&orderby=groupid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getGroupInactiveListValues = async (groupid) => {
  return fetch(
    `${apiUrl}generic_api/list/24?fields=*&where=groupid=${groupid}&orderby=groupid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getGroupListValues = async () => {
  return fetch(
    `${apiUrl}generic_api/list/24?fields=*&where=isactive=1&orderby=groupid`
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
    });
};
export const getListItem = async (grouplistid) => {
  return await fetch(
    `${apiUrl}generic_api/list/24?fields=*&where=grouplistid=${grouplistid}&orderby=grouplistid`
  )
    .then((response) => response.json())
    .then(async (data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateListItem = async (item) => {
  const fields = Object.keys(item[0]).join(",");
  return await fetch(
    `${apiUrl}generic_api/${item[0].grouplistid}?tid=24&fields=${fields}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
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
export const addNewListItem = async (listItem) => {
  return await fetch(`${apiUrl}generic_api/24?fields=grouplistid`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listItem),
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
