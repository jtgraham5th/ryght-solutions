export const getPharmacyList = async () => {
  return fetch(
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
  return fetch(
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

export const getGroupNameValues = async () => {
  return fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/25?listing=isactive=1&orderby=groupnameid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getGroupList = async (grouplistid) => {
  return fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/24?listing=groupid=${grouplistid},isactive=1&orderby=groupid`
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
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/24?listing=groupid=${groupid}&orderby=groupid`
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
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/24?listing=isactive=1&orderby=groupid`
  )
    .then((response) => response.json())
    .then((data) => {
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
export const updateListItem = async (item) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${item[0].grouplistid}?tid=24`,
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
  return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/24`, {
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