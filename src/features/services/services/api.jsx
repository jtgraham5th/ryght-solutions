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
export const getServiceCodesWithId = async (serviceid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/29?listing=serviceid=${serviceid}&orderby=description`
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
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/28?listing=recid&orderby=recid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};