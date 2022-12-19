import formatDate from "../../../utils/formatDate";

export const parseFormData20 = (data, edit, tempID, activeClient) => {
  return [
    {
      patientid: edit ? activeClient[20].patientid : tempID ? tempID : 0,
      pfirstname: data.pfirstname,
      pinitial: data.pinitial,
      plastname: data.plastname,
      preferredname: data.preferredname,
      maritalstatusid: parseInt(data.maritalstatusid),
      dob: formatDate(data.dob),
      socsec: data.socsec,
      sexatbirthid: parseInt(data.sexatbirthid),
      genderid: parseInt(data.genderid),
      preferredpronounid: parseInt(data.preferredpronounid),
      ethnicityid: parseInt(data.ethnicityid),
      religionid: parseInt(data.religionid),
      email: data.email,
      statusid: parseInt(data.statusid),
    },
  ];
};
export const parseFormData21 = (data, edit, tempID, activeClient) => {
  return [
    {
      patientid:
        edit && activeClient.length > 0
          ? activeClient[20].patientid
          : tempID
          ? tempID
          : 0,
      employer: data.employer,
      employerphone: data.employerphone,
      weight: data.weight,
      allergies: data.allergies,
      physicianid: parseInt(data.physicianid),
      pharmacyproviderid: parseInt(data.pharmacyproviderid),
      ins1_fundingsource: data.ins1_fundingsource,
      ins1_policynumber: data.ins1_policynumber,
      ins1_dateexpires: formatDate(data.ins1_dateexpires),
      ins1_relationshipid: parseInt(data.ins1_relationshipid),
      ins1_cardavailableid: parseInt(data.ins1_cardavailableid),
      ins2_fundingsource: data.ins2_fundingsource,
      ins2_policynumber: data.ins2_policynumber,
      ins2_dateexpires: formatDate(data.ins2_dateexpires),
      ins2_relationshipid: parseInt(data.ins2_relationshipid),
      ins2_cardavailableid: parseInt(data.ins2_cardavailableid),
    },
  ];
};
export const parseFormData22 = (data, edit, tempID, activeClient) => {
  return [
    {
      patientid:
        edit && activeClient.length > 0
          ? activeClient[20].patientid
          : tempID
          ? tempID
          : 0,
      referralid: parseInt(data.referralid),
      referraldate: formatDate(data.referraldate),
      referralOutsourceid: parseInt(0),
      dateoutsourced: formatDate(data.dateoutsourced),
      internalreferralid: parseInt(data.internalreferralid),
      patient_comment: data.patient_comment,
      dxcodes: data.dxcodes,
      dxdate: formatDate(data.dxdate),
      firstapptdate: formatDate(data.firstapptdate),
      firstpsydate: formatDate(data.firstpsydate),
    },
  ];
};
export const parsePatientContact = (data, edit, activeContacts) => {
  return [
    {
      contactid:
        edit && activeContacts.patient.length > 0
          ? activeContacts.patient[0].contactid
          : 0,
      name: data.pfirstname + " " + data.plastname,
      address1: data.paddress,
      address2: "",
      city: data.pcity,
      state: data.pstate,
      zip: data.pZip,
      // udfid1: 0,
      // udfid2: 0,
      contacttypeid: 21,
      patientid: parseInt(data.patientid),
      relationshipid: 0,
      phone1: parseInt(data.pphone1),
      phone1typeid: parseInt(data.pphone1type),
      phone2: parseInt(data.pphone2),
      phone2typeid: parseInt(data.pphone2type),
      phone3: parseInt(data.pphone3),
      phone3typeid: parseInt(data.pphone3type),
      countyid: 0,
      isactive: 1,
    },
  ];
};
export const parseEmergencyContact = (data, edit, activeContacts) => {
  return [
    {
      contactid:
        edit && activeContacts.emergency.length > 0
          ? activeContacts.emergency[0].contactid
          : 0,
      name: data.ecName,
      address1: data.ecAddress,
      address2: "",
      city: data.ecCity,
      state: data.ecState,
      zip: data.ecZip,
      // udfid1: 0,
      // udfid2: 0,
      contacttypeid: 22,
      patientid: parseInt(data.patientid),
      relationshipid: parseInt(data.ecRelationship),
      phone1: parseInt(data.ecPhone),
      phone1typeid: parseInt(data.ecPhoneType),
      phone2: "",
      phone2typeid: 0,
      phone3: "",
      phone3typeid: 0,
      countyid: 0,
      isactive: 1,
    },
  ];
};
export const parseDefaultValues = (edit, activeClient) => {
  return {
    patientid: edit ? parseInt(activeClient[20].patientid) : 0,
    pfirstname: edit ? activeClient[20].pfirstname : "",
    plastname: edit ? activeClient[20].plastname : "",
    pinitial: edit ? activeClient[20].pinitial : "",
    preferredname: edit ? activeClient[20].preferredname : "",
    dob: edit ? Date.parse(activeClient[20].dob) : Date.now(),
    maritalstatusid: edit ? parseInt(activeClient[20].maritalstatusid) : 0,
    socsec: edit ? activeClient[20].socsec : "",
    ethnicityid: edit ? parseInt(activeClient[20].ethnicityid) : 0,
    sexatbirthid: edit ? parseInt(activeClient[20].sexatbirthid) : 0,
    genderid: edit ? parseInt(activeClient[20].genderid) : 0,
    preferredpronounid: edit ? parseInt(activeClient[20].preferredpronounid) : 0,
    religionid: edit ? parseInt(activeClient[20].religionid) : 0,
    weight: edit ? activeClient[21].weight : "",
    height: edit ? activeClient[21].height : "",
    email: edit ? activeClient[20].email : "",
    employer: edit ? activeClient[21].employer : "",
    employerphone: edit ? activeClient[21].employerphone : "",
    ins1_cardavailableid: edit ? parseInt(activeClient[21].ins1_cardavailableid) : 0,
    ins1_dateexpires: edit
      ? Date.parse(activeClient[21].ins1_dateexpires)
      : Date.now(),
    ins1_policynumber: edit ? activeClient[21].ins1_policynumber : "",
    ins1_relationshipid: edit ? parseInt(activeClient[21].ins1_relationshipid) : 0,
    ins1_fundingsource: edit ? activeClient[21].ins1_fundingsource : "",
    ins2_cardavailableid: edit ? parseInt(activeClient[21].ins2_cardavailableid) : 0,
    ins2_dateexpires: edit
      ? Date.parse(activeClient[21].ins2_dateexpires)
      : Date.now(),
    ins2_policynumber: edit ? activeClient[21].ins2_policynumber : "",
    ins2_relationshipid: edit ? parseInt(activeClient[21].ins2_relationshipid) : 0,
    ins2_fundingsource: edit ? activeClient[21].ins2_fundingsource : "",
    allergies: edit ? activeClient[21].allergies : "",
    physicianid: edit ? parseInt(activeClient[21].physicianid) : 0,
    pharmacy: edit ? activeClient[21].pharmacy : "",
    pharmacyproviderid: edit ? parseInt(activeClient[21].pharmacyproviderid) : 0,
    patient_comment: edit ? activeClient[22].patient_comment : "",
    referralid: edit ? parseInt(activeClient[22].referralid) : 0,
    referraldate: edit ? Date.parse(activeClient[22].referraldate) : Date.now(),
    dxdate: edit ? Date.parse(activeClient[22].dxdate) : Date.now(),
    internalreferralid: edit ? parseInt(activeClient[22].internalreferralid) : 0,
    statusid: edit ? parseInt(activeClient[20].statusid) : 0,
    outcomeid: edit ? parseInt(activeClient[22].outcomeid) : 0,
    dxcodes: edit ? activeClient[22].dxcodes : "",
    dateoutsourced: edit
      ? Date.parse(activeClient[22].dateoutsourced)
      : Date.now(),
    firstapptdate: edit
      ? Date.parse(activeClient[22].firstapptdate)
      : Date.now(),
    firstpsydate: edit ? Date.parse(activeClient[22].firstpsydate) : Date.now(),
  };
};
export const parseDefaultPC = (edit, activeContacts) => {
  return {
    paddress: edit ? activeContacts.patient[0].address1 : "",
    pcity: edit ? activeContacts.patient[0].city : "",
    pstate: edit ? activeContacts.patient[0].state : "",
    pZip: edit ? activeContacts.patient[0].zip : "",
    pphone1: edit ? parseInt(activeContacts.patient[0].phone1) : "",
    pphone1type: edit ? activeContacts.patient[0].phone1typeid : 0,
    pphone2: edit ? parseInt(activeContacts.patient[0].phone2) : "",
    pphone2type: edit ? activeContacts.patient[0].phone2typeid : 0,
    pphone3: edit ? parseInt(activeContacts.patient[0].phone3) : "",
    pphone3type: edit ? activeContacts.patient[0].phone3typeid : 0,
  };
};
export const parseDefaultEC = (edit, activeContacts) => {
  return {
    ecName: edit ? activeContacts.emergency[0].name : "",
    ecAddress: edit ? activeContacts.emergency[0].address1 : "",
    ecCity: edit ? activeContacts.emergency[0].city : "",
    ecState: edit ? activeContacts.emergency[0].state : "",
    ecZip: edit ? activeContacts.emergency[0].zip : "",
    ecPhone: edit ? parseInt(activeContacts.emergency[0].phone1) : "",
    ecPhoneType: edit ? activeContacts.emergency[0].phone1typeid : "",
    ecRelationship: edit ? activeContacts.emergency[0].RelationshipID : "",
  };
};
