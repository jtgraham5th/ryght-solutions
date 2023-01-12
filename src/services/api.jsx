export const getGroupNames = async () => {
  return await fetch(`http://www.ivronlogs.icu:8080/rs/api/groupname`)
    .then((response) => response.json())
    .then(async (data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getPharmacyList = async () => {
  await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/23?listing=contacttypeid=23&orderby=name`
  )
    .then((response) => response.json())
    .then(async (data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getPhysicianList = async () => {
  await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/23?listing=contacttypeid=24&orderby=name`
  )
    .then((response) => response.json())
    .then(async (data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getListItem = async (grouplistid) => {
   return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/${grouplistid}?tid=24`)
    .then((response) => response.json())
    .then(async (data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};