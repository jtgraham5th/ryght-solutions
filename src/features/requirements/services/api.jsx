export const addNewRequirement = async (newDoc) => {
  return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/17`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDoc),
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
export const updateRequirement = async (document) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${document[0].recid}?tid=17`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(document),
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
export const getAllPatientRequirements = async (patientid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/17?listing=patientid=${patientid}&orderby=billingid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
