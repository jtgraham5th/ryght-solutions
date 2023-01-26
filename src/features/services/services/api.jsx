export const getAllServiceCodes = async () => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/29?listing=isactive=1&orderby=description`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getServiceCodesWithId = async (grouplistid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/29?listing=grouplistid=${grouplistid}&orderby=description`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAllServiceGroups = async () => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/28?listing=recid,isactive=1&orderby=recid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getServiceGroup = async (recid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${recid}?tid=28`
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};