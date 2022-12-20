import { CE1 } from "../components/CE_1";
import { CE2 } from "../components/CE_2";
import { CE3 } from "../components/CE_3";

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
        <CE1 register={register} control={control} formState={formState} />
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
        <CE3 register={register} control={control} formState={formState} />
      );
    default:
      return (
        <CE1 register={register} control={control} formState={formState} />
      );
  }
};
