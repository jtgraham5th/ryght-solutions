const apiUrl = process.env.REACT_APP_API_URL;
// const rptUrl = process.env.REACT_APP_RPT_URL;

export const getAllPatientProgNotes = async (patientid) => {
  return await fetch(
    `${apiUrl}generic_api/list/16?fields=*&where=patientid=${patientid},docid=2&orderby=billingid`
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
