//// TREATMENT PLAN /////
export const getTreatmentPlan = async (patientid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/16?listing=patientid=${patientid},docid=1&orderby=billingid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateTreatmentPlan = async (tPlan) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${tPlan[0].recid}?tid=16`,
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
export const addNewTreatementPlan = async (newTPlan) => {
  return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/16`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTPlan),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};

//// GOALS ////
export const getAllGoals = async () => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/18?listing=patientid&orderby=goalid`
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
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/18?listing=patientid=${patientid}&orderby=goalid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getGoalwithBillingid = async (billingid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/18?listing=billingid=${billingid}&orderby=goalid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getGoalwithGoalid = async (goalid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${goalid}?tid=18`
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewGoal = async (newGoal) => {
  return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/18`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGoal),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateGoal = async (updatedGoal) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${updatedGoal[0].goalid}?tid=18`,
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
      console.log(data[0]);
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
//// OBJECTIVES ////
export const getAllObjectives = async () => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/26
      ?listing=patientid&orderby=goalid`
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
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/26
      ?listing=patientid=${patientid}&orderby=goalid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getObjectivesWithGoalid = async (goalid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/26?listing=goalid=${goalid}&orderby=objectiveid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getObjectivewithObjectiveid = async (objectiveid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${objectiveid}?tid=26
      `
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewObjective = async (newObjective) => {
  return await fetch(`http://www.ivronlogs.icu:8080/rs1/generic_api/26`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObjective),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const updateObjective = async (updatedObjective) => {
  console.log(updatedObjective);
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${updatedObjective[0].objectiveid}?tid=26`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedObjective),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};

//// INTERVENTIONS ////
export const getAllInterventions = async () => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/27
        ?listing=patientid&orderby=goalid`
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
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/27
        ?listing=patientid=${patientid}&orderby=interventionid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getInterventionsWithPatientid = async (patientid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/27?listing=patientid=${patientid}&orderby=interventionid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getInterventionsWithObjectiveid = async (objectiveid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/list/27?listing=objectiveid=${objectiveid}&orderby=interventionid`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
export const getInterventionwithInterventionid = async (interventionid) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${interventionid}?tid=27
        `
  )
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addNewIntervention = async (newIntervention) => {
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/27
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
  return await fetch(
    `http://www.ivronlogs.icu:8080/rs1/generic_api/${updatedIntervention[0].interventionid}?tid=27`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedIntervention),
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
