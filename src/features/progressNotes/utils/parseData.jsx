import convertToDate from "../../../utils/convertToDate";
import formatDate from "../../../utils/formatDate";
import formatTime from "../../../utils/formatTime";

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
export const parseProgressNote = (pNote, patientid) => {
  return [
    {
      recid: pNote.recid ? pNote.recid : 0,
      pageid: pNote.pageid ? pNote.pageid : 1,
      docid: pNote.docid ? pNote.docid : 2,
      patientid: pNote.patientid ? pNote.patientid : patientid,
      billingid: pNote.billingid ? pNote.billingid : 1000,
      f1: pNote.f1 ? formatDate(pNote.f1) : formatDate(Date.now()),
      f2: pNote.f2 ? formatTime(pNote.f2) : formatTime(Date.now()),
      f3: pNote.f3 ? formatTime(pNote.f3) : formatTime(Date.now()),
      f4: pNote.f4 ? pNote.f4 : "",
      f5: pNote.f5 ? pNote.f5 : "",
      f6: pNote.f6 ? pNote.f6 : "",
      f7: pNote.f7 ? pNote.f7 : "",
      f8: pNote.f8 ? pNote.f8.toString() : "",
      f9: pNote.f9 ? pNote.f9 : "",
      f10: pNote.f10 ? pNote.f10 : "",
      f11: pNote.f11 ? pNote.f11 : "",
      f12: pNote.f12 ? pNote.f12 : "",
      f13: pNote.f13 ? pNote.f13 : "",
      f14: pNote.f14 ? pNote.f14 : "",
      f15: pNote.f15 ? pNote.f15 : "",
      f16: pNote.f16 ? pNote.f16 : "",
      f17: pNote.f17 ? pNote.f17 : "",
      f18: pNote.f18 ? pNote.f18 : "",
      f19: pNote.f19 ? pNote.f19 : "",
      f20: pNote.f20 ? pNote.f20 : "",
      f21: pNote.f21 ? pNote.f21 : "",
      f22: pNote.f22 ? pNote.f22 : "",
      f23: pNote.f23 ? pNote.f23 : "",
      f24: pNote.f24 ? pNote.f24 : "",
      f25: pNote.f25 ? pNote.f25 : "",
      f26: pNote.f26 ? pNote.f26 : "",
      f27: pNote.f27 ? pNote.f27 : "",
      f28: pNote.f28 ? pNote.f28 : "",
      f29: pNote.f29 ? pNote.f29 : "",
      f30: pNote.f30 ? pNote.f30 : "",
      f31: pNote.f31 ? pNote.f31 : "",
      f32: pNote.f32 ? pNote.f32 : "",
      f33: pNote.f33 ? pNote.f33 : "",
      f34: pNote.f34 ? pNote.f34 : "",
      f35: pNote.f35 ? pNote.f35 : "",
      f36: pNote.f36 ? pNote.f36 : "",
      f37: pNote.f37 ? pNote.f37 : "",
      f38: pNote.f38 ? pNote.f38 : "",
      f39: pNote.f39 ? pNote.f39 : "",
      f40: pNote.f40 ? pNote.f40 : "",
      f41: pNote.f41 ? pNote.f41 : "",
      f42: pNote.f42 ? pNote.f42 : "",
      f43: pNote.f43 ? pNote.f43 : "",
      f44: pNote.f44 ? pNote.f44 : "",
      f45: pNote.f45 ? pNote.f45 : "",
      f46: pNote.f46 ? pNote.f46 : "",
      f47: pNote.f47 ? pNote.f47 : "",
      f48: pNote.f48 ? pNote.f48 : "",
      f49: pNote.f49 ? pNote.f49 : "",
      f50: pNote.f50 ? pNote.f50 : "",
      f51: pNote.f51 ? pNote.f51 : "",
      f52: pNote.f52 ? pNote.f52 : "",
      f53: pNote.f53 ? pNote.f53 : "",
      f54: pNote.f54 ? pNote.f54 : "",
      f55: pNote.f55 ? pNote.f55 : "",
      f56: pNote.f56 ? pNote.f56 : "",
      f57: pNote.f57 ? pNote.f57 : "",
      f58: pNote.f58 ? pNote.f58 : "",
      f59: pNote.f59 ? pNote.f59 : "",
      f60: pNote.f60 ? pNote.f60 : "",
      f61: pNote.f61 ? pNote.f61 : "",
      f62: pNote.f62 ? pNote.f62 : "",
      f63: pNote.f63 ? pNote.f63 : "",
      f64: pNote.f64 ? pNote.f64 : "",
      f65: pNote.f65 ? pNote.f65 : "",
      f66: pNote.f66 ? pNote.f66 : "",
      f67: pNote.f67 ? pNote.f67 : "",
      f68: pNote.f68 ? pNote.f68 : "",
      f69: pNote.f69 ? pNote.f69 : "",
      f70: pNote.f70 ? pNote.f70 : "",
    },
  ];
};
export const parseDefaultProgressNote = (pNote) => {
  return {
    recid: pNote.recid,
    pageid: pNote.pageid,
    docid: pNote.docid,
    patientid: pNote.patientid,
    billingid: pNote.billingid,
    f1: Date.parse(pNote.f1),
    f2: convertToDate(pNote.f2),
    f3: convertToDate(pNote.f3),
    f4: pNote.f4,
    f5: pNote.f5,
    f6: pNote.f6,
    f7: pNote.f7,
    f8: pNote.f8.split(","),
    f9: pNote.f9,
    f10: pNote.f10,
    f11: pNote.f11,
    f12: pNote.f12,
    f13: pNote.f13,
    f14: pNote.f14,
    f15: pNote.f15,
    f16: pNote.f16,
    f17: pNote.f17,
    f18: pNote.f18,
    f19: pNote.f19,
    f20: pNote.f20,
    f21: pNote.f21,
    f22: pNote.f22,
    f23: pNote.f23,
    f24: pNote.f24,
    f25: pNote.f25,
    f26: pNote.f26,
    f27: pNote.f27,
    f28: pNote.f28,
    f29: pNote.f29,
    f30: pNote.f30,
    f31: pNote.f31,
    f32: pNote.f32,
    f33: pNote.f33,
    f34: pNote.f34,
    f35: pNote.f35,
    f36: pNote.f36,
    f37: pNote.f37,
    f38: pNote.f38,
    f39: pNote.f39,
    f40: pNote.f40,
    f41: pNote.f41,
    f42: pNote.f42,
    f43: pNote.f43,
    f44: pNote.f44,
    f45: pNote.f45,
    f46: pNote.f46,
    f47: pNote.f47,
    f48: pNote.f48,
    f49: pNote.f49,
    f50: pNote.f50,
    f51: pNote.f51,
    f52: pNote.f52,
    f53: pNote.f53,
    f54: pNote.f54,
    f55: pNote.f55,
    f56: pNote.f56,
    f57: pNote.f57,
    f58: pNote.f58,
    f59: pNote.f59,
    f60: pNote.f60,
    f61: pNote.f61,
    f62: pNote.f62,
    f63: pNote.f63,
    f64: pNote.f64,
    f65: pNote.f65,
    f66: pNote.f66,
    f67: pNote.f67,
    f68: pNote.f68,
    f69: pNote.f69,
    f70: pNote.f70,
  };
};
export const parseServices = (services, serviceCodes, serviceArray) => {
  services.forEach((service) => {
    const foundService = serviceCodes.find((item) => item.code === service);
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
  const objectives = findGoal ? activeTreatmentPlan.objectives.filter(
    (obj, i) => obj.goalid === findGoal.goalid
  ) : [];
  const findObjective = objectives.find(
    (objective) => objective.description === pnObjective
  );
  const interventions = findObjective ? activeTreatmentPlan.interventions.filter(
    (int, i) => int.objectiveid === findObjective.objectiveid
  ) : [];
  const findIntervention = interventions.find(
    (intervention) => intervention.description === pnIntervention
  );
  setSelectedGoal({
    goal: findGoal ? findGoal : null,
    objective: findObjective ? findObjective : null,
    intervention: findIntervention ? findIntervention : null,
  });
};
