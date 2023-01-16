export const filterActiveServices = (activeServices, services) => {
  let serviceIds = activeServices.map((service) => service.recid);
  return services.filter((active) => serviceIds.includes(active.serviceid));
};
