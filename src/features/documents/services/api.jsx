const apiUrl = process.env.REACT_APP_API_URL;
// const rptUrl = process.env.REACT_APP_RPT_URL;

export const addNewBillingTx = async () => {
  // console.log(newDoc);
  return await fetch(
    `${apiUrl}generic_api/17?fields=billingid,patientid,doctypeid,lastuserid,lastupdate`,
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
    `${apiUrl}generic_api/${billingTx.billingid}?tid=17&fields=patientid,doctypeid,lastuserid,lastupdate`,
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
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAllPatientBillingTx = async (patientid) => {
  return await fetch(
    // `${apiUrl}generic_api/list/17?fields=*&where=patientid=${patientid}&orderby=billingid`
    `${apiUrl}generic_api/list/17?fields=*&where=patientid=${patientid}&orderby=billingid`
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
export const addNewDocument = async (newDoc) => {
  return await fetch(`${apiUrl}generic_api/16?fields=recid`, {
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
  const fields = Object.keys(document[0]).join(",");
  return await fetch(
    `${apiUrl}generic_api/${document[0].recid}?tid=16&fields=${fields}`,
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
    `  ${apiUrl}generic_api/list/16?fields=*&where=patientid=${patientid},docid=${docid}&orderby=billingid`
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
export const getDocumentbyBilling = async (billingid, patientid) => {
  return await fetch(
    `  ${apiUrl}generic_api/list/16?fields=*&where=patientid=${patientid},billingid=${billingid}&orderby=billingid&allrecs=false`
  )
    .then((response) => response.json())
    .then((data) => {
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
