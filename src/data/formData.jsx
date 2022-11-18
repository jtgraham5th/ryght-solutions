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
export const statesList = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO','MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

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