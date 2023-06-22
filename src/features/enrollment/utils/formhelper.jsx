import { OrderOfService } from "../../services/components/OrderOfServices";
import { CE1 } from "../components/CE_1";
import { CE2 } from "../components/CE_2";
import { CE3 } from "../components/CE_3";
import { parseDefaultValues } from "./parseData";

export const hasSCDXFieldsChanged = (getValues, editing, activeClient) => {
  const serviceCodesValue = getValues("servicecodes");
  const dxCodesValue = getValues("dxcodes");
  const defaultValues = parseDefaultValues(editing, activeClient);
  return (
    serviceCodesValue !== defaultValues.servicecodes ||
    dxCodesValue !== defaultValues.dxcodes
  );
};
export const formatHeight = (height) => {
  if (typeof height === "number") {
    const newheight = height.toString().split("");
    return `${newheight[0]}'${newheight[1] ? newheight[1] : ""}${
      newheight[2] ? newheight[2] : ""
    }`;
  } else if (typeof height === "string") {
    const newheight = height.split("");
    return parseInt(newheight[0] + newheight[2] + newheight[3]);
  }
};
export const renderSectionTitle = (sectionTitle) => {
  return sectionTitle ? sectionTitle.split(/(?=[A-Z])/).join(" ") : "";
};
export const hasPCFieldsChanged = (dirtyFields, defaultPC) => {
  return Object.keys(dirtyFields).some((value) =>
    Object.keys(defaultPC).includes(value)
  );
};

export const hasECFieldsChanged = (dirtyFields, defaultEC) => {
  return Object.keys(dirtyFields).some((value) =>
    Object.keys(defaultEC).includes(value)
  );
};
export const clientHasDoctype = (docType, activeBillingTx) => {
  return activeBillingTx.some((tx) => tx.doctypeid === docType);
};
export const renderPage = (
  activePage,
  register,
  control,
  formState,
  setValue
) => {
  switch (activePage) {
    case 0:
      return (
        <CE1
          register={register}
          control={control}
          setValue={setValue}
          formState={formState}
        />
      );
    case 1:
      return (
        <CE2
          register={register}
          control={control}
          setValue={setValue}
          formState={formState}
        />
      );
    case 2:
      return (
        <CE3
          register={register}
          control={control}
          formState={formState}
          setValue={setValue}
        />
      );
    // case 3:
    //   return (
    //     <OrderOfService
    //       register={register}
    //       control={control}
    //       formState={formState}
    //       setValue={setValue}
    //       edit={true}
    //     />
    //   );
    default:
      return (
        <CE1 register={register} control={control} formState={formState} />
      );
  }
};
