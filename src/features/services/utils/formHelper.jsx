import { getListItem } from "../../../services/api";

export const filterActiveServices = (activeServices, services, returnCodes) => {
  if (activeServices.length < 1) return services;

  let serviceIds = activeServices.map((service) =>
    parseInt(service.grouplistid)
  );
  const filteredServices = services.filter((active) =>
    serviceIds.includes(parseInt(active.grouplistid))
  );
  if (returnCodes) {
    let filteredServiceCodes = [];
    filteredServices.map((service) => filteredServiceCodes.push(service.recid));
    return filteredServiceCodes;
  }
  return filteredServices;
};
export const getListItemName = async (recid) => {
  return await getListItem(recid).then((item) => {
    if (item) {
      return item.groupvalue;
    } else {
      return "NULL";
    }
  });
};
