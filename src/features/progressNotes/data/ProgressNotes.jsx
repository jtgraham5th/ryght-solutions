
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