import formatDate from "../../../utils/formatDate";
import { formatHeight } from "./formhelper";

export const parseFormData20 = (data, edit, tempID, activeClient) => {
  return [
    {
      patientid: edit ? activeClient[20].patientid : tempID ? tempID : 0,
      pfirstname: data.pfirstname ? data.pfirstname : "",
      pinitial: data.pinitial ? data.pinitial : "",
      plastname: data.plastname ? data.plastname : "",
      preferredname: data.preferredname ? data.preferredname : "",
      maritalstatusid: data.maritalstatusid
        ? parseInt(data.maritalstatusid)
        : 0,
      dob: data.dob ? formatDate(data.dob) : formatDate(Date.now()),
      socsec: data.socsec ? data.socsec : "",
      sexatbirthid: data.sexatbirthid ? parseInt(data.sexatbirthid) : 0,
      genderid: data.genderid ? parseInt(data.genderid) : 0,
      preferredpronounid: data.preferredpronounid
        ? parseInt(data.preferredpronounid)
        : 0,
      ethnicityid: data.ethnicityid ? parseInt(data.ethnicityid) : 0,
      religionid: data.religionid ? parseInt(data.religionid) : 0,
      email: data.email ? data.email : "",
      statusid: data.statusid ? parseInt(data.statusid) : 0,
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
      employer: data.employer ? data.employer : "",
      employerphone: data.employerphone ? data.employerphone : "",
      height: data.height ? formatHeight(data.height) : 0,
      weight: data.weight ? parseInt(data.weight) : 0,
      allergies: data.allergies ? data.allergies : "",
      physicianid: data.physicianid ? parseInt(data.physicianid) : 0,
      pharmacyproviderid: data.pharmacyproviderid
        ? parseInt(data.pharmacyproviderid)
        : 0,
      ins1_fundingsource: data.ins1_fundingsource
        ? parseInt(data.ins1_fundingsource)
        : 0,
      ins1_policynumber: data.ins1_policynumber ? data.ins1_policynumber : "",
      ins1_dateexpires: data.ins1_dateexpires
        ? formatDate(data.ins1_dateexpires)
        : formatDate(Date.now()),
      ins1_relationshipid: data.ins1_relationshipid
        ? parseInt(data.ins1_relationshipid)
        : 0,
      ins1_cardavailableid: data.ins1_cardavailableid
        ? parseInt(data.ins1_cardavailableid)
        : 0,
      ins2_fundingsource: data.ins2_fundingsource
        ? parseInt(data.ins2_fundingsource)
        : 0,
      ins2_policynumber: data.ins2_policynumber ? data.ins2_policynumber : "",
      ins2_dateexpires: data.ins2_dateexpires
        ? formatDate(data.ins2_dateexpires)
        : formatDate(Date.now()),
      ins2_relationshipid: data.ins2_relationshipid
        ? parseInt(data.ins2_relationshipid)
        : 0,
      ins2_cardavailableid: data.ins2_cardavailableid
        ? parseInt(data.ins2_cardavailableid)
        : 0,
    },
  ];
};
export const parseFormData22 = (data, edit, tempID, activeClient) => {
  console.log(edit, activeClient[20], activeClient[23]);
  return [
    {
      patientid:
        edit && activeClient[20]
          ? activeClient[20].patientid
          : tempID
          ? tempID
          : 0,
      referralid: data.referralid ? parseInt(data.referralid) : 0,
      referraldate: data.referraldate
        ? formatDate(data.referraldate)
        : formatDate(Date.now()),
      referralOutsourceid: parseInt(0),
      dateoutsourced: data.dateoutsourced
        ? formatDate(data.dateoutsourced)
        : formatDate(Date.now()),
      internalreferralid: data.internalreferralid
        ? parseInt(data.internalreferralid)
        : 0,
      patient_comment: data.patient_comment ? data.patient_comment : "",
      dxcodes: data.dxcodes ? data.dxcodes : "",
      servicecodes: data.servicecodes ? data.servicecodes : "",
      dxdate: data.dxdate ? formatDate(data.dxdate) : formatDate(Date.now()),
      firstapptdate: data.firstapptdate
        ? formatDate(data.firstapptdate)
        : formatDate(Date.now()),
      firstpsydate: data.firstpsydate
        ? formatDate(data.firstpsydate)
        : formatDate(Date.now()),
    },
  ];
};
export const parsePatientContact = (data, edit, activeContacts) => {
  console.log("contacts:", activeContacts);
  return [
    {
      contactid:
        edit && activeContacts.patient && activeContacts.patient > 0
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
        edit && activeContacts.emergency && activeContacts.emergency > 0
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
    preferredpronounid: edit
      ? parseInt(activeClient[20].preferredpronounid)
      : 0,
    religionid: edit ? parseInt(activeClient[20].religionid) : 0,
    weight: edit ? activeClient[21].weight : "",
    height: edit ? formatHeight(parseInt(activeClient[21].height)) : "",
    email: edit ? activeClient[20].email : "",
    employer: edit ? activeClient[21].employer : "",
    employerphone: edit ? activeClient[21].employerphone : "",
    ins1_cardavailableid: edit
      ? parseInt(activeClient[21].ins1_cardavailableid)
      : 0,
    ins1_dateexpires: edit
      ? Date.parse(activeClient[21].ins1_dateexpires)
      : Date.now(),
    ins1_policynumber: edit ? activeClient[21].ins1_policynumber : "",
    ins1_relationshipid: edit
      ? parseInt(activeClient[21].ins1_relationshipid)
      : 0,
    ins1_fundingsource: edit ? activeClient[21].ins1_fundingsource : "",
    ins2_cardavailableid: edit
      ? parseInt(activeClient[21].ins2_cardavailableid)
      : 0,
    ins2_dateexpires: edit
      ? Date.parse(activeClient[21].ins2_dateexpires)
      : Date.now(),
    ins2_policynumber: edit ? activeClient[21].ins2_policynumber : "",
    ins2_relationshipid: edit
      ? parseInt(activeClient[21].ins2_relationshipid)
      : 0,
    ins2_fundingsource: edit ? activeClient[21].ins2_fundingsource : "",
    allergies: edit ? activeClient[21].allergies : "",
    physicianid: edit ? parseInt(activeClient[21].physicianid) : 0,
    pharmacy: edit ? activeClient[21].pharmacy : "",
    pharmacyproviderid: edit
      ? parseInt(activeClient[21].pharmacyproviderid)
      : 0,
    patient_comment: edit ? activeClient[22].patient_comment : "",
    referralid: edit ? parseInt(activeClient[22].referralid) : 0,
    referraldate: edit ? Date.parse(activeClient[22].referraldate) : Date.now(),
    dxdate: edit ? Date.parse(activeClient[22].dxdate) : Date.now(),
    internalreferralid: edit
      ? parseInt(activeClient[22].internalreferralid)
      : 0,
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
export const defaultPC = {
  paddress: true,
  pcity: true,
  pstate: true,
  pZip: true,
  pphone1: true,
  pphone1type: true,
  pphone2: true,
  pphone2type: true,
  pphone3: true,
  pphone3type: true,
};

export const defaultEC = {
  ecName: true,
  ecAddress: true,
  ecCity: true,
  ecState: true,
  ecZip: true,
  ecPhone: true,
  ecPhoneType: true,
  ecRelationship: true,
};
export const parseFormData = (
  data,
  editing,
  tempID,
  activeClient,
  activeContacts
) => {
  const t20 = parseFormData20(data, editing, tempID, activeClient);
  const t21 = parseFormData21(data, editing, tempID, activeClient);
  const t22 = parseFormData22(data, editing, tempID, activeClient);
  const patientContact = parsePatientContact(data, editing, activeContacts);
  const emergencyContact = parseEmergencyContact(data, editing, activeContacts);
  return { t20, t21, t22, patientContact, emergencyContact };
};
export const parsePhoneNumber = (value, setValue, fieldName) => {
  // Get the current value of the phone number field

  // Use regular expressions or string manipulation techniques
  // to add the desired formatting to the phone number
  const formattedValue = value.replace(/\D/g, "").substring(0, 10);
  let formattedValueWithDashes;
  if (formattedValue.length >= 7) {
    formattedValueWithDashes = formattedValue.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
  } else if (formattedValue.length >= 4) {
    formattedValueWithDashes = formattedValue.replace(
      /(\d{3})(\d{3})/,
      "($1) $2"
    );
  } else {
    formattedValueWithDashes = formattedValue;
  }

  console.log(formattedValue);
  // Update the value of the phone number field in the form data object
  setValue(fieldName, formattedValueWithDashes);
};
