export const parseBillingTx = (activeClient, doctypeid, userid) => {
  const billingTx = {
    billingid: 0,
    patientid: activeClient[20].patientid,
    doctypeid: doctypeid,
    lastuserid: userid ? userid : 101,
  };
  return [billingTx];
};
