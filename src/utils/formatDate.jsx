import moment from "moment";

export default function formatDate(newDate) {
  if (newDate instanceof Date || (typeof newDate === 'number' && !isNaN(newDate))) {
    const formattedDate = moment(newDate).format("YYYY-MM-DD");
    return formattedDate
  } else {
    const formattedDate = moment().format("YYYY-MM-DD");
    return formattedDate
  }
}