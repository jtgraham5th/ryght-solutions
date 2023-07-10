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
export const getAllServiceGroups = async () => {
  return await fetch(
    `${apiUrl}generic_api/list/28?fields=*&where=isactive=1&orderby=recid`
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
