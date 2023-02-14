export const filterActiveServices = (activeServices, services, returnCodes) => {
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
