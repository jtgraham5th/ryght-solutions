export const defaultContact = {
  contactid: 0,
  name: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: 0,
  contacttypeid: 0,
  patientid: 0,
  relationshipid: 0,
  phone1: 0,
  phone1typeid: 0,
  phone2: 0,
  phone2typeid: 0,
  phone3: 0,
  phone3typeid: 0,
  countyid: 0,
  isactive: 1,
};
export const defaultListItem = {
  grouplistid: 0,
  groupvalue: 0,
  isactive: 1,
  groupid: 0,
};
export const getDirtyFields = (obj, excludeKey) => {
  let fields = Object.keys(obj);
  if (excludeKey) {
    fields = fields.filter((key) => key !== excludeKey);
  }
  return fields.join(",");
};
export const filterObjectByKeys = (obj, keysObj) => {
  const filteredObj = {};
  for (const key in obj) {
    if (keysObj.hasOwnProperty(key)) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
};
export const createServiceGroupCodeString = (groupServiceCodes) => {
  if (!groupServiceCodes || !Array.isArray(groupServiceCodes)) {
    return "";
  }
  
  const groupServiceCodesArray = [];
  groupServiceCodes.forEach((item) => {
    if (item && item.recid) {
      groupServiceCodesArray.push(item.recid);
    }
  });

  return groupServiceCodesArray.join(",");
};
