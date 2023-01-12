export const addNewProgNote = async (newDoc) => {
  return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/16`, {
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
export const updateProgNote = async (document) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${document[0].recid}?tid=16`,
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
      console.log(data)
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAllPatientProgNotes = async (patientid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/16?listing=patientid=${patientid},docid=2&orderby=billingid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
