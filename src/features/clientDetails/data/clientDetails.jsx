import { getFormValue } from "../../clientDetails/utils/formatData";
import { formatHeight } from "../../enrollment/utils/formhelper";

export const dataArray1 = (formData, activeClient) => {
  return [
    { field: "DOB", value: activeClient.dob },
    { field: "Height", value: formatHeight(parseInt(activeClient.height)) },
    { field: "Weight", value: activeClient.weight },
    {
      field: "Marital Status",
      value: getFormValue(
        "Marital Status",
        activeClient.maritalstatusid,
        formData
      ),
    },
    {
      field: "Ethnicity",
      value: getFormValue("Ethnicity", activeClient.ethnicityid, formData),
    },
  ];
};
export const dataArray2 = (formData, activeClient) => {
  return [
    {
      field: "Sex At Birth",
      value: getFormValue(
        "Sex At Birth",
        activeClient.sexatbirthid,
        formData
      ),
    },
    {
      field: "Gender Identity",
      value: getFormValue(
        "Gender Identity",
        activeClient.genderid,
        formData
      ),
    },
    {
      field: "Preferred Pronouns",
      value: getFormValue(
        "Preferred Pronouns",
        activeClient.preferredpronounid,
        formData
      ),
    },
    {
      field: "Religion",
      value: getFormValue("Religion", activeClient.religionid, formData),
    },
  ];
};
