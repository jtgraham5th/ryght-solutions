import ABPS1 from "../components/ABPS_1";
import ABSP10 from "../components/ABPS_10";
import ABSP11 from "../components/ABPS_11";
import ABSP12 from "../components/ABPS_12";
import ABSP13 from "../components/ABPS_13";
import ABSP14 from "../components/ABPS_14";
import ABSP15 from "../components/ABPS_15";
import ABPS2 from "../components/ABPS_2";
import ABSP3 from "../components/ABPS_3";
import ABSP4 from "../components/ABPS_4";
import ABSP5 from "../components/ABPS_5";
import ABSP6 from "../components/ABPS_6";
import ABSP7 from "../components/ABPS_7";
import ABSP8 from "../components/ABPS_8";
import ABSP9 from "../components/ABPS_9";
import ANSA1 from "../components/ANSA_1";
import ANSA2 from "../components/ANSA_2";
import ANSA3 from "../components/ANSA_3";
import BPS1 from "../components/BPS_1";
import BSP10 from "../components/BPS_10";
import BSP11 from "../components/BPS_11";
import BSP12 from "../components/BPS_12";
import BSP13 from "../components/BPS_13";
import BPS2 from "../components/BPS_2";
import BSP3 from "../components/BPS_3";
import BSP4 from "../components/BPS_4";
import BSP5 from "../components/BPS_5";
import BSP6 from "../components/BPS_6";
import BSP7 from "../components/BPS_7";
import BSP8 from "../components/BPS_8";
import BSP9 from "../components/BPS_9";
import CANS1 from "../components/CANS_1";
import CANS2 from "../components/CANS_2";
import CANS3 from "../components/CANS_3";
import CANS4 from "../components/CANS_4";
import CANS5 from "../components/CANS_5";
import CE1 from "../components/CE_1";
import CE2 from "../components/CE_2";
import CE3 from "../components/CE_3";
import CE4 from "../components/CE_4";
import SA1 from "../components/SA_1";
import SA2 from "../components/SA_2";
import SA3 from "../components/SA_3";
import SA4 from "../components/SA_4";
import SA5 from "../components/SA_5";

export const personalDataOptions = [
  "Client is under 18 years of age",
  "Client has been sexually abused",
  "Pregnancy/Post-Partum Priority",
  "Client has 504",
  "Client cannot return for services",
  "Client Substance Abuse",
  "Include data with HIE",
  "Client has allergies",
  "Client request transportation",
  "Opiate Substitutions",
  "Client has IEP",
  "Court Ordered",
  "Suicide Risk",
];
export const client01 = {
  name: "Jane Doe",
  sex: "male",
  DOB: "01/01/2000",
  age: 22,
  INS: "BXBS",
  treatmentPlan: {
    goals: [
      {
        goalName: "Anxiety",
        status: "New Goal Created",
        openDate: "4/22/2022",
        targetDate: "5/11/2022",
        addedDate: "5/11/2022",
        frequency: "N/A",
        measurement: { number: "1-4", unit: "months" },
        description:
          "Description of the Entire Goal goes here. Client will takes steps to reduce Anxiety by 2023",
        comments: "",
        objectives: [
          {
            objectiveName: "Objective A-01",
            parentGoal: "Anxiety",
            openDate: "4/22/2022",
            targetDate: "5/11/2022",
            status: "New Goal Created",
            description: "Description of Objecitive A-01",
            interventions: [
              {
                parentGoal: "Anxiety",
                parentObjective: "Objective A-01",
                status: "New Goal Created",
                services: "",
                frequency: "",
                staffType: "",
                description: "Description of Intervention for A-01 ",
              },
            ],
          },
        ],
      },
      {
        goalName: "Depression",
        status: "New Goal Created",
        openDate: "6/22/2021",
        targetDate: "9/05/2021",
        addedDate: "6/11/2021",
        goalFrequency: "N/A",
        measurement: { number: "12", unit: "months" },
        description: "The entire goal",
        comments: "",
        objectives: [
          {
            objectiveName: "Objective D-01",
            parentGoal: "Depression",
            openDate: "4/22/2022",
            targetDate: "5/11/2022",
            status: "New Goal Created",
            description: "Description of Objecitive D-01",
            interventions: [
              {
                parentGoal: "Depression",
                parentObjective: "Objective D-01",
                status: "New Goal Created",
                services: "",
                frequency: "",
                staffType: "",
                description: "Description of Intervention for Objective D-01",
              },
            ],
          },
          {
            objectiveName: "Objective D-02",
            parentGoal: "Depression",
            openDate: "4/22/2022",
            targetDate: "5/11/2022",
            status: "New Objective Created",
            description: "Description of Objecitive D-01",
            interventions: [
              {
                parentGoal: "Depression",
                parentObjective: "Objective D-02",
                status: "New Intervention Created",
                services: "",
                frequency: "",
                staffType: "",
                description:
                  "Description of First Intervention for Objective D-02",
              },
              {
                parentGoal: "Depression",
                parentObjective: "Objective D-02",
                status: "New Intervention Created",
                services: "",
                frequencey: "",
                staffType: "",
                description:
                  "Description of Second Intervention for Objective D-02",
              },
            ],
          },
        ],
      },
    ],
  },
  progressNotes: [
    {
      serviceCode: "Open this select menu",
      serviceDelivered: "Open this select menu",
      setting: "Open this select menu",
      optPrintInfo: false,
      attachments: false,
      personInvolved: false,
      contactType: "Open this select menu",
      dateOfService: "2022-09-09T04:00:00.000Z",
      timeStart: "2022-09-23T15:45:00.812Z",
      timeEnd: "2022-09-23T16:00:00.386Z",
      consumerAffect: null,
      medChanges: null,
      medChangesComments: "",
      progressMet: "Open this select menu",
      progressComments: "",
      progBehavior: "",
      progIntervention: "",
      progResponse: "",
      progPlan: "",
      goal: "Anxiety",
      objective: "objective 1",
      intervention: "inervention 001",
    },
  ],
};
export const abcObject = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: [],
  h: [],
  i: [],
  j: [],
  k: [],
  l: [],
  m: [],
  n: [],
  o: [],
  p: [],
  q: [],
  r: [],
  s: [],
  t: [],
  u: [],
  v: [],
  w: [],
  x: [],
  y: [],
  z: [],
};
export const statesList = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

export const renderClientEnrollment = (activePage, register, control) => {
  switch (activePage) {
    case 0:
      return <CE1 register={register} control={control} />;
    case 1:
      return <CE2 register={register} control={control} />;
    case 2:
      return <CE3 register={register} control={control} />;
    case 3:
      return <CE4 register={register} control={control} />;
    default:
      return <CE1 register={register} control={control} />;
  }
};
export const renderShortAssesment = (activePage, register, control) => {
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
export const requirements = [
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
