import moment from "moment";

export default function formatDate(format, newDate) {
  // Check if newDate is a moment-valid date string
  if (moment(newDate, "YYYY-MM-DD", true).isValid()) {
    const formattedDate = moment(newDate, "YYYY-MM-DD").format(format);
    return formattedDate;
  } else if (
    newDate instanceof Date ||
    (typeof newDate === "number" && !isNaN(newDate))
  ) {
    const formattedDate = moment(newDate).format(format);
    return formattedDate;
  } else {
    // If newDate is not provided or invalid, return the current date in the given format
    const formattedDate = moment().format(format);
    return formattedDate;
  }
}
