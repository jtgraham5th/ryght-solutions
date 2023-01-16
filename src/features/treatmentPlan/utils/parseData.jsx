import formatDate from "../../../utils/formatDate";

export const parseTreatmentPlan = (tPlan, patientid, activeClient, billingid, ) => {
  return [
    {
      recid: tPlan.recid ? tPlan.recid : 0,
      pageid: tPlan.pageid ? tPlan.pageid : 1,
      docid: tPlan.docid ? tPlan.docid : 1,
      patientid: tPlan.patientid ? tPlan.patientid : patientid,
      billingid: tPlan.billingid ? tPlan.billingid : billingid,
      f1: tPlan.f1 ? formatDate(tPlan.f1) : formatDate(Date.now()),
      f2: tPlan.f2 ? formatDate(tPlan.f2) : formatDate(Date.now()),
      f3: tPlan.f3 ? formatDate(tPlan.f3) : formatDate(Date.now()),
      f4: tPlan.f4 ? tPlan.f4 : "",
      f5: tPlan.f5 ? tPlan.f5 : "",
      f6: tPlan.f6 ? tPlan.f6 : "",
      f7: tPlan.f7 ? tPlan.f7 : "",
      f8: tPlan.f8 ? tPlan.f8 : "",
      f9: tPlan.f9 ? formatDate(tPlan.f9) : formatDate(Date.now()),
      f10: tPlan.f10 ? tPlan.f10 : "",
      f11: activeClient[22].servicecodes ? activeClient[22].servicecodes : "",
      f12: tPlan.f12 ? tPlan.f12 : "",
      f13: tPlan.f13 ? tPlan.f13 : "",
      f14: tPlan.f14 ? tPlan.f14 : "",
      f15: tPlan.f15 ? tPlan.f15 : "",
      f16: tPlan.f16 ? tPlan.f16 : "",
      f17: tPlan.f17 ? tPlan.f17 : "",
      f18: tPlan.f18 ? tPlan.f18 : "",
      f19: tPlan.f19 ? tPlan.f19 : "",
      f20: tPlan.f20 ? tPlan.f20 : "",
      f21: tPlan.f21 ? tPlan.f21 : "",
      f22: tPlan.f22 ? tPlan.f22 : "",
      f23: tPlan.f23 ? tPlan.f23 : "",
      f24: tPlan.f24 ? tPlan.f24 : "",
      f25: tPlan.f25 ? tPlan.f25 : "",
      f26: tPlan.f26 ? tPlan.f26 : "",
      f27: tPlan.f27 ? tPlan.f27 : "",
      f28: tPlan.f28 ? tPlan.f28 : "",
      f29: tPlan.f29 ? tPlan.f29 : "",
      f30: tPlan.f30 ? tPlan.f30 : "",
      f31: tPlan.f31 ? tPlan.f31 : "",
      f32: tPlan.f32 ? tPlan.f32 : "",
      f33: tPlan.f33 ? tPlan.f33 : "",
      f34: tPlan.f34 ? tPlan.f34 : "",
      f35: tPlan.f35 ? tPlan.f35 : "",
      f36: tPlan.f36 ? tPlan.f36 : "",
      f37: tPlan.f37 ? tPlan.f37 : "",
      f38: tPlan.f38 ? tPlan.f38 : "",
      f39: tPlan.f39 ? tPlan.f39 : "",
      f40: tPlan.f40 ? tPlan.f40 : "",
      f41: tPlan.f41 ? tPlan.f41 : "",
      f42: tPlan.f42 ? tPlan.f42 : "",
      f43: tPlan.f43 ? tPlan.f43 : "",
      f44: tPlan.f44 ? tPlan.f44 : "",
      f45: tPlan.f45 ? tPlan.f45 : "",
      f46: tPlan.f46 ? tPlan.f46 : "",
      f47: tPlan.f47 ? tPlan.f47 : "",
      f48: tPlan.f48 ? tPlan.f48 : "",
      f49: tPlan.f49 ? tPlan.f49 : "",
      f50: tPlan.f50 ? tPlan.f50 : "",
      f51: tPlan.f51 ? tPlan.f51 : "",
      f52: tPlan.f52 ? tPlan.f52 : "",
      f53: tPlan.f53 ? tPlan.f53 : "",
      f54: tPlan.f54 ? tPlan.f54 : "",
      f55: tPlan.f55 ? tPlan.f55 : "",
      f56: tPlan.f56 ? tPlan.f56 : "",
      f57: tPlan.f57 ? tPlan.f57 : "",
      f58: tPlan.f58 ? tPlan.f58 : "",
      f59: tPlan.f59 ? tPlan.f59 : "",
      f60: tPlan.f60 ? tPlan.f60 : "",
      f61: tPlan.f61 ? tPlan.f61 : "",
      f62: tPlan.f62 ? tPlan.f62 : "",
      f63: tPlan.f63 ? tPlan.f63 : "",
      f64: tPlan.f64 ? tPlan.f64 : "",
      f65: tPlan.f65 ? tPlan.f65 : "",
      f66: tPlan.f66 ? tPlan.f66 : "",
      f67: tPlan.f67 ? tPlan.f67 : "",
      f68: tPlan.f68 ? tPlan.f68 : "",
      f69: tPlan.f69 ? tPlan.f69 : "",
      f70: tPlan.f70 ? tPlan.f70 : "",
    },
  ];
};
export const parseDefaultTreatmentPlan = (tPlan) => {
  return {
    recid: tPlan.recid,
    pageid: tPlan.pageid,
    docid: tPlan.docid,
    patientid: tPlan.patientid,
    billingid: tPlan.billingid,
    f1: Date.now(),
    f2: Date.parse(tPlan.f2),
    f3: Date.parse(tPlan.f3),
    f4: tPlan.f4,
    f5: tPlan.f5,
    f6: tPlan.f6,
    f7: tPlan.f7,
    f8: tPlan.f8,
    f9: Date.now(),
    f10: tPlan.f10,
    f11: tPlan.f11,
    f12: tPlan.f12,
    f13: tPlan.f13,
    f14: tPlan.f14,
    f15: tPlan.f15,
    f16: tPlan.f16,
    f17: tPlan.f17,
    f18: tPlan.f18,
    f19: tPlan.f19,
    f20: tPlan.f20,
    f21: tPlan.f21,
    f22: tPlan.f22,
    f23: tPlan.f23,
    f24: tPlan.f24,
    f25: tPlan.f25,
    f26: tPlan.f26,
    f27: tPlan.f27,
    f28: tPlan.f28,
    f29: tPlan.f29,
    f30: tPlan.f30,
    f31: tPlan.f31,
    f32: tPlan.f32,
    f33: tPlan.f33,
    f34: tPlan.f34,
    f35: tPlan.f35,
    f36: tPlan.f36,
    f37: tPlan.f37,
    f38: tPlan.f38,
    f39: tPlan.f39,
    f40: tPlan.f40,
    f41: tPlan.f41,
    f42: tPlan.f42,
    f43: tPlan.f43,
    f44: tPlan.f44,
    f45: tPlan.f45,
    f46: tPlan.f46,
    f47: tPlan.f47,
    f48: tPlan.f48,
    f49: tPlan.f49,
    f50: tPlan.f50,
    f51: tPlan.f51,
    f52: tPlan.f52,
    f53: tPlan.f53,
    f54: tPlan.f54,
    f55: tPlan.f55,
    f56: tPlan.f56,
    f57: tPlan.f57,
    f58: tPlan.f58,
    f59: tPlan.f59,
    f60: tPlan.f60,
    f61: tPlan.f61,
    f62: tPlan.f62,
    f63: tPlan.f63,
    f64: tPlan.f64,
    f65: tPlan.f65,
    f66: tPlan.f66,
    f67: tPlan.f67,
    f68: tPlan.f68,
    f69: tPlan.f69,
    f70: tPlan.f70,
  };
};
export const parseGoal = (goal, patientid) => {
  return [
    {
      goalid: goal.goalid ? goal.goalid : 0,
      billingid: goal.billingid ? goal.billingid : 4329,
      patientid: goal.patientid ? goal.patientid : patientid,
      targetdate: goal.targetdate
        ? formatDate(goal.targetdate)
        : formatDate(Date.now()),
      description: goal.description ? goal.description : "",
      goalname: goal.goalname ? goal.goalname : "",
      templateid: goal.templateid ? goal.templateid : 0,
      dateclosed: goal.dateclosed
        ? formatDate(goal.dateclosed)
        : formatDate(Date.now()),
      stepdownservice: goal.stepdownservice ? goal.stepdownservice : "",
      stepdowndate: goal.stepdowndate
        ? formatDate(goal.stepdowndate)
        : formatDate(Date.now()),
      dischargedate: goal.dischargedate
        ? formatDate(goal.dischargedate)
        : formatDate(Date.now()),
      dischargeplanning: goal.dischargeplanning ? goal.dischargeplanning : "",
      statusid: goal.statusid ? goal.statusid : 0,
      lastupdateid: goal.lastupdateid ? goal.lastupdateid : 680,
      companyid: goal.companyid ? goal.companyid : 26,
      comment: goal.comment ? goal.comment : "",
    },
  ];
};
export const parseDefaultGoal = (edit, patientid, goal) => {
  return {
    goalid: edit ? goal.goalid : 0,
    billingid: edit ? goal.billingid : 4329,
    patientid: edit ? goal.patientid : patientid,
    targetdate: edit ? Date.now() : null,
    description: edit ? goal.description : "",
    goalname: edit ? goal.goalname : "",
    templateid: edit ? goal.templateid : 0,
    dateclosed: edit ? Date.parse(goal.dateclosed) : null,
    stepdownservice: edit ? goal.stepdownservice : "",
    stepdowndate: edit ? Date.parse(goal.stepdowndate) : null,
    dischargedate: edit ? Date.parse(goal.dischargedate) : null,
    dischargeplanning: edit ? goal.dischargeplanning : "",
    statusid: edit ? goal.statusid : 0,
    lastupdateid: edit ? goal.lastupdateid : 680,
    companyid: edit ? goal.companyid : 26,
    comment: edit ? goal.comment : "",
  };
};
export const parseObjective = (patientid, goalid, objective) => {
  return [
    {
      objectiveid: objective.objectiveid ? objective.objectiveid : 0,
      billingid: objective.billingid ? objective.billingid : 4329,
      patientid: objective.patientid ? objective.patientid : patientid,
      targetdate: objective.targetdate
        ? formatDate(objective.targetdate)
        : null,
      description: objective.description ? objective.description : "",
      opendate: objective.opendate ? formatDate(objective.opendate) : null,
      statusid: objective.statusid ? parseInt(objective.statusid) : 0,
      goalid: objective.goalid ? objective.goalid : goalid,
      lastupdateid: objective.lastupdateid ? objective.lastupdateid : 680,
      frequencyid: objective.frequencyid ? parseInt(objective.frequencyid) : 0,
      stafftitleid: objective.stafftitleid
        ? parseInt(objective.stafftitleid)
        : 0,
    },
  ];
};
export const parseDefaultObjective = (edit, patientid, goalid, objective) => {
  return {
    objectiveid: edit ? objective.objectiveid : 0,
    billingid: edit ? objective.billingid : 4329,
    patientid: edit ? objective.patientid : patientid,
    targetdate: edit ? Date.parse(objective.targetdate) : null,
    description: edit ? objective.description : "",
    opendate: edit ? Date.parse(objective.opendate) : null,
    statusid: edit ? objective.statusid : 0,
    goalid: edit ? objective.goalid : goalid,
    lastupdateid: edit ? objective.lastupdateid : 680,
    frequencyid: edit ? objective.frequencyid : 0,
    stafftitleid: edit ? objective.stafftitleid : 0,
  };
};
export const parseIntervention = (intervention, patientid, objectiveid) => {
  return [
    {
      interventionid: intervention.interventionid
        ? intervention.interventionid
        : 0,
      billingid: intervention.billingid ? intervention.billingid : 4312,
      patientid: intervention.patientid ? intervention.patientid : patientid,
      targetdate: intervention.targetdate
        ? formatDate(intervention.targetdate)
        : null,
      objectiveid: intervention.objectiveid
        ? intervention.objectiveid
        : objectiveid,
      description: intervention.description ? intervention.description : "",
      frequencyid: intervention.frequencyid ? intervention.frequencyid : 0,
      stafftitleid: intervention.stafftitleid ? intervention.stafftitleid : 0,
      lastupdateid: intervention.lastupdateid ? intervention.lastupdateid : 680,
    },
  ];
};
export const parseDefaultIntervention = (
  edit,
  patientid,
  objectiveid,
  intervention
) => {
  return {
    interventionid: edit ? intervention.interventionid : 0,
    billingid: edit ? intervention.billingid : 4312,
    patientid: edit ? intervention.patientid : patientid,
    targetdate: edit ? Date.parse(intervention.targetdate) : null,
    objectiveid: edit ? intervention.objectiveid : objectiveid,
    description: edit ? intervention.description : "",
    frequencyid: edit ? intervention.frequencyid : 0,
    stafftitleid: edit ? intervention.stafftitleid : 0,
    lastupdateid: edit ? intervention.lastupdateid : 680,
  };
};
export const parseObjectives = (activeTreatmentPlan, activeGoal) =>
  activeTreatmentPlan.objectives.filter(
    (obj, i) => obj.goalid === activeGoal.goalid
  );

export const parseInterventions = (activeTreatmentPlan, activeObjective) =>
  activeTreatmentPlan.interventions.filter(
    (int, i) => int.objectiveid === activeObjective.objectiveid
  );
