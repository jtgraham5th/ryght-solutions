import formatDate from "../../utils/formatDate";

export function calculateHours(startTime, endTime) {
  const diffInMilliseconds = Math.abs(startTime.getTime() - endTime.getTime());
  const diffInMinutes = Math.round(diffInMilliseconds / 1000 / 60);
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;
  return hours + ":" + minutes;
}
export function calculateUnits(startTime, endTime) {
  const diffInMilliseconds = Math.abs(startTime.getTime() - endTime.getTime());
  const diffInMinutes = Math.round(diffInMilliseconds / 1000 / 60);
  return Math.ceil(diffInMinutes / 15);
}
export const parseAuthorization = (authorization, patientid) => {
  return [
    {
      authrecid: authorization.authrecid ? authorization.authrecid : 0,
      patientid: authorization.patientid
        ? parseInt(authorization.patientid)
        : patientid,
      status: authorization.status ? parseInt(authorization.status) : 1,
      effectivedate: authorization.effectivedate
        ? formatDate("YYYY-MM-DD",authorization.effectivedate)
        : formatDate("YYYY-MM-DD",Date.now()),
      lapsedate: authorization.lapsedate
        ? formatDate("YYYY-MM-DD",authorization.lapsedate)
        : formatDate("YYYY-MM-DD",Date.now()),
      approvaldate: authorization.approvaldate
        ? formatDate("YYYY-MM-DD",authorization.approvaldate)
        : formatDate("YYYY-MM-DD",Date.now()),
      submitdate: authorization.submitdate
        ? formatDate("YYYY-MM-DD",authorization.submitdate)
        : formatDate("YYYY-MM-DD",Date.now()),
      submittedby: authorization.submittedby ? authorization.submittedby : 0,
      authorizationid: authorization.authorizationid
        ? parseInt(authorization.authorizationid)
        : 0,
      comments: authorization.comments ? authorization.comments : "",
    },
  ];
};
export const newAuthorization = () => {
  return {
    authrecid: 0,
    patientid: 0,
    status: 0,
    effectivedate: null,
    lapsedate: null,
    approvaldate: null,
    submitdate: null,
    submittedby: 0,
    authorizationid: 0,
    comments: "",
  };
};

export const parseDefaultAuthorization = (authorization) => {
  return {
    authrecid: authorization.authrecid,
    patientid: authorization.patientid,
    status: authorization.status,
    effectivedate: Date.parse(authorization.effectivedate),
    lapsedate: Date.parse(authorization.lapsedate),
    approvaldate: Date.parse(authorization.approvaldate),
    submitdate: Date.parse(authorization.submitdate),
    submittedby: authorization.submittedby,
    authorizationid: authorization.authorizationID,
    comments: authorization.comments,
  };
};
export const parseAuthService = (authorization, authrecid) => {
  return [
    {
      recid: authorization && authorization.recid ? authorization.recid : 0,
      authrecid: authrecid ? parseInt(authrecid) : 0,
      serviceid:
        authorization && authorization.serviceid
          ? parseInt(authorization.serviceid)
          : 0,
      servicecodes:
        authorization && authorization.servicecodes
          ? authorization.servicecodes
          : "",
      maxunits:
        authorization && authorization.maxunits
          ? parseInt(authorization.maxunits)
          : 0,
      frequencyid:
        authorization && authorization.frequencyid
          ? parseInt(authorization.frequencyid)
          : 0,
      frequencyunits:
        authorization && authorization.frequencyunits
          ? parseInt(authorization.frequencyunits)
          : 0,
    },
  ];
};
export const parseDefaultAuthService = (authorization) => {
  return [
    {
      recid: authorization.recid,
      authrecid: authorization.authrecid,
      serviceid: authorization.serviceid,
      servicecodes: authorization.servicecodes.split(","),
      maxunits: authorization.maxunits,
      frequencyid: authorization.frequencyid,
      frequencyunits: authorization.frequencyunits,
    },
  ];
};
export const parseServices = (services, serviceCodes, serviceArray) => {
  services.forEach((service) => {
    const foundService = serviceCodes.find((item) => {
      return item.code === service;
    });
    if (foundService) {
      serviceArray.push(foundService);
    }
  });
};
export const parseDX = (diagnosis, dxCodes, dxArray) => {
  diagnosis.forEach((dx) => {
    const foundDX = dxCodes.find((item) => item.code === dx);
    if (foundDX) {
      dxArray.push(foundDX);
    }
  });
};
export const parseGOI = (
  activeTreatmentPlan,
  setSelectedGoal,
  pnGoal,
  pnObjective,
  pnIntervention
) => {
  const findGoal = activeTreatmentPlan.goals.find(
    (goal) => goal.description === pnGoal
  );
  const objectives = findGoal
    ? activeTreatmentPlan.objectives.filter(
        (obj, i) => obj.goalid === findGoal.goalid
      )
    : [];
  const findObjective = objectives.find(
    (objective) => objective.description === pnObjective
  );
  const interventions = findObjective
    ? activeTreatmentPlan.interventions.filter(
        (int, i) => int.objectiveid === findObjective.objectiveid
      )
    : [];
  const findIntervention = interventions.find(
    (intervention) => intervention.description === pnIntervention
  );
  setSelectedGoal({
    goal: findGoal ? findGoal : null,
    objective: findObjective ? findObjective : null,
    intervention: findIntervention ? findIntervention : null,
  });
};
