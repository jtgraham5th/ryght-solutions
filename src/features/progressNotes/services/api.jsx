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
