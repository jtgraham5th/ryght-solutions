export const addNewBillingTx = async () => {
  // console.log(newDoc);
  return await fetch(
    `http://www.ivronlogs.icu:8080/rsv1/generic_api/17?fields=billingid,patientid,doctypeid,lastuserid,lastupdate`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(newDoc),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateBillingTx = async (billingTx) => {
  console.log(billingTx);
  const requestBody = [{ ...billingTx }];
  delete requestBody[0].billingid;
  console.log(requestBody);

  return await fetch(
    `http://www.ivronlogs.icu:8080/rsv1/generic_api/${billingTx.billingid}?tid=17&fields=patientid,doctypeid,lastuserid,lastupdate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAllPatientBillingTx = async (patientid) => {
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
export const addNewDocument = async (newDoc) => {
  return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/16`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDoc),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateDocument = async (document) => {
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
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getDocumentbyType = async (docid, patientid) => {
  return await fetch(
    `  http://www.ivronlogs.icu:8080/rs1/generic_api/list/16?listing=patientid=${patientid},docid=${docid}&orderby=billingid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
