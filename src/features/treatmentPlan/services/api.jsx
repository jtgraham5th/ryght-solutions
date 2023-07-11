const apiUrl = process.env.REACT_APP_API_URL;
// const rptUrl = process.env.REACT_APP_RPT_URL;

//// TREATMENT PLAN /////
export const getTreatmentPlan = async (patientid) => {
  return await fetch(
    `${apiUrl}generic_api/list/16?fields=*&where=patientid=${patientid},docid=1&orderby=billingid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateTreatmentPlan = async (tPlan) => {
  const fields = Object.keys(tPlan[0]).join(",");
  console.log(fields);
  return await fetch(
    `${apiUrl}generic_api/${tPlan[0].recid}?tid=16&fields=${fields}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tPlan),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewTreatmentPlan = async (newTPlan) => {
  return await fetch(`${apiUrl}generic_api/16?fields=recid`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTPlan),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};

//// GOALS ////
export const getAllGoals = async () => {
  return await fetch(
    `${apiUrl}generic_api/list/18?fields=*&where=StatusID=0&orderby=goalid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAllPatientGoals = async (patientid) => {
  return await fetch(
    `${apiUrl}generic_api/list/18?fields=*&where=patientid=${patientid}&orderby=goalid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getGoalwithBillingid = async (billingid) => {
  return await fetch(
    `${apiUrl}generic_api/list/18?fields=*&where=billingid=${billingid}&orderby=goalid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = Object.fromEntries(
        Object.entries(data[0]).map(([k, v]) => [k.toLowerCase(), v])
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getGoalwithGoalid = async (goalid) => {
  return await fetch(`${apiUrl}generic_api/${goalid}?tid=18`)
    .then((response) => response.json())
    .then((data) => {
      const formattedData = Object.fromEntries(
        Object.entries(data[0]).map(([k, v]) => [k.toLowerCase(), v])
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewGoal = async (newGoal) => {
  return await fetch(`${apiUrl}generic_api/18?fields=goalid`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGoal),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateGoal = async (updatedGoal) => {
  const fields = Object.keys(updatedGoal[0]).join(",");
  return await fetch(
    `${apiUrl}generic_api/${updatedGoal[0].goalid}?tid=18&fields=${fields}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGoal),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
//// OBJECTIVES ////
export const getAllObjectives = async () => {
  return await fetch(
    `${apiUrl}generic_api/list/26
      ?fields=*&where=StatusID=0&orderby=objectiveid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAllPatientObjectives = async (patientid) => {
  return await fetch(
    `${apiUrl}generic_api/list/26?fields=*&where=patientid=${patientid}&orderby=goalid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getObjectivesWithGoalid = async (goalid) => {
  return await fetch(
    `${apiUrl}generic_api/list/26?fields=*&where=goalid=${goalid}&orderby=objectiveid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getObjectivewithObjectiveid = async (objectiveid) => {
  return await fetch(
    `${apiUrl}generic_api/${objectiveid}?tid=26
      `
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = Object.fromEntries(
        Object.entries(data[0]).map(([k, v]) => [k.toLowerCase(), v])
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewObjective = async (newObjective) => {
  return await fetch(`${apiUrl}generic_api/26?fields=objectiveid`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObjective),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateObjective = async (updatedObjective) => {
  const trimObjective = { ...updatedObjective[0] };
  delete trimObjective["objectiveid"];
  const fields = Object.keys(trimObjective).join(",");
  return await fetch(
    `${apiUrl}generic_api/${updatedObjective[0].objectiveid}?tid=26&fields=${fields}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([trimObjective]),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};

//// INTERVENTIONS ////
export const getAllInterventions = async () => {
  return await fetch(
    `${apiUrl}generic_api/list/27
        ?fields=*&where=LastUpdateID=680&orderby=interventionid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getAllPatientInterventions = async (patientid) => {
  return await fetch(
    `${apiUrl}generic_api/list/27?fields=*&where=patientid=${patientid}&orderby=interventionid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getInterventionsWithPatientid = async (patientid) => {
  return await fetch(
    `${apiUrl}generic_api/list/27?fields=*&where=patientid=${patientid}&orderby=interventionid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getInterventionsWithObjectiveid = async (objectiveid) => {
  return await fetch(
    `${apiUrl}generic_api/list/27?fields=*&where=objectiveid=${objectiveid}&orderby=interventionid`
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((obj) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        )
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getInterventionwithInterventionid = async (interventionid) => {
  return await fetch(
    `${apiUrl}generic_api/${interventionid}?tid=27
        `
  )
    .then((response) => response.json())
    .then((data) => {
      const formattedData = Object.fromEntries(
        Object.entries(data[0]).map(([k, v]) => [k.toLowerCase(), v])
      );
      return formattedData;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewIntervention = async (newIntervention) => {
  return await fetch(
    `${apiUrl}generic_api/27?fields=interventionid
        `,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIntervention),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateIntervention = async (updatedIntervention) => {
  const trimIntervention = { ...updatedIntervention[0] };
  delete trimIntervention["interventionid"];
  const fields = Object.keys(trimIntervention).join(",");

  return await fetch(
    `${apiUrl}generic_api/${updatedIntervention[0].interventionid}?tid=27&fields=${fields}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([trimIntervention]),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
