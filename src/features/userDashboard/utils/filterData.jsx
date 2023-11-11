export const filterDatesInRange = (startDate, endDate, notesArray) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return notesArray.filter((note) => {
    const current = new Date(note.f1); // Access the date using the 'f1' field
    return current >= start && current <= end;
  });
};
export const filterByStaff = (staff, notesArray) => {
  return notesArray.filter((note) => note.f16 === staff);
};
export const filterByFunding = (fundingSource, notesArray, clientInfo) => {
  return notesArray.filter((note) => {
    const client = clientInfo[note.patientid];
    if (client) {
      return clientInfo[note.patientid].ins1_fundingsource === fundingSource;
    }
  });
};
