import { OrderOfService } from "../../services/components/OrderOfServices";
import ABPS1 from "../forms/ABPS/ABPS_1";
import ABSP10 from "../forms/ABPS/ABPS_10";
import ABSP11 from "../forms/ABPS/ABPS_11";
import ABSP12 from "../forms/ABPS/ABPS_12";
import ABSP13 from "../forms/ABPS/ABPS_13";
import ABSP14 from "../forms/ABPS/ABPS_14";
import ABSP15 from "../forms/ABPS/ABPS_15";
import ABPS2 from "../forms/ABPS/ABPS_2";
import ABSP3 from "../forms/ABPS/ABPS_3";
import ABSP4 from "../forms/ABPS/ABPS_4";
import ABSP5 from "../forms/ABPS/ABPS_5";
import ABSP6 from "../forms/ABPS/ABPS_6";
import ABSP7 from "../forms/ABPS/ABPS_7";
import ABSP8 from "../forms/ABPS/ABPS_8";
import ABSP9 from "../forms/ABPS/ABPS_9";
import ANSA1 from "../forms/ANSA/ANSA_1";
import ANSA2 from "../forms/ANSA/ANSA_2";
import ANSA3 from "../forms/ANSA/ANSA_3";
import BPS1 from "../forms/BPS/BPS_1";
import BSP10 from "../forms/BPS/BPS_10";
import BSP11 from "../forms/BPS/BPS_11";
import BSP12 from "../forms/BPS/BPS_12";
import BSP13 from "../forms/BPS/BPS_13";
import BPS2 from "../forms/BPS/BPS_2";
import BSP3 from "../forms/BPS/BPS_3";
import BSP4 from "../forms/BPS/BPS_4";
import BSP5 from "../forms/BPS/BPS_5";
import BSP6 from "../forms/BPS/BPS_6";
import BSP7 from "../forms/BPS/BPS_7";
import BSP8 from "../forms/BPS/BPS_8";
import BSP9 from "../forms/BPS/BPS_9";
import CANS1 from "../forms/CANS/CANS_1";
import CANS2 from "../forms/CANS/CANS_2";
import CANS3 from "../forms/CANS/CANS_3";
import CANS4 from "../forms/CANS/CANS_4";
import CANS5 from "../forms/CANS/CANS_5";
import SA1 from "../forms/SA/SA_1";
import SA2 from "../forms/SA/SA_2";
import SA3 from "../forms/SA/SA_3";
import SA4 from "../forms/SA/SA_4";
import SA5 from "../forms/SA/SA_5";

export const renderShortAssessment = (activePage, register, control) => {
  switch (activePage) {
    case 0:
      return <SA1 register={register} control={control} />;
    case 1:
      return <SA2 register={register} control={control} />;
    case 2:
      return <SA3 register={register} control={control} />;
    case 3:
      return <SA4 register={register} control={control} />;
    case 4:
      return <SA5 register={register} control={control} />;
    default:
      return <SA1 register={register} control={control} />;
  }
};
export const renderAdolescentBPS = (activePage, register, control) => {
  switch (activePage) {
    case 0:
      return <BPS1 register={register} control={control} />;
    case 1:
      return <BPS2 register={register} control={control} />;
    case 2:
      return <BSP3 register={register} control={control} />;
    case 3:
      return <BSP4 register={register} control={control} />;
    case 4:
      return <BSP5 register={register} control={control} />;
    case 5:
      return <BSP6 register={register} control={control} />;
    case 6:
      return <BSP7 register={register} control={control} />;
    case 7:
      return <BSP8 register={register} control={control} />;
    case 8:
      return <BSP9 register={register} control={control} />;
    case 9:
      return <BSP10 register={register} control={control} />;
    case 10:
      return <BSP11 register={register} control={control} />;
    case 11:
      return <BSP12 register={register} control={control} />;
    case 12:
      return <BSP13 register={register} control={control} />;
    default:
      return <SA1 register={register} control={control} />;
  }
};
export const renderAdultBPS = (activePage, register, control) => {
  switch (activePage) {
    case 0:
      return <ABPS1 register={register} control={control} />;
    case 1:
      return <ABPS2 register={register} control={control} />;
    case 2:
      return <ABSP3 register={register} control={control} />;
    case 3:
      return <ABSP4 register={register} control={control} />;
    case 4:
      return <ABSP5 register={register} control={control} />;
    case 5:
      return <ABSP6 register={register} control={control} />;
    case 6:
      return <ABSP7 register={register} control={control} />;
    case 7:
      return <ABSP8 register={register} control={control} />;
    case 8:
      return <ABSP9 register={register} control={control} />;
    case 9:
      return <ABSP10 register={register} control={control} />;
    case 10:
      return <ABSP11 register={register} control={control} />;
    case 11:
      return <ABSP12 register={register} control={control} />;
    case 12:
      return <ABSP13 register={register} control={control} />;
    case 13:
      return <ABSP14 register={register} control={control} />;
    case 14:
      return <ABSP15 register={register} control={control} />;
    default:
      return <SA1 register={register} control={control} />;
  }
};
export const renderCANS = (activePage, register, control) => {
  switch (activePage) {
    case 0:
      return <CANS1 register={register} control={control} />;
    case 1:
      return <CANS2 register={register} control={control} />;
    case 2:
      return <CANS3 register={register} control={control} />;
    case 3:
      return <CANS4 register={register} control={control} />;
    case 4:
      return <CANS5 register={register} control={control} />;
    default:
      return <CANS1 register={register} control={control} />;
  }
};
export const renderANSA = (activePage, register, control) => {
  switch (activePage) {
    case 0:
      return <ANSA1 register={register} control={control} />;
    case 1:
      return <ANSA2 register={register} control={control} />;
    case 2:
      return <ANSA3 register={register} control={control} />;
    default:
      return <ANSA1 register={register} control={control} />;
  }
};
export const renderOrderOfService = (
  activePage,
  register,
  control,
  setValue,
  edit
) => {
  return (
    <OrderOfService
      register={register}
      control={control}
      setValue={setValue}
      edit={edit}
    />
  );
};
export const renderUnavailable = () => (
  <div >
    <h3 className="text-muted text-center">
      This document is currently unavailable.
    </h3>
    <h5 className="fw-lighter text-center">
      Please check back soon, for updates.
    </h5>
  </div>
);

export const documents = [
  {
    name: "Adolescent Biopsychosocial Assessment",
    type: "assessment",
    pages: 12,
    doctypeid: "4",
  },
  {
    name: "Adult Biopsychosocial Assessment",
    type: "assessment",
    pages: 15,
    doctypeid: "5",
  },
  {
    name: "Child and Adolescent Needs and Strengths (CASA)",
    type: "assessment",
    pages: 5,
    doctypeid: "6",
  },
  {
    name: "Adult Needs and Strengths Assessment (ANSA)",
    type: "assessment",
    pages: 3,
    doctypeid: "7",
  },
  {
    name: "C-SSRS Adolescent - Lifetime Recent (Initial/Annual)",
    type: "assessment",
    pages: 10,
    doctypeid: "8",
  },
  {
    name: "C-SSRS Adult - Lifetime Recent (Initial/Annual)",
    type: "assessment",
    pages: 10,
    doctypeid: "9",
  },
  {
    name: "Order of Services",
    type: "assessment",
    pages: 10,
    doctypeid: "10",
  },
];
