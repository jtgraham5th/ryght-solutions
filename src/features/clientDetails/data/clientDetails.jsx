import { getFormValue } from "../../clientDetails/utils/formatData";

export const dataArray1 = (formData, activeClient) => {
  return [
    { field: "DOB", value: activeClient[20].dob },
    { field: "Height", value: activeClient[21].height },
    { field: "Weight", value: activeClient[21].weight },
    {
      field: "Marital Status",
      value: getFormValue(
        "Marital Status",
        activeClient[20].maritalstatusid,
        formData
      ),
    },
    {
      field: "Ethnicity",
      value: getFormValue("Ethnicity", activeClient[20].ethnicityid, formData),
    },
  ];
};
export const dataArray2 = (formData, activeClient) => {
  return [
    {
      field: "Sex At Birth",
      value: getFormValue(
        "Sex At Birth",
        activeClient[20].sexatbirthid,
        formData
      ),
    },
    {
      field: "Gender Identity",
      value: getFormValue(
        "Gender Identity",
        activeClient[20].genderid,
        formData
      ),
    },
    {
      field: "Preferred Pronouns",
      value: getFormValue(
        "Preferred Pronouns",
        activeClient[20].preferredpronounid,
        formData
      ),
    },
    {
      field: "Religion",
      value: getFormValue("Religion", activeClient[20].religionid, formData),
    },
  ];
};
