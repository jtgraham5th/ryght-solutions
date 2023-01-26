export const filterActiveServices = (activeServices, services) => {
  let serviceIds = activeServices.map((service) =>
    parseInt(service.grouplistid)
  );
  return services.filter((active) =>
    serviceIds.includes(parseInt(active.grouplistid))
  );
};
