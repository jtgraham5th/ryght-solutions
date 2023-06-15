import formatDate from "../../../utils/formatDate";

export const parseBillingTx = (activeClient, doctypeid, userid) => {
  const billingTx = {
    billingid: 0,
    patientid: activeClient.patientid,
    doctypeid: doctypeid,
    lastuserid: userid ? userid : 0,
    lastupdate: formatDate(Date.now())
  };
  return [billingTx];
};
